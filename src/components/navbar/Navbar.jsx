import Links from "./links/Links";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>logo&rarr;</div>
      <Links />
    </nav>
  );
}

export default Navbar;
