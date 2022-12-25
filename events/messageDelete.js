const { AuditLogEvent, Events, EmbedBuilder } = require("discord.js");
const config = require('../config.json')

module.exports = client => {
    client.on(Events.MessageDelete, async message => {
        if (!message.guild) return;
        const fetchedLogs = await message.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MessageDelete,
        });
        const deletionLog = fetchedLogs.entries.first();
        const { executor, target } = deletionLog;
        const channelId = config.modLog
        const channel = client.channels.cache.get(channelId)

        const embed = new EmbedBuilder()
            .setTitle('Message Deleted')
            .setColor('NotQuiteBlack')
            .setDescription(`Message by ${message.author.tag} was delete by ${executor.tag}`)

        const embed2 = new EmbedBuilder()
        .setTitle('Message Deleted')
        .setColor('NotQuiteBlack')
        .setDescription(`Message by ${message.author.tag} was delete, but we don't know by who, we think it was ${message.author.tag}`)

        const embed3 = new EmbedBuilder()
        .setTitle('Message Deleted')
        .setColor('NotQuiteBlack')
        .setDescription(`Message by ${message.author.tag} was delete, but no relevant audit logs were found`)
    
        if (!deletionLog) return channel.send({embeds: [embed3]});
    
        if (target.id === message.author.id) {
            channel.send({embeds: [embed]});
        } else {
            channel.send({embeds: [embed2]});
        }
    })
}