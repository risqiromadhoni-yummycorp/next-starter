import '@styles/globals.css';

import { validateConfigApp } from '@configs/app';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

validateConfigApp();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
