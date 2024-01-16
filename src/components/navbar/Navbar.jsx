import Links from "./links/Links";
import Link from "next/link";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        logo&rarr;
      </Link>
      <Links />
    </nav>
  );
}

export default Navbar;
