import styles from './index.css';
import hamburger from '../assets/img/hamburger.svg';
import algo from '../assets/img/algo.svg';
import tree from '../assets/img/tree.svg';
import css from '../assets/img/css.svg';
import clock from '../assets/img/clock.svg';

const goods = [
  {
    title: '二分查找',
    description: '比较二分搜索和顺序搜索在前端执行的效率',
    image: algo,
  },
  {
    title: '吸猫处',
    description: 'flex瀑布流，随机猫猫图片',
    image: css,
  },
  {
    title: '四叉树',
    description: '四叉树在web前端的应用',
    image: tree,
  },
  {
    title: '字典树',
    description: '字典树在web前端的应用',
    image: tree,
  },
  {
    title: '更多作品敬请期待',
    description: "(●'◡'●)",
    image: clock,
  },
];

export default function() {
  return (
    <div>
      <div className={styles.banner}>
        <a href="/">
          <img src={hamburger} alt="icon" className={styles.bannerIcon} />
        </a>
        <div className={styles.bannerText}>Hamburger</div>
      </div>
      <div className={styles.goodsBar}>
        {goods.map(({ image, title, description }, key) => (
          <div key={key} className={styles.good} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.title}>{title}</div>
            <div className={styles.desc}>{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
