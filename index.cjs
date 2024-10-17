// import SqlPlugin from "prettier-plugin-sql";

const SqlPlugin = require("prettier-plugin-sql");

const SQLCFormat = {
  ...SqlPlugin,
  printers: {
    sql: {
      print(path, opts) {
        const source = SqlPlugin.printers.sql.print(path, opts);
        return source.replaceAll(/(sqlc\.\w+)\s\(/g, "$1(");
      },
    },
  },
};

module.exports = SQLCFormat;
