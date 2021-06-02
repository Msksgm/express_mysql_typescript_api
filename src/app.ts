import express from "express";
import * as mysql from "promise-mysql";
import config from "./config";

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.log("Start on port 4000.");
});

const connection = async () => {
  return await mysql.createConnection(config.db);
};

// movie一覧取得
app.get("/movie", (req: express.Request, res: express.Response) => {
  connection()
    .then((connection) => {
      const result = connection.query("SELECT * FROM MOVIE");
      connection.end();
      return result;
    })
    .then(function (rows) {
      res.send(rows);
    });
});
