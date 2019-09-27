# Twitch Bot boilerplate

"Ready to go" boilerplate with Jest, TMI.js, Nodemon, Config, Babel.

## Install

1. Clone repository

2. Install modules `npm i` or `yarn install`

3. Copy example config

   ```bash
   cp config/default.example.json5 config/default.json5
   ```

4. Setup bot

`oauth_token` you can get [here by login via bot](https://twitchapps.com/tmi/)

```
bot: {
    username: "your-bots-username-here",
    oauth_token: "oauthtokenhere"
},
channel: "your-channel-here"
```

5. Run bot `npm start`

## Utils

**Check if user moderator**

```js
import { isModerator } from "./utils";

// You can get info about user from incoming message
const user = messageInfo.user;

if (isModerator(user)) {
  console.log(`${user.username} is moderate this channel`);
}
```

**Send message to user**

```js
import { messageToUser } from "./utils";

// You can get info about user from incoming message
const user = messageInfo.user;

const message = ", thanks for follow dude";

messageToUser(user.username, message);

// In chat:
// your_bot: @devkucher, thanks for follow dude
```

## Contributing

If you have any comments or ideas - goto new issue.

## Get in touch

- Twitch [@devkucher](https://twitch.tv/devkucher)
- Me on Medium [@KucherDev](https://medium.com/@KucherDev)
- Follow [@KucherDev on Twitter](https://twitter.com/KucherDev)
- Have a questions? [My telegram](https://t.me/qWici)

## Have a fun :blush:
