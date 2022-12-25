const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField } = require("discord.js");
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('full button ticket system')
        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('sends the ticket panel to ur channel')
                .setRequired(true)
        ),

    async execute(interaction) {
        const channel = interaction.options.getChannel('channel')
        if (!interaction.user.id.includes(config.owernId)) return interaction.reply({ content: `You can not use this command`, ephemeral: true })

        //main button
        const openEB = new EmbedBuilder()
            .setTitle('Open a ticket')
            .setDescription('Click the button to open a ticket')

        const openBTN = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('open')
                    .setLabel('Open Ticket')
                    .setEmoji('🎫')
                    .setStyle(ButtonStyle.Primary)
            )
        interaction.reply({ content: 'Ticket panel sent successful', ephemeral: true })
        channel.send({ embeds: [openEB], components: [openBTN] })
    }
}