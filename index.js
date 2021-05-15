const express = require("express");
const fs = require("fs");
const app = express();

const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

app.use(express.json());
// app.use(express.urlencoded());

// const controllersPath = './app/controllers';
// const libsPath = './app/libs';
// const middlewaresPath = './app/middlewares';

const routesPath = "./app/routes";

fs.readdirSync(routesPath).forEach(function (file) {
  if (~file.indexOf(".js")) {
    let route = require(routesPath + "/" + file);
    route.setRouter(app);
  }
});

const dbPath = path.join(__dirname, "./boltfasting.db");

let db = null;

const initializeServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3001, () => {
      console.log("Server Running at http://localhost:3001/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeServer();

app.get("/", async (req, res) => {
  try {
    const selectUserQuery = `SELECT * FROM user_details WHERE email = 'vicky24@gmail.com'`;
    const userId = await db.get(selectUserQuery);
    // console.log("userId:" + JSON.stringify(userId));
    res.send("userId:" + JSON.parse(userId));
  } catch (er) {
    res.send(er);
  }
});

module.exports = {
  db: db,
};
