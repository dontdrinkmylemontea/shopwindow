import React, { Component } from 'react';
import styles from './Icon.css';

class Icon extends Component {
  render() {
    const { type } = this.props;
    return (
      <div style={{ pointerEvents: 'none' }}>
        <img src={`/${type}.svg`} alt={type} className={styles.bannerIcon} />
      </div>
    );
  }
}
export default Icon;
