const { Interaction, EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isButton()) {
            if (interaction.customId === 'verify') {
                const role = interaction.guild.roles.cache.get('945623510250831893')
                const role1 = interaction.guild.roles.cache.get('946385204350701630')
                const role2 = interaction.guild.roles.cache.get('946406711927930900')
                const role3 = interaction.guild.roles.cache.get('946405884299456603')
                interaction.member.roles.add(role)
                interaction.member.roles.add(role1)
                interaction.member.roles.add(role2)
                interaction.member.roles.add(role3)
                
                const DMembed = new EmbedBuilder()
                    .setTitle(`Verified`)
                    .setDescription(`You have now been verified, enjoy the server :)`)
                    .setFooter({ text: `Welcome` })
                    .setTimestamp()
                    .setColor('Green')
                interaction.reply({ embeds: [DMembed], ephemeral: true })
            }
        }
    }
}