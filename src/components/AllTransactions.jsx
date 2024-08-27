import styles from "./AllTransactions.module.css";
import Record from "./Record";

export default function AllTransactions({ data }) {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heading}>
          <div className={styles.label}>Amount</div>
          <div className={styles.label}>Date</div>
          <div className={styles.label}>Category</div>
          <div className={` ${styles.label} ${styles.description}`}>
            Description
          </div>
        </div>
        {data.map((item, index) => (
          <Record
            key={index} // Adding a unique key for each record
            amount={item.amount}
            date={item.date}
            category={item.category}
            desc={item.description}
          />
        ))}
      </div>
    </>
  );
}
