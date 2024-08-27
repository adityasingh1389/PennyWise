import { useState } from "react";
import styles from "./AddExpense.module.css";
import AllTransactions from "./AllTransactions";
export default function AddExpense({ data }) {
  //var data = JSON.parse(localStorage.getItem("transactionLog")) || [];
  const [amt, setAmt] = useState();
  const [cat, setCat] = useState();
  const [date, setDate] = useState();
  const [desc, setDesc] = useState();

  const [expenseLog, setExpenseLog] = useState(data);

  function handleAmount(event) {
    setAmt(event.target.value);
  }
  function handleCategory(event) {
    setCat(event.target.value);
  }
  function handleDate(event) {
    setDate(event.target.value);
  }
  function handleDescription(event) {
    setDesc(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!amt || !cat || !date || !desc) {
      alert("fill out all details");
      return;
    }
    const exp = {
      amount: amt,
      category: cat,
      date: date,
      description: desc,
    };
    var newData = [exp, ...expenseLog];
    setExpenseLog(newData);
    localStorage.setItem("transactionLog", JSON.stringify(newData));
    alert("Transaction recorded successfully");
  }

  return (
    <>
      <div className={styles.headingex}>
        <span className={styles.name}>Add </span>expense
      </div>
      <div className={styles.mainContent}>
        <table>
          <tbody>
            <tr>
              <td>
                <label className={styles.Label} htmlFor="amount">
                  Amount:
                </label>
              </td>
              <td>
                <input
                  className={styles.Input}
                  type="number"
                  id="amount"
                  name="amount"
                  onChange={handleAmount}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className={styles.Label} htmlFor="category">
                  Category:
                </label>
              </td>
              <td>
                <select
                  className={styles.Input}
                  id="category"
                  name="category"
                  onChange={handleCategory}
                  required
                >
                  <option>select</option>
                  <option value="groceries">Groceries</option>
                  <option value="transport">Transport</option>
                  <option value="utilities">Utilities</option>
                  <option value="others">Others</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label className={styles.Label} htmlFor="date">
                  Date:
                </label>
              </td>
              <td>
                <input
                  className={styles.Input}
                  type="date"
                  id="date"
                  name="date"
                  onChange={handleDate}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className={styles.Label} htmlFor="description">
                  Description:
                </label>
              </td>
              <td>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  cols="50"
                  onChange={handleDescription}
                  maxLength={"100"}
                  required
                ></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <button className={styles.submitBtn} onClick={handleSubmit}>
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <a
          href="/Generate Report"
          className={`${styles.buttonReport} ${styles.btn}`}
        >
          Generate report
        </a>
      </div>

      <div className={styles.heading}>
        <span className={styles.name}>Transaction </span>history
      </div>
      <AllTransactions data={expenseLog} />
    </>
  );
}
