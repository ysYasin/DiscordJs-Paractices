/* -------------------------------------------------------------------------- */
/*             getting all command files from local -- biolarplate            */
/* -------------------------------------------------------------------------- */
const path = require("path");
const getAllFiles = require("./getAllFiles");
module.exports = function (exseptions = []) {
    const localCommands = []

    const commandFolders = getAllFiles(path.join(__dirname, '../commands'), true)
    for (const commandFolder of commandFolders) {
        const commandFiles = getAllFiles(commandFolder)

        for (const commandFile of commandFiles) {

            const commandObj = require(commandFile)

            if (exseptions.includes(commandObj.name)) {
                continue;
            }

            localCommands.push(commandObj)
        }
    }
    return localCommands
}