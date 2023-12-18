const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");
require("dotenv").config()
console.log(process.env.DISCORD_KEY);

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_KEY);

command = [
    {
        name: "instagram",
        description: "makes instagram",
        options: [
            {
                name: "company",
                description: "makes instagram",
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: "yes",
                        value: "yes"
                    },
                    {
                        name: "no",
                        value: "no"
                    }
                ]
            },
            {
                name: "trainner",
                description: "makes instagram",
                type: ApplicationCommandOptionType.String
            }
        ]
    }
]

console.log(process.env.CLIENT_ID);
console.log(process.env.GUILD_ID);

const slashStart = async () => {
    console.log("starting");
    try {
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: command }
        )

        console.log("Ending application");
    }
    catch (error) {
        console.log(error);
    }
};

slashStart();