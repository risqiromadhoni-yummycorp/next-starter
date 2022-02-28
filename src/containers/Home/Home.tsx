import { Text } from '@components/Text';
import merge from 'lodash/merge';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import React, { FC, useEffect, useState } from 'react';
import { useIsFirstRender } from 'usehooks-ts';

import styles from './Home.module.css';
import type { HomeContainerProps } from './Home.type';

const HomeContainer: FC<HomeContainerProps> = (props) => {
  const { photos } = props;
  const { t } = useTranslation('home');
  const isFirst = useIsFirstRender();
  const [photosState, setPhotosState] = useState<HomeContainerProps['photos']>([]);

  useEffect(() => {
    const fetchPhotos = async () =>
      await fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=1000')
        .then(async (res) => {
          const resPhotos = await res.json();
          setPhotosState(merge<typeof photos, typeof photos>(photos, resPhotos));
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('[ERROR] When fetch photos: ', err);
        });
    if (isFirst) fetchPhotos();
  }, [isFirst, photos, photosState]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Text tag="h1" title={t('welcome')} className={styles.title}>
          {t('welcome')} to{' '}
          <Text
            tag="a"
            weight="bold"
            a={{
              href: 'https://nextjs.org',
              target: '_blank',
            }}>
            Next.js!
          </Text>
        </Text>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>

          {photosState.map((photo) => (
            <a key={photo.id} href="#" className={styles.card}>
              <h2>
                [{photo.id}] {photo.title} &rarr;
              </h2>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default HomeContainer;
