const { devs, ysyasinerver } = require("../../../config.json")
const getLocalCommands = require("../../utilities/getLocalCommands")
module.exports = async function (client, intarection) {
    const localCommands = getLocalCommands();


    try {
        const commandObj = await localCommands.find(
            cmd => cmd.name === intarection.commandName
        )
        if (!commandObj) return;

        if (commandObj?.devOnly && !devs.includes(intarection?.member?.id)) {
            intarection.reply({
                content: "you are not allowed to run this command"
            })
            return;
        }
        if (commandObj?.ysyasinerverOnly && !ysyasinerver !== intarection?.guild?.id) {
            intarection.reply({
                content: "you are not allowed to run this command"
            })
            return;
        }
        if (commandObj?.permissionRequired?.length) {
            for (const permission in commandObj.permissionRequired) {
                if (!intarection.member.permissions.has(permission)) {
                    intarection.reply({
                        content: "you are not allowed to run this command",
                        ephemeral: true
                    })
                    break;
                }
            }
        }

        if (commandObj.botPermissions?.length) {
            for (const permission in commandObj.botPermissions) {
                const bot = intarection.guild.members.me;
                if (!bot.permissions.has(permission)) {
                    intarection.reply({
                        content: "I have not allowed to run this command",
                        ephemeral: true
                    })
                    break;
                }
            }
        }
        await commandObj.callback(client, intarection)
    } catch (error) {
        console.log(error);
    }
}