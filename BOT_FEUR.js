const {Client, GatewayIntentBits} = require('discord.js'); 
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
// On précise les différents permission que le bot aura droit

client.once('ready', () => {
    console.log(`GOOD !`);
});
//Affiche un message sur la console pour dire si le bot est prêt

client.on('messageCreate', (message) => {
    if (message.content.trim().toLowerCase().endsWith('quoi')) {
        message.channel.send('feur');
    }
});
// Le bot déclenche l'événement a chaque fois qu'un message est envoyé sur le serveur
// Si le message se termine par "quoi" en prenant en compte qu'il est insensible aux espace et aux majuscule,
// le bot répond avec un "feur" dans le même salon textuelle

client.login('token');
//Récupère le token de l'API de discord