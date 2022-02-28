/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
const pwa = require('next-pwa');
const nextComposePlugins = require('next-compose-plugins');
const { i18n } = require('./next-i18next.config.js');

const { APP_PWA } = process.env;

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  i18n,
};

const pwaPlugin = [
  pwa,
  {
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: typeof APP_PWA === 'boolean' ? !APP_PWA : APP_PWA === 'false',
    },
  },
];

const plugins = [pwaPlugin];

module.exports = nextComposePlugins(plugins, nextConfig);
