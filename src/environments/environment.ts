// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  origin: 'https://localhost/wooBackend/wp-json/wc/v2',
  woocommerce: {
    consumer_key:  'ck_8a7aa187ae35839fd2b371c8638f00c361cc7228',
    consumer_secret: 'cs_6b30ae838c48da7aae25347a160591d1e6aee9d4'
  }
};
