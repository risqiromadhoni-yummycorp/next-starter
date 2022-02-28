import { Skeleton } from '@components/Skeleton';
import classNames from 'classnames';
import React from 'react';

import styles from './Home.module.css';

const HomeSkeleton = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <Skeleton.Square className="w-96 h-6" />

      <Skeleton.Square className={classNames(styles.description, 'w-96 h-4')} />

      <div className={styles.grid}>
        {Array.from(new Array(4).keys()).map((key) => (
          <div key={key} className={styles.card}>
            <Skeleton.Square className="w-64 h-4" />
            <Skeleton.Square className="w-64 h-4 mt-4" />
            <Skeleton.Square className="w-64 h-4 mt-4" />
          </div>
        ))}
      </div>
    </main>

    <footer className={styles.footer}>
      <Skeleton.Square className="w-80 h-4" />
    </footer>
  </div>
);

export default HomeSkeleton;
