import React from 'react';
import { HeaderProps } from "../../interfaces/header/header";
import styles from './header.module.scss';

const Header: React.FC<HeaderProps> = ({ displayName }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{displayName}</h1>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
