const { ipcRenderer } = require("electron");
const robot = require("robotjs");

class AppRobot {
  constructor() {
    console.log("LOG depuis page html");
    this.initListeners();

    for (let i = 0; i < 2000; i++) {
      //   const button = document.createElement("button");
      //   button.textContent = ".";
      //   document.body.appendChild(button);
      const circle = document.createElement("div");
      // circle.textContent = ".";
      circle.className = "circle";
      document.body.appendChild(circle);
    }

    const screenSize = robot.getScreenSize();
    this.height = screenSize.height;
    this.width = screenSize.width;
  }

  initListeners() {
    ipcRenderer.on("messageDiscord", this.onMessage.bind(this));
  }

  draw() {
    //while (counter < 2) {
    this.angle += 0.05;
    const x = this.width / 2 + Math.cos(this.angle) * this.radius;
    const y = this.height / 2 + Math.sin(this.angle) * this.radius;
    robot.moveMouse(x, y);
    if (this.angle < Math.PI * 2) {
      requestAnimationFrame(this.draw.bind(this));
    }
    //}
  }

  onMessage(event, message) {
    if (message === "red") {
      robot.setMouseDelay(4);
      this.radius = this.height / 2 - 10;
      this.angle = 0;

      this.draw();
    }
  }
}

window.onload = () => {
  new AppRobot();
};
