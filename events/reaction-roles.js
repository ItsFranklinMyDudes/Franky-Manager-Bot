const { Interaction, EmbedBuilder, ChannelType } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isButton()) {
            //games
            if (interaction.customId === `roblox`) {
                const roles = interaction.guild.roles.cache.get('946725804597985291')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `cod`) {
                const roles = interaction.guild.roles.cache.get('946727135500984341')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `forza`) {
                const roles = interaction.guild.roles.cache.get('946728197041553488')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `apex`) {
                const roles = interaction.guild.roles.cache.get('946726232068870194')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `rocketluage`) {
                const roles = interaction.guild.roles.cache.get('946727871815237652')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `fortnite`) {
                const roles = interaction.guild.roles.cache.get('946725951285391390')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `eagames`) {
                const roles = interaction.guild.roles.cache.get('946728927915823105')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `minecraft`) {
                const roles = interaction.guild.roles.cache.get('946412296366854185')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `gta`) {
                const roles = interaction.guild.roles.cache.get('946724473040670721')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `pubg`) {
                const roles = interaction.guild.roles.cache.get('946725101984972861')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `csgo`) {
                const roles = interaction.guild.roles.cache.get('946727572597784637')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            //genders
            if (interaction.customId === `female`) {
                const roles = interaction.guild.roles.cache.get('951425771791073280')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `male`) {
                const roles = interaction.guild.roles.cache.get('951425647518040134')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `transgender`) {
                const roles = interaction.guild.roles.cache.get('951428514962345985')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            //colors
            if (interaction.customId === `black`) {
                const roles = interaction.guild.roles.cache.get('951434169790107668')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `white`) {
                const roles = interaction.guild.roles.cache.get('951434229131128883')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `red`) {
                const roles = interaction.guild.roles.cache.get('951434234244005948')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `orange`) {
                const roles = interaction.guild.roles.cache.get('951434239054868490')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `yellow`) {
                const roles = interaction.guild.roles.cache.get('951434243551166465')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `blue`) {
                const roles = interaction.guild.roles.cache.get('951434248320077886')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `green`) {
                const roles = interaction.guild.roles.cache.get('951434252774441020')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `purple`) {
                const roles = interaction.guild.roles.cache.get('951434257291673620')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `brown`) {
                const roles = interaction.guild.roles.cache.get('951434262131925002')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            //pings
            if (interaction.customId === `uploades`) {
                const roles = interaction.guild.roles.cache.get('951426302391513119')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `giveaway`) {
                const roles = interaction.guild.roles.cache.get('946533776501125170')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `update`) {
                const roles = interaction.guild.roles.cache.get('995200434652315718')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `event`) {
                const roles = interaction.guild.roles.cache.get('946533789159550976')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
            if (interaction.customId === `announcement`) {
                const roles = interaction.guild.roles.cache.get('1049632987341402212')
                const removerole = new EmbedBuilder()
                    .setTitle('Role Removed')
                    .setDescription(`${roles} has been removed from you ${interaction.user}`)

                const addrole = new EmbedBuilder()
                    .setTitle('Role Added')
                    .setDescription(`${roles} has been added to you ${interaction.user}`)

                const hasrole = interaction.member.roles.cache.get(roles.id)
                if (hasrole) {
                    return interaction.member.roles.remove(roles).then(member => interaction.reply({ embeds: [removerole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error removing the role from u', ephemeral: true }))
                } else return interaction.member.roles.add(roles).then(member => interaction.reply({ embeds: [addrole], ephemeral: true })).catch(err => interaction.reply({ content: 'there was an error giving the role to u', ephemeral: true }))
            }
        }
    }
}