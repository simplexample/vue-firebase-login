# Vue Firebase Login

> A Vue/Firebase app

## Getting started

#### install dependencies
``` bash
npm install
```

#### Setup Firebase
- setup your own firebase app via the [console](https://console.firebase.google.com)
- click "Add Firebase to your web app"
- create a `secrets.js` file in the root of the project
- copy/paste below into `secrets.js` and replace <br/> `xxx` with what you have from firebase
  ``` bash
  const FIREBASE_CONFIG = {
    apiKey: 'xxx',
    authDomain: 'xxx',
    databaseURL: 'xxx',
    projectId: 'xxx',
    storageBucket: 'xxx',
    messagingSenderId: 'xxx'
  }

  export {
    FIREBASE_CONFIG
  }

  ```

#### Dev & Build scripts
``` bash
# run project @ localhost:8080
# (also exposes YOUR_IP:8080 on your network)
npm run dev

# build for production with minification
npm run build
```
