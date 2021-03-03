const { Client, MessageEmbed } = require("discord.js");
let START_COMMAND = "Vous…. vous avez un nez… heu… un nez… très grand. 👃";
START_COMMAND = "run";

class DiscordBot {
  constructor(token, win) {
    console.log("Bot start");

    this.win = win;

    this.client = new Client();
    // ici on créé un écouteur d'événement, le bot discord nous envoie ready quand il est allumé, on peut exécuter notre fonction.
    this.client.on("ready", this.onReady.bind(this));
    this.client.on("message", this.onMessage.bind(this));
    // ici on connecte le client au bot grâce au token.
    this.client.login(token);
  }

  onReady() {
    console.log("BOT READY");
  }

  onMessage(message) {
    const receivedEmbed = message.embeds[0];
    // console.log(message.content);
    //cette ligne nous fait communiquer avec la page HTML
    // console.log(message.embeds);
    if (receivedEmbed) {
      this.win.webContents.send("embedDiscord", receivedEmbed);
    }
    // this.win.webContents.send("messageDiscord");

    if (message.content.includes(START_COMMAND)) {
      const answer = new MessageEmbed();
      answer.setTitle("Réponse de Cyrano");
      answer.setColor("OxffOOOO");
      answer.setDescription("Ah ! non ! c’est un peu court, jeune homme ! ‍");
      setTimeout(() => {
        message.channel.send(answer);
      }, 2000);
    }
    if (receivedEmbed && receivedEmbed.description.includes("homme")) {
      const answer2 = new MessageEmbed();
      answer2.setTitle("Cyrano");
      answer2.setColor("Oxff0000");
      answer2.setDescription(
        "On pouvait dire… Oh ! Dieu ! … bien des choses en somme…"
      );
      setTimeout(() => {
        message.channel.send(answer2);
      }, 2000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("somme")) {
      const answer3 = new MessageEmbed();
      answer3.setTitle("Cyrano");
      answer3.setColor("Oxff0000");
      answer3.setDescription("En variant le ton, – par exemple, tenez :");
      setTimeout(() => {
        message.channel.send(answer3);
      }, 2000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("tenez")) {
      const answer4 = new MessageEmbed();
      answer4.setTitle("Cyrano");
      answer4.setColor("Oxff0000");
      answer4.setDescription(
        "Agressif : « Moi, monsieur, si j’avais un tel nez, "
      );
      setTimeout(() => {
        message.channel.send(answer4);
      }, 2000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("tel")) {
      const answer5 = new MessageEmbed();
      answer5.setTitle("Cyrano");
      answer5.setColor("Oxff0000");
      answer5.setDescription(
        "Il faudrait sur-le-champ que je me l’amputasse ! » "
      );
      // answer5.attachFiles("./rouge.png");
      // answer5.setImage("attachment://rouge.png");
      // answer5.setImage(
      //   "https://media.giphy.com/media/3ohs85Vc4Knk13AxFu/giphy.gif"
      // );
      setTimeout(() => {
        message.channel.send(answer5);
      }, 3000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("amputasse")) {
      const answer6 = new MessageEmbed();
      answer6.setTitle("Cyrano");
      answer6.setColor("Oxff0000");
      answer6.attachFiles("./rouge.png");
      answer6.setImage("attachment://rouge.png");
      answer6.setDescription("*");
      // answer5.setImage(
      //   "https://media.giphy.com/media/3ohs85Vc4Knk13AxFu/giphy.gif"
      // );
      setTimeout(() => {
        message.channel.send(answer6);
      }, 3000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("*")) {
      const answer7 = new MessageEmbed();
      answer7.setTitle("Cyrano");
      answer7.setColor("Oxff0000");
      answer7.setDescription(
        "Amical : « Mais il doit tremper dans votre tasse  » "
      );
      // answer6.setImage("https://media.giphy.com/media/Z6vszQ8Mweukw/giphy.gif");
      setTimeout(() => {
        message.channel.send(answer7);
      }, 3000);
    }

    // if (receivedEmbed && receivedEmbed.description.includes("tremper")) {
    //   const answer7 = new MessageEmbed();
    //   answer7.setTitle("Cyrano");
    //   answer7.setColor("Oxff0000");
    //   answer7.setDescription(" ☕ ");
    //   answer7.setImage("https://media.giphy.com/media/Z6vszQ8Mweukw/giphy.gif");
    //   setTimeout(() => {
    //     message.channel.send(answer7);
    //   }, 3000);
    // }

    if (receivedEmbed && receivedEmbed.description.includes("tremper")) {
      const answer8 = new MessageEmbed();
      answer8.setTitle("Cyrano");
      answer8.setColor("Oxff0000");
      answer8.setDescription("Pour boire, faites-vous fabriquer ...  ");
      setTimeout(() => {
        message.channel.send(answer8);
      }, 2000);
    }

    // if (receivedEmbed && receivedEmbed.description.includes("fabriquer")) {
    //   const answer9 = new MessageEmbed();
    //   answer9.setTitle("Cyrano");
    //   answer9.setColor("Oxff0000");
    //   answer9.setDescription("... hmm");
    //   setTimeout(() => {
    //     message.channel.send(answer9);
    //   }, 2000);
    // }

    if (receivedEmbed && receivedEmbed.description.includes("fabriquer")) {
      const answer9 = new MessageEmbed();
      answer9.setTitle("Cyrano");
      answer9.setColor("Oxff0000");
      answer9.attachFiles("./ami-04.png");
      answer9.setImage("attachment://ami-04.png");
      answer9.setDescription("un hanap ! »");
      setTimeout(() => {
        message.channel.send(answer9);
      }, 2000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("hanap")) {
      const answer10 = new MessageEmbed();
      answer10.setTitle("Cyrano");
      answer10.setColor("Oxff0000");
      answer10.attachFiles("./montagne-05.png");
      answer10.setImage("attachment://montagne-05.png");
      answer10.setDescription(
        "Descriptif : « C’est un roc ! … c’est un pic ! … c’est un cap !"
      );
      // answer11.setImage("https://media.giphy.com/media/zCGMGsBhQyO7S/giphy.gif");
      setTimeout(() => {
        message.channel.send(answer10);
      }, 3000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("pic")) {
      const answer11 = new MessageEmbed();
      answer11.setTitle("Cyrano");
      answer11.setColor("Oxff0000");
      answer11.setDescription(
        "Que dis-je, c’est un cap ? … C’est une péninsule !"
      );
      // answer12.setImage(
      //   "https://media.giphy.com/media/zCGMGsBhQyO7S/giphy.gif"
      // );
      setTimeout(() => {
        message.channel.send(answer11);
      }, 3000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("péninsule")) {
      const answer12 = new MessageEmbed();
      answer12.setTitle("Cyrano");
      answer12.setColor("Oxff0000");
      answer12.setDescription(
        "Curieux : « De quoi sert cette oblongue capsule ?"
      );
      // answer10.setImage("https://media.giphy.com/media/zCGMGsBhQyO7S/giphy.gif");
      setTimeout(() => {
        message.channel.send(answer12);
      }, 3000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("capsule")) {
      const answer13 = new MessageEmbed();
      answer13.setTitle("Cyrano");
      answer13.setColor("Oxff0000");
      answer13.attachFiles("./curieux.png");
      answer13.setImage("attachment://curieux.png");
      answer13.setDescription("D’écritoire, monsieur,");
      setTimeout(() => {
        message.channel.send(answer13);
      }, 3000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("écritoire")) {
      const answer14 = new MessageEmbed();
      answer14.setTitle("Cyrano");
      answer14.setColor("Oxff0000");
      answer14.setDescription("ou de boîte à ciseaux ? » ");
      // answer15.setImage(
      //   "https://media.giphy.com/media/XeeUDlRgrsSA8kUsvI/giphy.gif"
      // );
      setTimeout(() => {
        message.channel.send(answer14);
      }, 4000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("ciseaux")) {
      const answer15 = new MessageEmbed();
      answer15.setTitle("Cyrano");
      answer15.setColor("Oxff0000");
      answer15.setDescription("Gracieux : « Aimez-vous à ce point les oiseaux");
      setTimeout(() => {
        message.channel.send(answer15);
      }, 3000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("oiseaux")) {
      const answer16 = new MessageEmbed();
      answer16.setTitle("Cyrano");
      answer16.setColor("Oxff0000");
      answer16.setDescription("Que paternellement vous vous préoccupâtes ...");
      setTimeout(() => {
        message.channel.send(answer16);
      }, 3000);
    }

    if (receivedEmbed && receivedEmbed.description.includes("préoccupâtes")) {
      const answer17 = new MessageEmbed();
      answer17.setTitle("Cyrano");
      answer17.setColor("Oxff0000");
      answer17.attachFiles("./oiseaux.png");
      answer17.setImage("attachment://oiseaux.png");
      answer17.setDescription(
        "De tendre ce perchoir à leurs petites pattes ? »"
      );
      // answer18.setImage(
      //   "https://media.giphy.com/media/E8EXK7Du5saNa/giphy.gif"
      // );
      setTimeout(() => {
        message.channel.send(answer17);
      }, 4000);
    }
    // console.log("LIKE RECEIVED");
  }
}

// on exporte la classe en tant que module (qu'on a fabriqué) pour pouvoir l'intégrer ailleurs, utilisable par Node.
module.exports = { DiscordBot };
