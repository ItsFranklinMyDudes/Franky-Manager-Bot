const { EmbedBuilder, Events } = require("discord.js")
const config = require('../config.json')

module.exports = client => {
    client.on(Events.GuildMemberRemove, async member => {
        if(interaction.guild.id.includes('945617849848836097')) return
        const channelID = config.byeChannel
        const channel = client.channels.cache.get(channelID)

        const bye = new EmbedBuilder()
            .setTitle('Member Left')
            .setDescription(`Goodbye ${member}, We hope we see you again soon :(`)
            .setColor('Orange')
            .setTimestamp()

        channel.send({ embeds: [bye] })
    })
}