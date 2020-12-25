# pnw.js
A powerful Node.js library for easy interaction with the Politics and War API

To start using this library, simple do
```bash
npm install pnw.js
```

This library is Promise-based.

There is an api client, as well as a user client. Use the user client at your own risk as it may be against the game rules at any given moment.

Example usage of the API client: 
```js
const pnw = require('pnw.js');
const client = new pnw.APIClient('apikey');
client.keyInfo().then(info => {
   console.log(info.nation_id);
});
```

Example usage of the user client: 
```js
const pnw = require('pnw.js');
const userclient = new pnw.UserClient('email', 'password');
userclient.login().then(s => {
   userclient.commend(somenationid).then(res => {
      console.log(res);
   })
}).catch(err => console.log(err));
```

This is still under development, check back in a few days!