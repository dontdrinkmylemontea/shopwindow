import React, { Component } from 'react';

const dragableItemList = [];

const containerList = [];

const register = (itemContent, flag) => {
  const targetList = flag ? dragableItemList : containerList;
  targetList.push(itemContent);
  return targetList.length - 1;
};

export const DragedItem = WrappedComponent => {
  return class extends Component {
    state = {
      itemId: undefined,
    };

    componentDidMount() {
      const itemId = register({ containerName: 'plate' }, true);
      this.setState({
        itemId,
      });
    }

    onDrag = (dragedItemIndex, { x, y }) => {
      const targetItem = dragableItemList[dragedItemIndex];
      if (targetItem && targetItem.containerName) {
        const targetContainer = containerList.filter(
          ({ name }) => name === targetItem.containerName,
        )[0];
        if (targetContainer && targetContainer.changeState) {
          targetContainer.changeState('hover');
        }
      }
    };

    render() {
      const { itemId } = this.state;
      return (
        <WrappedComponent {...this.props} onDrag={position => this.onDrag(itemId, position)} />
      );
    }
  };
};

export const ContainerItem = WrappedComponent => {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} registerContainer={content => register(content)} />;
    }
  };
};
