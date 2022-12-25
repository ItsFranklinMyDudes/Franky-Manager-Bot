const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('verify user')
        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('verify channel')
                .setRequired(true)
        ),

    async execute(interaction) {
        if (!interaction.user.id.includes('692197998939209789')) return interaction.reply({ content: `You can not use this command`, ephemeral: true })

        const channel = interaction.options.getChannel('channel')

        const verify = new EmbedBuilder()
            .setColor('Green')
            .setTitle('Verify Here')
            .setDescription('Please click the button to gain access to the whole server')
            .setImage('https://media.discordapp.net/attachments/1002090813062389760/1050338290789797888/sOIo5AX.png')
        
        const verifyBTN = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId('verify')
                .setEmoji('✅')
                .setStyle(ButtonStyle.Success)
            )

        channel.send({ embeds: [verify], components: [verifyBTN] })
    }
}