module.exports = {
  env: "development",
  PORT: process.env.PORT || "5000",
  DB: {
    database: "postDB",
    host: "localhost",
    dialect: "postgres",
    logging: false
  }
};
