const path = require('path');
const getAllFiles = require('../utilities/getAllFiles');

module.exports = function (client) {

    const eventFolders = getAllFiles(path.join(__dirname, '../events'), true)

    for (const eventfolder of eventFolders) {
        const eventFiles = getAllFiles(eventfolder);

        const eventName = eventfolder.replace(/\\/g, '/').split('/').pop();

        client.on(eventName, async (arg) => {
            for (let eventFile of eventFiles) {
                const eventFunction = require(eventFile);
                await eventFunction(client, arg);
            }
        })

    }
}