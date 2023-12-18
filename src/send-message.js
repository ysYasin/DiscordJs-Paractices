const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
require("dotenv").config()

const client = new Client(
    {
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMessages
        ]
    }
)

const roles = [
    {
        id: "1185517090447298700",
        label: "Green",
    },
    {
        id: "1185517629729939476",
        label: "Blue",
    },
    {
        id: "1185517998316986428",
        label: "Red",
    },
]

client.on("ready", async () => {
    try {
        const channel = await client.channels.cache.get("1131647747464888392");
        if (!channel) return;

        const row = new ActionRowBuilder();
        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder()
                    .setCustomId(role.id)
                    .setLabel(role.label
                    ).setStyle(ButtonStyle.Danger)
            )
        })

        channel.send(
            {
                content: " ki asche dekhi",
                components: [row]
            }
        )

    } catch (error) {
        console.log(`Error: ${error}`);
    }
});

client.login(process.env.DISCORD_KEY)
