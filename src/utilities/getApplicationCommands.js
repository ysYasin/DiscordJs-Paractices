/* -------------------------------------------------------------------------- */
/*          getting all command files from application -- biolarplate         */
/* -------------------------------------------------------------------------- */
module.exports = async function (client, guildId) {
    let applicationGuilds;
    if (guildId) {
        const guild = await client.guilds.fetch(guildId);
        applicationGuilds = guild.commands;
    } else {
        const localCommands = await client.application.commands;
        applicationGuilds = localCommands;
    }
    applicationGuilds.fetch();
    return applicationGuilds;
}