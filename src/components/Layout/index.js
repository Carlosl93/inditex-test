import React from "react";

import Header from "../Header";
import styles from "./styles.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
