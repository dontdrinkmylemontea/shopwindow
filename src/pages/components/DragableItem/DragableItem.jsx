import React, { Component } from 'react';

const getRootDom = () => document.getElementById('root');
class DragableItem extends Component {
  constructor(props) {
    super(props);
    this.itemRef = React.createRef();
    this.initPosition = undefined;
    window.onselectstart = () => false;
  }

  componentWillUnmount() {
    this.clear();
  }

  dragBegin = () => {
    const rootDom = getRootDom();
    rootDom.addEventListener('mousemove', this.dragMove);
  };

  dragEnd = () => {
    this.clear();
    const itemDom = this.itemRef.current;
    itemDom.style.transform = 'translate(0px, 0px)';
  };

  dragMove = e => {
    const itemDom = this.itemRef.current;
    const { pageX: x, pageY: y } = e;
    let transform = { x: 0, y: 0 };
    if (this.initPosition) {
      transform = { x: x - this.initPosition.x, y: y - this.initPosition.y };
    } else {
      this.initPosition = { x, y };
    }
    itemDom.style.transform = `translate(${transform.x}px, ${transform.y}px)`;
  };

  clear = () => {
    const rootDom = getRootDom();
    rootDom.removeEventListener('mousemove', this.dragMove);
  };

  render() {
    const { children, zIndex } = this.props;
    return (
      <div
        ref={this.itemRef}
        onMouseDown={this.dragBegin}
        onMouseUp={this.dragEnd}
        style={{ cursor: 'pointer', zIndex }}
      >
        {children}
      </div>
    );
  }
}
export default DragableItem;
