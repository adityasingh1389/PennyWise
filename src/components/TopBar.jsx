import logo from "../assets/logo_white.png";
import styles from "./TopBar.module.css";
export default function TopBar() {
  return (
    <>
      <div className={styles.topBar}>
        <img className={styles.Logo} src={logo} alt="logo" />
        <div>
          <ul className={styles.navBar}>
            <li className={styles.navElement}>
              <a className={styles.navElement1} href="./home">
                Home
              </a>
            </li>
            <li className={styles.navElement}>
              <a className={styles.navElement1} href="/about">
                About
              </a>
            </li>
            <li className={styles.navElement}>
              <a className={styles.navElement1} href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
