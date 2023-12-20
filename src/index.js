const { Client, GatewayIntentBits, EmbedBuilder, ActivityType } = require("discord.js");
const eventHandler = require("./handler/eventHandler");
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

/* -----------call function from imports---------- */
eventHandler(client)
/* -------- end calling internal imports ------- */


const activities = [
    {
        name: "FitGorila Streaming on YouTube'",
        type: ActivityType.Streaming,
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "FitGorila",
        type: ActivityType.Watching,
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "FitGorila",
        type: ActivityType.Playing,
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
]

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (message.content === "Hellow!") {
        message.reply(`Hi dear ${message.author.globalName}`)
    }

    if (message.content.toLowerCase() === "assalamualikum") {
        message.reply(`Walaikumussalam Mr. ${message.author.globalName}`)
    }
    const embed = new EmbedBuilder()

    if (message.content.toLowerCase() === "instagram") {
        embed
            .setURL("https://www.instagram.com")
            .setTitle("click to go our instagrame profile")
            .setAuthor({ name: 'company', iconURL: 'https://w7.pngwing.com/pngs/1019/957/png-transparent-gym-logo-fitness.png', url: 'https://discord.js.org' })
            .setThumbnail("https://image.similarpng.com/very-thumbnail/2020/04/Instagram-logo-modern-paint-splash-social-media-png.png")
            .setDescription("ki chu to hobei zokhon ami megher sathe rommantic kotha bolbo amake ador korbe na hoy chere zabe. kichuto ekta hobe")
            .setTimestamp()
            .setImage("https://www.kimp.io/wp-content/uploads/2021/06/Gym-Instagram-Post-Ideas.jpg")
            .setFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'review', value: 'Leave a reviw to public', inline: true },
                { name: "show your protentiality", value: "here we are to make your protentiality, and mae you a king", inline: true }
            )
            .setColor("Random")
            .setFooter({ text: 'Stay Active', iconURL: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gym-fitness-instagram-profile-photo-logo-design-template-2a98d80a907206d2d81fd03234203196_screen.jpg?ts=1599703940' })


        message.channel.send({
            embeds: [embed],
            ephemeral: true
        })
    }

    try {

        const { content } = message;

        if (content === '!Ping') {
            await message.reply('This is a response to your !interaction command!');
        }
    } catch (error) {
        console.error(error);
    }
})

client.on("interactionCreate", async (interaction) => {

    try {

        // if (!interaction.isChatInputCommand()) return;
        if (!interaction.isButton) {
            const embed = new EmbedBuilder()
            if (interaction.commandName === "instagram") {
                const comany = interaction.options.get("company").value;

                if (comany === "yes") {
                    embed
                        .setURL("https://www.instagram.com")
                        .setTitle("click to go our instagrame profile")
                        .setAuthor({ name: 'company', iconURL: 'https://w7.pngwing.com/pngs/1019/957/png-transparent-gym-logo-fitness.png', url: 'https://discord.js.org' })
                        .setThumbnail("https://image.similarpng.com/very-thumbnail/2020/04/Instagram-logo-modern-paint-splash-social-media-png.png")
                        .setDescription("ki chu to hobei zokhon ami megher sathe rommantic kotha bolbo amake ador korbe na hoy chere zabe. kichuto ekta hobe")
                        .setTimestamp()
                        .setImage("https://www.kimp.io/wp-content/uploads/2021/06/Gym-Instagram-Post-Ideas.jpg")
                        .setFields(
                            { name: '\u200B', value: '\u200B' },
                            { name: 'review', value: 'Leave a reviw to public', inline: true },
                            { name: "show your protentiality", value: "here we are to make your protentiality, and mae you a king", inline: true }
                        )
                        .setColor("Random")
                        .setFooter({ text: 'Stay Active', iconURL: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gym-fitness-instagram-profile-photo-logo-design-template-2a98d80a907206d2d81fd03234203196_screen.jpg?ts=1599703940' })


                    interaction.channel.send({
                        embeds: [embed],
                        ephemeral: true
                    })
                } else {
                    interaction.reply({
                        content: "Then why you clicked here ??",
                        ephemeral: true
                    })
                }
            }


            return;
        }


        // await interaction.deferReply({ ephemeral: true });
        // const role = interaction.guild.roles.cache.get(interaction.customId);
        // if (!role) {
        //     interaction.editReply({
        //         content: "Role does'nt exist",
        //         ephemeral: true
        //     })
        //     return;
        // }
        // const hasRole = interaction.member.roles.cache.has(role.id);

        // if (hasRole) {
        //     await interaction.member.roles.remove(role);
        //     interaction.editReply({
        //         content: `Role ${role} has been deleted`,
        //         ephemeral: true
        //     })
        //     reply;
        // } else {
        //     const memberRoles = interaction.member.roles;

        //     if (memberRoles && memberRoles.cache.size > 0) {
        //         await memberRoles.set([])
        //     }
        //     await interaction.member.roles.add(role);
        //     interaction.editReply({
        //         content: `The ${role} has been updated`,
        //         ephemeral: true
        //     })
        // }


    } catch (error) {

        console.log(error);
        interaction.editReply({
            content: "Something went wrong in server response please retray or complain in admin panel with screen short",
            ephemeral: true
        })
    }
}
)




client.login(process.env.DISCORD_KEY)