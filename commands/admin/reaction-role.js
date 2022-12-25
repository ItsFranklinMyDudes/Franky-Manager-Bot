const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reaction-role')
        .setDescription('list of different reactoin roles')
        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('Channel')
                .setRequired(true)
        ),
    async execute(interaction) {
        if (!interaction.user.id.includes(config.owernId)) return interaction.reply({ content: `You can not use this command`, ephemeral: true })
        const channel = interaction.options.getChannel('channel')

        const gamelist = new EmbedBuilder()
            .setTitle('You got games?')
            .setColor('#2f3136')
            .setDescription(`
                <:Roblox:1049918913930076211> <@&946725804597985291>
                <:COD:1049918908733345853> <@&946727135500984341>
                <:forza:1049918901527531521> <@&946728197041553488>
                <:Apex:1049918910327169045> <@&946726232068870194>
                <:Rocketlague:1049918912604684308> <@&946727871815237652>
                <:Fortnite:1049918903691792384> <@&946725951285391390>
                <:EAGames:1049918905205936190> <@&946728927915823105>
                <:Minecraft:994086309851299890> <@&946412296366854185>
                <:GTA5:994037885974102046> <@&946724473040670721>
                <:Pubg:1049918915981086771> <@&946725101984972861>
                <:CSGO:1049918906992705546> <@&946727572597784637>
        `)

        const genderlist = new EmbedBuilder()
            .setTitle('You Have Gender What Is It?')
            .setColor('#2f3136')
            .setDescription(`
                ♀️ <@&951425771791073280>
                ♂️ <@&951425647518040134>
                :transgender_symbol: <@&951428514962345985>
        `)

        const colorlist = new EmbedBuilder()
            .setTitle('Colors Are Good, Have Some Colors')
            .setColor('#2f3136')
            .setDescription(`
                ⚫ <@&951434169790107668>
                ⚪ <@&951434229131128883>
                🔴 <@&951434234244005948>
                🟠 <@&951434239054868490>
                🟡 <@&951434243551166465>
                🔵 <@&951434248320077886>
                🟢 <@&951434252774441020>
                🟣 <@&951434257291673620>
                🟤 <@&951434262131925002>
            `)

        const pinglist = new EmbedBuilder()
            .setTitle('Would you like to get pinged?')
            .setColor('#2f3136')
            .setDescription(`
                🔔 <@&951426302391513119>
                🎉 <@&946533776501125170>
                🥳 <@&995200434652315718>
                ✨ <@&946533789159550976>
                📣 <@&1049632987341402212>
            `)


        const gamebtn1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('roblox')
                    .setEmoji('<:Roblox:1049918913930076211>')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('cod')
                    .setEmoji('<:COD:1049918908733345853>')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('forza')
                    .setEmoji('<:forza:1049918901527531521>')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('apex')
                    .setEmoji('<:Apex:1049918910327169045>')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('rocketluage')
                    .setEmoji('<:Rocketlague:1049918912604684308>')
                    .setStyle(ButtonStyle.Success)
            )
        const gamebtn2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('fortnite')
                    .setEmoji('<:Fortnite:1049918903691792384>')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('eagames')
                    .setEmoji('<:EAGames:1049918905205936190>')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('minecraft')
                    .setEmoji('<:Minecraft:994086309851299890> ')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('gta')
                    .setEmoji('<:GTA5:994037885974102046>')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('pubg')
                    .setEmoji('<:Pubg:1049918915981086771>')
                    .setStyle(ButtonStyle.Success)
            )
        const gamebtn3 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('csgo')
                    .setEmoji('<:CSGO:1049918906992705546>')
                    .setStyle(ButtonStyle.Success),
            )

        const genderbtn = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('female')
                    .setEmoji('♀️')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('male')
                    .setEmoji('♂️')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('transgender')
                    .setEmoji('⚧')
                    .setStyle(ButtonStyle.Success)
            )

        const colorbtn1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('black')
                    .setEmoji('⚫')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('white')
                    .setEmoji('⚪')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('red')
                    .setEmoji('🔴')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('orange')
                    .setEmoji('🟠')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('yellow')
                    .setEmoji('🟡')
                    .setStyle(ButtonStyle.Success),
            )
        const colorbtn2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('blue')
                    .setEmoji('🔵')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('green')
                    .setEmoji('🟢')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('purple')
                    .setEmoji('🟣')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('brown')
                    .setEmoji('🟤')
                    .setStyle(ButtonStyle.Success),
            )

        const pingbtn = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId('uploads')
                .setEmoji('🔔')
                .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                .setCustomId('giveaway')
                .setEmoji('🎉')
                .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                .setCustomId('update')
                .setEmoji('🥳')
                .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                .setCustomId('event')
                .setEmoji('✨')
                .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                .setCustomId('announcement')
                .setEmoji('📣')
                .setStyle(ButtonStyle.Success)
            )

        await channel.send({ embeds: [gamelist], components: [gamebtn1, gamebtn2, gamebtn3] })
        await channel.send({ embeds: [genderlist], components: [genderbtn] })
        await channel.send({ embeds: [colorlist], components: [colorbtn1, colorbtn2] })
        await channel.send({ embeds: [pinglist], components: [pingbtn] })
    }
}