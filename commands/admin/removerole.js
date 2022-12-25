const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('removerole')
        .setDescription('take away a role from a user.')
        .addUserOption(option => option
            .setName('target')
            .setDescription('user to give role')
            .setRequired(true)
        )
        .addRoleOption(option => option
            .setName('role')
            .setDescription('take the role')
            .setRequired(true)
        ),
    async execute(interaction) {
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({ content: `you can not use this command`, ephemeral: true })
        const user = interaction.options.getMember('target')
        const role = interaction.options.getRole('role')

        const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`You have removed <@&${role.id}> from <@${user.id}>`)

        user.roles.remove(role)
        interaction.reply({ embeds: [embed] })
    }
}