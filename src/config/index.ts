export default {
  /**
   * APIサーバーのPORT番号
   */
  port: 4000,

  /**
   * databaseの設定
   */
  db: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10),
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true,
  },
};
