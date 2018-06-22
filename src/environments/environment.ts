// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  github: {
    apiUrl: 'https://api.github.com',
    loginUrl: 'https://github.com/login/oauth',
    client_id: '1d781e09302591cd030c',
    client_secret: '305734d537ffef991317c17f91f603526a8c4a58'
  }
};
