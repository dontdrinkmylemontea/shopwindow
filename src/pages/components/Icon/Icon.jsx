import React, { Component } from 'react';
import styles from './Icon.css';

class Icon extends Component {
  render() {
    const { type } = this.props;
    return (
      <div className={styles.bannerIcon}>
        <img
          className={styles.iconImg}
          style={{ pointerEvents: 'none' }}
          src={`/${type}.svg`}
          alt={type}
        />
      </div>
    );
  }
}
export default Icon;
