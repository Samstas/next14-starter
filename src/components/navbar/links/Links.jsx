"use client";

import { useState } from "react";
import styles from "./Links.module.scss";

import NavLink from "./navLink/NavLink";

function Links() {
  const [open, setOpen] = useState(false);

  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  const session = true;
  const isAdmin = true;

  return (
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
  );
}

export default Links;
