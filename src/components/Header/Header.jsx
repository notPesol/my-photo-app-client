import React from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "./Header.module.css";

const appName = (
  <h1>
    <Link to="/">My-Photos</Link>
  </h1>
);

const Header = () => {
  return (
    <header className={styles.Header}>
      {appName}
      <ul>
        <li>
          <NavLink to="/add">เพิ่มรูปภาพ</NavLink>
        </li>
        <li>
          <NavLink to="/dl1">Dummy Link 1</NavLink>
        </li>
        <li>
          <NavLink to="/dl2">Dummy Link 2</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
