import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss"; // Импорт стилей
import Link from "next/link";
import { useHeader } from "./model";

const Header = ({ pageTitle }) => {
  const { userName, initials } = useHeader();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <span className={`${styles.pageTitle} ${styles.activePage}`}>
            {pageTitle}
          </span>
          <Link href="/">Главная</Link>
          <Link href="/password-generator">Генератор</Link>
          <Link href="/calculator">Калькулятор</Link>
        </nav>
        <div className={styles.user}>
          <span className={styles.userName}>{userName}</span>
          <span className={styles.initials}>{initials}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
