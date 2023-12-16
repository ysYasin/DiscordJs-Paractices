const { Client, IntentsBitField } = require("discord.js")
const dotenv = require("dotenv");
dotenv.config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on(Event.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user}!`)
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (message.content.toLowerCase().startsWith("hello")) {
        message.reply(`Hi ${message.author.globalName}! Good to see you!`);
    }
})

client.on("interactionCreate", slashCommand => {
    if (!slashCommand.isChatInputCommand()) {
        return;
    }

    if (slashCommand.commandName === "ting") {
        const name = slashCommand.options.get("word").value;
        if (name === "Meghla") {
            slashCommand.reply("Take my love")
        }
        else if (name === "6 pack") {
            slashCommand.reply("ow damn! you have six pack ?")
        }
        else {
            slashCommand.reply("I don't know that word")
        }

    }
})

client.login(process.env.DISCORD_KEY)