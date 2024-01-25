import { Client } from "discord.js";

export const onMessageCreate = (client: Client) => {
    client.on('messageCreate', async (message) => {
        if (message.author.bot) {
            return;
        }
        
        console.log("before ping")
        const content = message.content;
        console.log(content);
        if (content === "ping") {
            console.log("ping from on message create")
            await message.reply(`${message.member?.displayName}: pong`)
        }
    })
}