import styles from "./Record.module.css";

export default function Record({ amount, date, category, desc }) {
  return (
    <div className={styles.record}>
      <div className={styles.recordEntry}>{amount}</div>
      <div className={styles.recordEntry}>{date}</div>
      <div className={styles.recordEntry}>{category}</div>
      <div className={` ${styles.recordEntry} ${styles.recordDesc}`}>
        {desc}
      </div>
    </div>
  );
}
