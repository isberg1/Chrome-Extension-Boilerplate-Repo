process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

var webpack = require("webpack"),
  config = require("../webpack.config");

// get relevant args
const arg = process.argv.slice(2);

if (arg.includes("--watch")) {
  config.watch = true;
}

webpack(config, function (err, rest) {
  if (err) throw err;

  console.log("");
  console.log("--------------------------------------");
  console.log("\tBuilding", config.watch ? " --watch" : "");
  console.log("--------------------------------------");
});
