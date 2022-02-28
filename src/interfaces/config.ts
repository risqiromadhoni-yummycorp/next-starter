export enum AppEnvEnum {
  LOCAL = 'local',
  SIT = 'sit',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

export interface AppConfigInterface {
  APP_ENV: AppEnvEnum | string | 'local' | 'sit' | 'staging' | 'production';
  APP_PWA: boolean;
  APP_NAME: string;
  APP_VERSION: string;
}
