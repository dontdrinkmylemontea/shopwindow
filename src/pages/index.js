import React, { Component } from 'react';
import Icon from './components/Icon/Icon';
import DragableItem from './components/DragableItem/DragableItem';
import styles from './index.css';

const goods = [
  {
    title: '二分查找',
    href: 'http://39.108.94.69:8001/binarysearch',
    description: '比较二分搜索和顺序搜索在前端执行的效率',
  },
  {
    title: '吸猫处',
    href: 'http://39.108.94.69:8001/kitten',
    description: 'flex瀑布流，随机猫猫图片',
  },
  {
    title: '四叉树',
    description: '四叉树在web前端的应用',
  },
  {
    title: '字典树',
    description: '字典树在web前端的应用',
  },
  {
    title: '更多作品敬请期待',
    description: "(●'◡'●)",
  },
];

const generateStyles = args =>
  Object.keys(args)
    .filter(key => args[key])
    .map(key => styles[key])
    .join(' ');

class pageName extends Component {
  state = {
    currentGood: 0,
  };

  onChangeGood = (goodIndex, href) => {
    this.setState({ currentGood: goodIndex });
    if (href) {
      window.open(href);
    }
  };

  render() {
    const { currentGood } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.banner}>
          <DragableItem zIndex={2}>
            <Icon type="hamburger" />
          </DragableItem>
          <div className={styles.bannerText}>Hamburger</div>
        </div>
        <div className={styles.goodsBar}>
          {goods.map(({ title, description, href }, key) => (
            <div
              key={key}
              className={generateStyles({ good: true, active: currentGood === key })}
              onClick={() => this.onChangeGood(key, href)}
            >
              <div className={styles.title}>{title}</div>
              <div className={styles.desc}>{description}</div>
            </div>
          ))}
        </div>
        <div className={styles.plate}>
          <Icon type="plate" size={60} />
        </div>
      </div>
    );
  }
}
export default pageName;
