const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('kicks user')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The member to kicki')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('write your reason here')
                .setRequired(false)
        ),
    async execute(interaction) {
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return await interaction.reply({ content: 'You cant kick people', ephemeral: true})

        let reason = interaction.options.getString('reason')
        if(!reason) reason = 'No reason'
        let user = interaction.options.getUser('user')

        const embed = new EmbedBuilder()
        .setTitle(`${user.tag} was Kicked`)
        .setDescription(`reason: ${reason}`)

        await interaction.reply({ embeds: [embed] });

        const DMembed = new EmbedBuilder()
        .setTitle(`You have been Kicked from ${interaction.guild.name}`)
        .setDescription(`Reason: ${reason}`)

        await user.send({embeds: [DMembed]}).catch(error => console.log(error))
        interaction.guild.members.kick(user).catch(error => console.log(error))
    }
}