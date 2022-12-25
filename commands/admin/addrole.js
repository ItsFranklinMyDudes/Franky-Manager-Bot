const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addrole')
        .setDescription('Give a user a role.')
        .addUserOption(option => option
            .setName('target')
            .setDescription('user to give role')
            .setRequired(true)
        )
        .addRoleOption(option => option
            .setName('role')
            .setDescription('role to give')
            .setRequired(true)
        ),
    async execute(interaction) {
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({ content: `you can not use this command`, ephemeral: true })
        const user = interaction.options.getMember('target')
        const role = interaction.options.getRole('role')

        const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`You have given <@&${role.id}> to <@${user.id}>`)

        user.roles.add(role)
        interaction.reply({ embeds: [embed] })
    }
}