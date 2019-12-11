import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <div className={styles.box}>{props.children}</div>
    </div>
  );
}

export default BasicLayout;
