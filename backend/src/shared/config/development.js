const { PGHOST, PGDATABASE, PGUSERNAME  } = process.env;
module.exports = {
  env: "development",
  PORT: process.env.PORT || "5000",
  DB: {
    database: PGDATABASE || "postDB",
    host: PGHOST || "localhost",
    username: PGUSERNAME || "postgres",
    dialect: "postgres",
    logging: false
  }
};
