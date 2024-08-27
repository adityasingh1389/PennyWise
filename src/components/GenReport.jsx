import styles from "./GenReport.module.css";
import { useState } from "react";
export default function GenReport() {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [tot, setTot] = useState("");
  const [groc, setGroc] = useState("");
  const [trans, setTrans] = useState("");
  const [uti, setUti] = useState("");
  const [others, setOthers] = useState("");
  function handleFromChange(event) {
    setFrom(event.target.value);
  }
  function handleToChange(event) {
    setTo(event.target.value);
  }
  function handleGenerate() {
    // if (!from || !to) {
    //   alert("enter values!");
    // }
    if (to <= from) {
      alert("enter a valid range of date");
    }
    if (!localStorage.getItem("transactionLog")) {
      localStorage.setItem("transactionLog", JSON.stringify([]));
    }
    var data = JSON.parse(localStorage.getItem("transactionLog"));
    var total = 0;
    var grocCount = 0;
    var transCount = 0;
    var utiCount = 0;
    var otherCount = 0;
    for (var i = 0; i < data.length; i++) {
      if (!data[i].amount) {
        continue;
      }
      if (data[i].date <= to && data[i].date >= from) {
        if (data[i].category === "groceries") {
          grocCount = grocCount + Number(data[i].amount);
        }
        if (data[i].category === "transport") {
          transCount = transCount + Number(data[i].amount);
        }
        if (data[i].category === "utilities") {
          utiCount = utiCount + Number(data[i].amount);
        }
        if (data[i].category === "others") {
          otherCount = otherCount + Number(data[i].amount);
        }
        total = total + Number(data[i].amount);
      }
    }
    setGroc(grocCount);
    setTrans(transCount);
    setUti(utiCount);
    setOthers(otherCount);
    setTot(total);
  }
  return (
    <>
      <div className={styles.heading}>
        Generate <span className={styles.green}>Report</span>
      </div>
      <div className={styles.mainContent}>
        <table>
          <tbody>
            <tr>
              <td>
                <label className={styles.Label} htmlFor="from">
                  From
                </label>
                <input onChange={handleFromChange} type="date" />
              </td>
              <td>
                <label className={styles.Label} htmlFor="to">
                  To
                </label>
                <input onChange={handleToChange} type="date" />
              </td>
              <td>
                <button className={styles.adibtn} onClick={handleGenerate}>
                  Generate
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <hr className={styles.hr} />
        <div className={styles.Label}>Results:</div>
        <div className={styles.Label}>
          Total expense: <span className={styles.greenAns}>&#8377;{tot}</span>
        </div>
        <div className={styles.stats}>
          <div className={styles.Label}>
            Groceries: <span className={styles.greenAns}>&#8377;{groc}</span>
          </div>
          <div className={styles.Label}>
            Transport: <span className={styles.greenAns}>&#8377;{trans}</span>
          </div>
          <div className={styles.Label}>
            Utilities: <span className={styles.greenAns}>&#8377;{uti}</span>
          </div>
          <div className={styles.Label}>
            Others: <span className={styles.greenAns}>&#8377;{others}</span>
          </div>
        </div>
      </div>
      <div className={styles.addExpense}>
        <a
          href="./Add Expense"
          className={`${styles.buttonExpense} ${styles.btn}`}
        >
          Add Expense
        </a>
      </div>
    </>
  );
}
