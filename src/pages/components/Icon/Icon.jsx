import React, { Component } from 'react';
import styles from './Icon.css';

class Icon extends Component {
  render() {
    const { type, href = '/' } = this.props;
    return (
      <a href={href}>
        <img src={`/${type}.svg`} alt={type} className={styles.bannerIcon} />
      </a>
    );
  }
}
export default Icon;
