"use client";

import { useState } from "react";
import styles from "./Links.module.scss";

import NavLink from "./navLink/NavLink";
import Image from "next/image";

const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

function Links() {
  const [open, setOpen] = useState(false);

  //temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink link={link} />
          </li>
        ))}

        {session ? (
          <>
            {isAdmin && (
              <li>
                <NavLink link={{ title: "Admin", path: "/admin" }} />
              </li>
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <li>
            <NavLink link={{ title: "Login", path: "/login" }} />
          </li>
        )}
      </ul>

      {/* burger icon for CALL NAVIGATION BAR ON THE PHONE  */}
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((open) => !open)}
      />

      {/* @ MOBILE LINKS / RESPONSIVENESS */}
      {open && (
        <ul className={styles.mobileLinks}>
          {links.map((link) => (
            <li key={link.title}>
              <NavLink link={link} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Links;
