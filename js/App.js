const { randomBytes } = require("crypto");
const { ipcRenderer } = require("electron");

function random(min, max) {
  return min + Math.random() * (max - min);
}

class App {
  constructor() {
    console.log("LOG depuis la page HTML");
    this.initListeners();
  }

  initListeners() {
    //   document.addEventListener("messageDiscord", this.onMessage.bind(this));
    ipcRenderer.on("messageDiscord", this.onMessage.bind(this));
    ipcRenderer.on("embedDiscord", this.onEmbed.bind(this));
  }

  onEmbed(event, embed) {
    document.body.innerHTML = "";
    if (embed.image) {
      console.log(embed.image.proxyURL);

      // ici on gère les aspects dynamiques (en JS)
      const img = new Image();
      img.classList.add("embed-image");
      img.src = embed.image.proxyURL;
      img.style.maxWidth = "50" + "%";
      img.style.height = "auto";
      //   img.style.top = random(0, 50) + "%";
      //   img.style.left = random(0, 200) + "%";

      //   img.style.cssText = `
      //     top: ${random(0, 100)}%;
      //     left: ${random(0, 100)}%;
      //   `;
      document.body.appendChild(img);
    }

    // ici, on affiche tout texte / description
    if (embed.description) {
      const par = document.createElement("p");
      par.textContent = embed.description;
      document.body.appendChild(par);

      // ici, on précise ce qu'on fait pour des phrases en particulier (CSS)
      if (embed.description.includes("court")) {
        // font-size:40px
        par.style.color = "black";
        par.classList.add("grand-message");
      }

      if (embed.description.includes("Dieu")) {
        // font-size:40px
        par.style.fontStyle = "italic";
      }

      if (embed.description.includes("ton")) {
        par.classList.add("normal-message");
      }

      if (embed.description.includes("Agressif")) {
        // font-size:40px
        par.style.color = "red";
        par.classList.add("angry-message");
      }

      if (embed.description.includes("amputasse")) {
        par.style.color = "red";
        par.classList.add("angry-message");
        document.body.style.backgroundColor = "black";
      }

      if (embed.description.includes("tremper")) {
        // font-size:40px
        par.style.color = "white";
        document.body.style.backgroundColor = "black";
      }

      if (embed.description.includes("boire")) {
        // font-size:40px
        par.style.color = "white";
        par.classList.add("grand-message-black");
        document.body.style.backgroundColor = "black";
      }

      if (embed.description.includes("hanap")) {
        // font-size:40px
        par.style.color = "white";
        document.body.style.backgroundColor = "black";
      }

      if (embed.description.includes("pic")) {
        // font-size:40px
        par.style.color = "white";
        document.body.style.backgroundColor = "black";
      }

      if (embed.description.includes("dis-je")) {
        // font-size:40px
        par.style.color = "white";
        document.body.style.backgroundColor = "black";
      }

      if (embed.description.includes("capsule")) {
        par.style.color = "black";
        document.body.style.backgroundColor = "white";
        par.classList.add("normal-message");
      }

      if (embed.description.includes("ciseaux")) {
        par.style.color = "black";
        document.body.style.backgroundColor = "white";
        par.classList.add("grand-message");
      }

      if (embed.description.includes("préoccupâtes")) {
        par.style.color = "black";
        document.body.style.backgroundColor = "white";
        par.classList.add("normal-message");
      }
    }
  }

  onMessage(event, message) {
    console.log(message);

    if (message == "Vous…. vous avez un nez… heu… un nez… très grand. :nose:") {
      document.body.style.backgroundColor = "blue";
    } else {
      document.body.innerHTML = message;
    }

    // document.body.innerHTML = 'TEST DECRITURE DEPUIS APP.JS';
    document.body.innerHTML = message;
    // if (message.image) {
    //     const image = document.getElementById("image_source");
    //     image.src = message.image.proxyURL;
    // }
  }
}

window.onload = () => {
  new App();
};
