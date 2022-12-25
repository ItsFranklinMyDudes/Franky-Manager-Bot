const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Manage polls of your server')
        .addStringOption(option =>
            option
                .setName('question')
                .setDescription('The question of the poll')
                .setRequired(true)
        )
        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('The channel where you want create the poll')
                .setRequired(true)
        ),
    async execute(interaction) {
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageEvents)) return await interaction.reply({ content: 'You cant use this command', ephemeral: true})
        const question = interaction.options.getString('question')
        const channel = interaction.options.getChannel('channel')

        const poll = new EmbedBuilder()
            .setTitle('New Poll')
            .setDescription(question)
            .setTimestamp()
            .setColor('#2f3136')

        interaction.reply({ content: `poll has been sent`, ephemeral: true})
        const msg = await channel.send({ content: `<@&946533789159550976>`, embeds: [poll] })
        await msg.react('👍')
        await msg.react('👎')
    }
}