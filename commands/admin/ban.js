const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require("discord.js");
const reactionRole = require("./reaction-role");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('bans user')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The member to ban')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('write your reason here')
                .setRequired(false)
        ),
    async execute(interaction) {
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return await interaction.reply({ content: 'You cant ban people', ephemeral: true})

        let reason = interaction.options.getString('reason')
        if(!reason) reason = 'No reason'
        let user = interaction.options.getUser('user')

        const embed = new EmbedBuilder()
        .setTitle(`${user.tag} was banned`)
        .setDescription(`reason: ${reason}`)

        await interaction.reply({ embeds: [embed] });

        const DMembed = new EmbedBuilder()
        .setTitle(`You have been banned from ${interaction.guild.name}`)
        .setDescription(`Reason: ${reason}`)

        await user.send({embeds: [DMembed]}).catch(error => console.log(error))
        interaction.guild.members.ban(user, { reason: [reason] })
    }
}