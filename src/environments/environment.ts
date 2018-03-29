// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCnwkaJCQXnQe0SCbNzwjKFBtMYomnuans",
    authDomain: "digital-sv-usa.firebaseapp.com",
    databaseURL: "https://digital-sv-usa.firebaseio.com",
    projectId: "digital-sv-usa",
    storageBucket: "digital-sv-usa.appspot.com",
    messagingSenderId: "598224939142"
  }
};
