import React, { Component } from 'react';
import styles from './Icon.css';

class Icon extends Component {
  render() {
    const { type, size = 70, zIndex = 1 } = this.props;
    const styleObj = { width: `${size}px`, height: `${size}px`, zIndex };
    return (
      <div className={styles.bannerIcon} style={styleObj}>
        <img
          className={styles.iconImg}
          style={{ pointerEvents: 'none', ...styleObj }}
          src={`/${type}.svg`}
          alt={type}
        />
      </div>
    );
  }
}
export default Icon;
