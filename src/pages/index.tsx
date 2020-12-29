import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <div className={styles.title}>
          <span className={styles.item}>Agile</span>
            Tech
        </div>
        <div>Click &nbsp;
          <Link to='profile'>here</Link>
          &nbsp;
           to go to the page profile
        </div>
      </ul>
    </div>
  );
}
