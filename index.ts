import express from "express";
import * as mysql from "promise-mysql";

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.log("Start on port 4000.");
});

const connection = async () => {
  return await mysql.createConnection({
    host: process.env.HOST,
    port: Number(process.env.PORT),
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true,
  });
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
