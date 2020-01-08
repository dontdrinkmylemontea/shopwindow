import React, { Component } from 'react';
// import { connect } from 'dva';
// import {Spin} from 'antd';
// import styles from './DragableItem.less';

// @connect(({ loading }) => ({
//   loadingData: loading,
// }))
class DragableItem extends Component {
  state = {
    coordinate: { x: 0, y: 0 },
  };

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}
export default DragableItem;
