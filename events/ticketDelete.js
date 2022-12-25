const { Interaction } = require('discord.js')

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isButton()) {
            if (interaction.customId === 'claim') {
                const channel = await client.channels.cache.find(ch => ch.name.endsWith('-ticket'))
                interaction.reply({ content: `Your ticket will be deleted in 5 seconds`, ephemeral: true })

                setTimeout(function () {
                    channel.delete()
                }, 5000)
            }
        }
    }
}