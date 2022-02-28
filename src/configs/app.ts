import { AppConfigInterface, AppEnvEnum } from '@interfaces/config';
import { bool, cleanEnv, str } from 'envalid';

import packageJson from '../../package.json';

const environment: AppConfigInterface = Object.assign(process.env, {
  APP_ENV: process.env.APP_ENV || AppEnvEnum['LOCAL'],
  APP_PWA: (process.env.APP_PWA || false) as boolean,
  APP_NAME: packageJson['displayName'],
  APP_VERSION: `v${packageJson['version']}`,
});

export const configApp = cleanEnv<AppConfigInterface>(environment, {
  APP_ENV: str({ choices: Object.values(AppEnvEnum) }),
  APP_PWA: bool({ default: false }),
  APP_NAME: str(),
  APP_VERSION: str(),
});

/**
 * Validate environment is updated
 * @returns
 */
export const validateConfigApp = () => configApp;
