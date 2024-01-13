"use client";

import { usePathname } from "next/navigation";
import styles from "./NavLink.module.scss";
import Link from "next/link";

function NavLink({ link }) {
  const pathName = usePathname();

  return (
    <Link
      href={link.path}
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
    >
      {link.title}
    </Link>
  );
}

export default NavLink;
