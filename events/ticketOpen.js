const { Interaction, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle , PermissionFlagsBits, ChannelType} = require('discord.js')
const config = require('../config.json')

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isButton()) {
            if (interaction.customId === 'open') {
                const channel = await interaction.guild.channels.create({
                    name: `${interaction.user.username}'s ticket`,
                    type: ChannelType.guild,
                    parent: config.ticketParent,
                    topic: `${interaction.user.id}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.roles.everyone,
                            deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                        },
                        {
                            id: interaction.user,
                            allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                        },
                    ],
                })
                const ticket = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('claim')
                            .setLabel('close')
                            .setEmoji('✅')
                            .setStyle(ButtonStyle.Success)
                    );

                const ticketEM = new EmbedBuilder()
                    .setTitle('Ticket Option')
                    .setDescription('Close the tick by clicking ✅')
                    .setFooter({ text: `${interaction.user.username}` })
                    .setTimestamp()

                await interaction.reply({ content: `You have created a ticket <#${channel.id}>`, ephemeral: true })

                await channel.send({ content: `<@${interaction.user.id}>`, embeds: [ticketEM], components: [ticket] }).then((msg) => msg.pin())
            }
        }
    }
}