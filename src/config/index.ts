export default {
  /**
   * APIサーバーのPORT番号
   */
  port: process.env.PORT,

  /**
   * databaseの設定
   */
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true,
  },
};
