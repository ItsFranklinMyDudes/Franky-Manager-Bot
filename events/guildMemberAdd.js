const { EmbedBuilder, Events } = require("discord.js")
const { welcomeImage } = require('ultrax')
const config = require('../config.json')

module.exports = (client) => {
    client.on(Events.GuildMemberAdd, async (member) => {
        if(interaction.guild.id.includes('945617849848836097')) return
        const channelID = config.welChannel
        const channel = client.channels.cache.get(channelID)
        /*
        const bg = 'https://imgur.com/okIR1iY.png';
        const avatar = member.user.displayAvatarURL({ format: "png" });
        const title = "Welcome";
        const subtitle = member.user.tag;
        const footer = `You're the ${member.guild.memberCount}th member`;
        const color = '#ffffff';
        const options = {
            font: "sans-serif",
            attachmentName: `welcome-${member.username}`,
            title_fontSize: 80,
            subtitle_fontSize: 50,
            footer_fontSize: 30
        };

        const image = await welcomeImage(bg, avatar, title, subtitle, footer, color, options);
        */
        const welcome = new EmbedBuilder()
            .setTitle('New Member Joined')
            .setDescription(`
                Welcome ${member} to Franklin's Brain, We hope you enjoy is here :)
                Go get some Roles to spice it up a little
            `)
            .setColor('Orange')
            .setTimestamp()
        //.setImage(image)
        channel.send({ embeds: [welcome] })
    })
}