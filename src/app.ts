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

// movie単一取得
app.get("/movie/:movieId", (req: express.Request, res: express.Response) => {
  const movieId = req.params.movieId;
  connection()
    .then((connection) => {
      const result = connection.query("SELECT * FROM MOVIE WHERE ID = ?", [
        movieId,
      ]);
      connection.end();
      return result;
    })
    .then(function (rows) {
      res.send(rows);
    });
});

// movie追加処理
app.put("/movie", (req: express.Request, res: express.Response) => {
  const name = req.body.name;
  connection()
    .then((connection) => {
      const result = connection.query("INSERT INTO MOVIE (NAME) VALUES (?)", [
        name,
      ]);
      connection.end();
      return result;
    })
    .then(function (rows) {
      res.send(rows);
    });
});

// movie更新処理
app.patch("/movie/:movieId", (req: express.Request, res: express.Response) => {
  const movieId = parseInt(req.params.movieId, 10);
  const name = req.body.name;
  console.log(movieId);
  console.log(name);
  connection()
    .then((connection) => {
      const result = connection.query(
        `UPDATE MOVIE SET NAME = "${name}" WHERE ID = ${movieId}`
      );
      connection.end();
      return result;
    })
    .then(function (rows) {
      res.send(rows);
    });
});

// movie削除処理
app.delete("/movie/:movieId", (req: express.Request, res: express.Response) => {
  const movieId = req.params.movieId;
  connection()
    .then((connection) => {
      const result = connection.query("DELETE FROM MOVIE WHERE ID = ?", [
        movieId,
      ]);
      connection.end();
      return result;
    })
    .then(function (rows) {
      res.send(rows);
    });
});
