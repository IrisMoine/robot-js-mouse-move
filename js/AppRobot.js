const { ipcRenderer } = require("electron");
const robot = require("robotjs");

let delay = async function (millis = 0) {
  return new Promise(function (resolve) {
    window.setTimeout(resolve, millis);
  });
};

let lerp = function (start, stop, amt) {
  return amt * (stop - start) + start;
};

let dist = function (x1, y1, x2, y2) {
  return Math.hypot(x1 - x2, y1 - y2);
};

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
      circle.addEventListener("mouseenter", () => {
        circle.classList.add("hide"); //hide, remove, toggle
        

        // if(circle.classList.contains('hide')) {

        // }
      });
    }

    const screenSize = robot.getScreenSize();
    this.height = screenSize.height;
    this.width = screenSize.width;
    this.targetPos = robot.getMousePos();
    this.currentPos = { x: 0, y: 0 };
    this.currentPos.x = this.targetPos.x;
    this.currentPos.y = this.targetPos.y;
  }

  initListeners() {
    ipcRenderer.on("messageDiscord", this.onMessage.bind(this));
  }

  updateMovements(resolve, speed) {
    // const currentPos = robot.getMousePos();

    const d = dist(
      this.currentPos.x,
      this.currentPos.y,
      this.targetPos.x,
      this.targetPos.y
    );

    if (d >= 2) {
      let x = (this.currentPos.x = lerp(
        this.currentPos.x,
        this.targetPos.x,
        speed
      ));
      let y = (this.currentPos.y = lerp(
        this.currentPos.y,
        this.targetPos.y,
        speed
      ));

      robot.moveMouse(x, y);
      console.log();
      requestAnimationFrame(() => this.updateMovements(resolve, speed));
    } else {
      robot.moveMouse(this.targetPos.x, this.targetPos.y);
      this.currentPos.x = this.targetPos.x;
      this.currentPos.y = this.targetPos.y;
      resolve();
    }
  }

  async playMovements() {
    await this.moveTo(500, 500, 0.5);
    await delay(1000);
    await this.moveTo(200, 200, 0.01);
    await this.moveTo(300, 1000);
    await delay(2000);
    await this.moveTo(0, 100);
    console.log("movement finished");
  }

  moveTo(x, y, speed = 0.05) {
    return new Promise((resolve) => {
      this.targetPos.x = x;
      this.targetPos.y = y;
      this.updateMovements(resolve, speed);
    });
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
      // robot.setMouseDelay(4);
      this.radius = this.height / 2 - 10;
      this.angle = 0;

      this.draw();
    }

    if (message === "play") {
      this.playMovements();
    }
  }
}

window.onload = () => {
  new AppRobot();
};
