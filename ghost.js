const ghost = require("aoi.js");
const fs = require("node:fs")
const bot = new ghost.Bot({
  token: process.env.ghost,
  prefix: ["."],
intents: "all"
})
bot.onMessage()
bot.readyCommand({
  channel: "",
  code: `
$log[$getVar[ghost]]
`,
})
require("./ghost/variables.js")(bot)
require("./ghost/status.js")(bot)
require("./ghost/list.js")(bot)
require("./ghost/list2.js")(bot)
const loader = new ghost.LoadCommands(bot);
loader.load(bot.cmd, "./cmd/");
