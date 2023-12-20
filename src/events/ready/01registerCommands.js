const { ysyasinerver } = require("../../../config.json");
const areCommandDeffarent = require("../../utilities/areCommandDeffarent");
const getApplicationCommands = require("../../utilities/getApplicationCommands");
const getLocalCommands = require("../../utilities/getLocalCommands")

module.exports = async (client) => {
    try {
        const localCommands = getLocalCommands();
        const appCommands = await getApplicationCommands(client, ysyasinerver)

        for (let localCommand of localCommands) {
            const { name, description, options } = localCommand;

            const existingCommand = await appCommands.cache.find(
                (command) => command.name === name
            )

            if (existingCommand) {
                if (localCommand.deleted) {
                    await appCommands.delete(existingCommand.id);
                    console.log(`${name} was deleted`);
                    continue;
                }
                if (areCommandDeffarent(existingCommand, localCommand)) {
                    await appCommands.edit(
                        existingCommand.id, {
                        description,
                        options
                    }
                    )
                }
            }
            else {
                if (localCommand.deleted) {
                    console.log(`Skipping register command ${name} is a deleted command`);
                    continue;
                }
                await appCommands.create({
                    name,
                    description,
                    options
                })
                console.log(`${name}command was registerd successfully`);
            }
        }

    } catch (error) {
        console.log(error);
    }

}