const { resolve } = require("path");

module.exports = {
  config: resolve(__dirname,"src", "api", "config", "config.ts"),
  "models-path": resolve(__dirname, "src", "api", "models"),
  "migrations-path": resolve(__dirname, "src", "api", "database", "migrations"),
  "seeders-path": resolve(__dirname, "src", "api", "database", "seeds"),
};