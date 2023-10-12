const { Client, IntentsBitField, EmbedBuilder, Embed } = require("discord.js");
require("dotenv").config(); // needs ; or not?

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on("ready", (c) => {
    console.log("✅ Math bot is ready to do math");
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChannelSelectMenu) return;
    
    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get("first-number").value;
        const num2 = interaction.options.get("second-number").value;

        const output = num1 + num2;

        const embed = new EmbedBuilder()
            .setTitle('Your Calculation.')
            .setDescription(`\`${num1}\` + \`${num2}\` = \`${output}\``)
            .setColor('Random');

        interaction.reply({ embeds: [embed] });
    }

    if (interaction.commandName === 'subtract') {
        const num1 = interaction.options.get("first-number").value;
        const num2 = interaction.options.get("second-number").value;

        const output = num1 - num2;

        const embed = new EmbedBuilder()
            .setTitle('Your Calculation.')
            .setDescription(`\`${num1}\` - \`${num2}\` = \`${output}\``)
            .setColor('Random');

        interaction.reply({ embeds: [embed] });
    }

    if (interaction.commandName === 'multiply') {
        const num1 = interaction.options.get("first-number").value;
        const num2 = interaction.options.get("second-number").value;

        const output = num1 * num2;

        const embed = new EmbedBuilder()
            .setTitle('Your Calculation.')
            .setDescription(`\`${num1}\` * \`${num2}\` = \`${output}\``)
            .setColor('Random');

        interaction.reply({ embeds: [embed] });
    }

    if (interaction.commandName === 'divide') {
        const num1 = interaction.options.get("first-number").value;
        const num2 = interaction.options.get("second-number").value;

        const output = num1 / num2;

        const embed = new EmbedBuilder()
            .setTitle('Your Calculation.')
            .setDescription(`\`${num1}\` / \`${num2}\` = \`${output}\``)
            .setColor('Random');

        interaction.reply({ embeds: [embed] });
    }
})

client.login(process.env.TOKEN)