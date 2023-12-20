module.exports = {
    name: "ping",
    description: "Replay Pong!",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: [{}]

    callback: (client, interacton) => {
        interacton.reply(`Pong!${client.ws.ping}ms`)
    }

}