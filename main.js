const { app, BrowserWindow } = require("electron");

// fenêtre volante de mon appli
let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // ici on charge notre page html
  //win.loadFile("index.html");
  win.loadFile("indexRobot.html");
    win.setFullScreen(true);
  //win.maximize();
}

function initBot() {
  // const { DiscordBot } = require("./DiscordBot");
  // new DiscordBot(
  //   "ODE1ODYzMDA2MjczMzM5Mzky.YDylog.vZonFGe9qF-ZIvm_82GHQz_W-y8",
  //   win
  // );

  const { DiscordBotRobot } = require("./DiscordBotRobot");
  new DiscordBotRobot(
    "ODE1ODYzMDA2MjczMzM5Mzky.YDylog.vZonFGe9qF-ZIvm_82GHQz_W-y8",
    win
  );
}
app.allowRendererProcessReuse = false;
app.whenReady().then(createWindow).then(initBot);

// listener de electron, on fait fonction anonyme car utilisée qu'1 fois.
app.on("activate", () => {
  // ici on vérifie que cette propriété BrowserWindow exitse ou pas, si existe strictement pas, on la créé.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
