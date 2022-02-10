

  ![Turki](https://c.tenor.com/SydWUUX-ofQAAAAd/ishowspeed.gif)
# Welcome 
>**Welcome to my project That is Made By Me**
#
# Description

**This project was done to develop myself in node.js and you can now get it 😊**
>This project is about how to get random avatars when someone enters the site and gives them random avatars 👍
#
# Codes ideas 💡
# Discord.js

   ```js
   const {Client} = require('discord.js')
const  client = new  Client({intents:["GUILD_INTEGRATIONS","GUILD_INVITES","GUILDS","GUILD_MESSAGES","GUILD_MEMBERS"]})

client.on('messageCreate', (message) => {
if(message.content.toLowerCase().startsWith('randomavatar')) { // Random Avatar Command
let urls = ["https://localhost:3000/photo","https://localhost:3000/gif"]
let randomurl = urls[Math.floor(Math.random() * urls.length)]
message.reply({files:[{name:"avatar",attachment:randomurl}]});
}
})

client.login("token")
```
#
# Python
```py
print("Comming Soon")
```

#

# Attention ⚠
**The images in the files do not represent me or affiliation with this awareness. They are made for testing purpose only, and I do not endorse the use of these images. Thank you**
![StaySafe](https://i.giphy.com/media/QZtKnYQOHU2VMwmjqS/giphy.webp)

# Run It 🌟
[![Run on Repl.it](https://user-images.githubusercontent.com/27065646/92304596-bf719b00-ef7f-11ea-987f-2c1f3c323088.png)](https://repl.it/github/discordavatarwebsite/9de)
