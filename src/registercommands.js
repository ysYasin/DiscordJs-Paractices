require("dotenv").config();
const { REST, ApplicationCommandOptionType, Routes, ApplicationCommandOptionBase } = require("discord.js");

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_KEY);

const commands = [
    {
        name: "ting",
        description: "Replies with Tong!",
        options: [
            {
                type: ApplicationCommandOptionType.String,
                name: "word",
                description: "The word to tongify",
                required: true,
                choices: [
                    {
                        name: "neme",
                        value: "Meghla",
                    },
                    {
                        name: "aim",
                        value: "6 pack"
                    }
                ]
            }
        ]
    }
];

async function start() {
    console.log('Running Started command');
    try {
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );
        console.log('Running end command');

    } catch (error) {
        console.log(error);
    }
}
start()