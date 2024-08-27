import styles from "./Stats.module.css";

export default function Stats() {
  if (!localStorage.getItem("transactionLog")) {
    localStorage.setItem("transactionLog", JSON.stringify([]));
  }

  var data = JSON.parse(localStorage.getItem("transactionLog"));
  var grocCount = 0;
  var transCount = 0;
  var utiCount = 0;
  var otherCount = 0;
  var tot = 0;
  for (var i = 0; i < data.length; i++) {
    if (!data[i].amount) {
      continue;
    }
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
    tot = tot + Number(data[i].amount);
  }

  var grocWidth = (grocCount / tot) * 100;
  var tranWidth = (transCount / tot) * 100;
  var utiWidth = (utiCount / tot) * 100;
  var othWidth = (otherCount / tot) * 100;
  return (
    <>
      <div className={styles.expenseByCategories}>
        <div className={styles.expenseHeading}>Expense by categories</div>
        <div className={styles.Stats}>
          <div className={styles.stat}>
            <div className={styles.label}>Transport</div>
            <div className={styles.chart}>
              <div
                className={styles.greenPart}
                style={{ width: tranWidth + "%" }}
              ></div>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.label}>Groceries</div>
            <div className={styles.chart}>
              <div
                className={styles.greenPart}
                style={{ width: grocWidth + "%" }}
              ></div>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.label}>Utilities</div>
            <div className={styles.chart}>
              <div
                className={styles.greenPart}
                style={{ width: utiWidth + "%" }}
              ></div>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.label}>Others</div>
            <div className={styles.chart}>
              <div
                className={styles.greenPart}
                style={{ width: othWidth + "%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
