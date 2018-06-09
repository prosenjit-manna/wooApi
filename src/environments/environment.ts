// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  origin: 'https://localhost/wooBackend',
  wcEndpoint: '/wp-json/wc/v2',
  woocommerce: {
    consumer_key:  'ck_3d9e10ae2c3f28e4581dc7af181c825923caa8a5',
    consumer_secret: 'cs_2cdf0e3c6566d521f4bcd3d5f9ef7c7f1eec3213'
  }
};
