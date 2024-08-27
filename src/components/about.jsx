import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.heading}>
          <span className={styles.greenSpan}>About</span> us
        </div>
        <div className={styles.content}>
          Welcome to PennyWise-The ultimate expense tracker
        </div>
        <div className={styles.heading1}>
          <span className={styles.greenSpan}>Our </span>Mission
        </div>
        <div className={styles.content}>
          At PennyWise, our mission is to empower individuals to take control of
          their finances with ease and efficiency. We believe that managing your
          expenses should be simple, intuitive, and stress-free.
        </div>
        <div className={styles.heading1}>
          <span className={styles.greenSpan}>What </span>is PennyWise?
        </div>
        <div className={styles.content}>
          PennyWise is an innovative expense tracking app designed to help you
          monitor your spending, set budgets, and achieve your financial goals.
          Whether you are a student managing a tight budget or a professional
          looking to optimize your expenses, PennyWise provides the tools you
          need to stay on top of your finances.
        </div>
        <div className={styles.heading1}>
          <span className={styles.greenSpan}>Key </span>Features
        </div>
        <div className={styles.content}>
          <ul>
            <li>
              Easy Expense Logging: Quickly log your expenses with just a few
              taps. Categorize your spending to get a clear view of where your
              money is going.
            </li>
            <li>
              Multi-Device Sync: Access your expense data from any device. Your
              information is synced in real-time across all your devices.
            </li>
            <li>
              Visual Insights: Gain insights into your spending habits with
              intuitive charts and graphs. Understand your financial patterns
              and make informed decisions.
            </li>
          </ul>
        </div>
        <div className={styles.heading1}>
          <span className={styles.greenSpan}>Why </span> Choose PennyWise?
        </div>
        <div className={styles.content}>
          <ul>
            <li>
              User-Friendly Interface: Our app is designed with simplicity in
              mind, making it easy for anyone to use.
            </li>
            <li>
              Expense Reports: Generate detailed reports of your expenses for
              any time period. Use these reports to plan better and save more.
            </li>
            <li>
              Regular Updates: We are constantly improving PennyWise, adding new
              features, and ensuring the best user experience.
            </li>
          </ul>
        </div>
        <div className={styles.heading1}>
          <span className={styles.greenSpan}>Get</span> started today!
        </div>
        <div className={styles.content}>
          Join the PennyWise community and start your journey towards better
          financial management. Download the app today and take the first step
          towards a more organized and financially secure future.
        </div>
      </div>
    </>
  );
}
