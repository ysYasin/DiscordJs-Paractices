const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js")

module.exports = {
    name: "ban",
    description: "Ban an guild member!",
    devOnly: true,
    ysyasinerverOnly: true,
    options: [
        {
            name: "member",
            description: "The member for ban!!!",
            type: ApplicationCommandOptionType.Mentionable,
            required: true
        },
        {
            name: "reason",
            description: "The reason for the ban!",
            type: ApplicationCommandOptionType.String
        }
    ],

    permissionRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],

    callback: (client, interacton) => {
        interacton.reply(`Ba..............n`)
    }

}