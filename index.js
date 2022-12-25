const { Client, Collection, ActivityType } = require(`discord.js`);
const client = new Client({ intents: 3276799 });

client.commands = new Collection();

const fs = require('fs');
const config = require('./config.json');

const guildMemberAdd = require('./events/guildMemberAdd.js')
const guildMemberRemove = require('./events/guildMemberRemove.js')
const messageDelete = require('./events/messageDelete.js')

const functions = fs.readdirSync("./functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./events");
    client.handleCommands(commandFolders, "./commands");
    client.login(config.token)
})();

client.on('ready', async () => {
    guildMemberAdd(client)
    guildMemberRemove(client)
    messageDelete(client)

    const activities = [
        'you',
        'Franklin\'s Brain',
        "/help"
    ]
    setInterval(() => {
        const status = activities[Math.floor(Math.random() * activities.length)]
        client.user.setPresence({ activities: [{ name: status, type: ActivityType.Watching }] });
    }, 2000)

    function statusCount() { 
        let guild = client.guilds.cache.get(config.guildId)

        client.channels.cache.get('996302556361924668').setName(`🟢 ${guild.members.cache.filter(m => m.presence?.status == 'online').size} ⛔ ${guild.members.cache.filter(m => m.presence?.status == 'dnd').size} 🌙 ${guild.members.cache.filter(m => m.presence?.status == 'idle').size} ⚫ ${guild.members.cache.filter(m => m.presence?.status == 'offline' || !m.presence).size}`)
        client.channels.cache.get('996302425742905496').setName(`👥 Total users - ${guild.memberCount}`)
        client.channels.cache.get('996302517304557618').setName(`👤 Members - ${guild.members.cache.filter(member => !member.user.bot).size}`)
        client.channels.cache.get('996302537298804867').setName(`🤖 Bots - ${guild.members.cache.filter(member => member.user.bot).size}`)
    } statusCount()

    setInterval(() => {
        statusCount()
    }, 600000)
})
