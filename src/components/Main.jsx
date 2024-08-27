import logo from "../assets/logo.png";
import styles from "./Main.module.css";
import { Outlet } from "react-router";
import Stats from "./Stats.jsx";
export default function Main({ data }) {
  if (!localStorage.getItem("transactionLog")) {
    localStorage.setItem("transactionLog", JSON.stringify([]));
  }

  var data = JSON.parse(localStorage.getItem("transactionLog"));
  var totalAmount = 0;
  for (var i = 0; i < data.length; i = i + 1) {
    if (!data[i].amount) {
      continue;
    }
    totalAmount = totalAmount + Number(data[i].amount);
  }
  console.log(totalAmount);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sideStructure}>
          <h1 className={styles.greetings}>
            PennyWise <span className={styles.name}>Perfect</span>
          </h1>
          <h2 className={styles.moto}>stay financially organized!</h2>
          <div className={styles.buttonContainer}>
            <a
              href="./Add Expense"
              className={`${styles.buttonExpense} ${styles.btn}`}
            >
              Add Expense
            </a>
            <a
              href="/Generate Report"
              className={`${styles.buttonReport} ${styles.btn}`}
            >
              Generate report
            </a>
          </div>
          <div className={styles.totalExpense}>
            Total expense this month:
            <span className={styles.bold}>
              &#8377;
              {totalAmount}
            </span>
          </div>
          <Stats></Stats>
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
