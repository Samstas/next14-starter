import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>logo</div>
      <div className={styles.text}>
        Lama creative thoughts agency © All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
