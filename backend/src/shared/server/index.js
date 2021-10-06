const express = require("express");
const compression = require("compression");
const cors = require("cors");
const httpLogger = require("../middlewares/HttpLogger");
const errorHandler = require("../middlewares/ErrorHandler");

class Server {
  constructor(dependencies) {
    this._config = dependencies.config;
    this._server = express();
    this._server.disable("x-powered-by");
    this._server.use(express.json());
    this._server.use(cors());
    this._server.options('*', cors());
    this._server.use(
      express.urlencoded({
        extended: true,
      })
    );
    this._server.use(compression());
    dependencies.documentation.setServer(this._server);
    this._logger = dependencies.logger;
    this._dependencies = dependencies;
    this.Fail = dependencies.response.Fail;

    this.register();
  }

  register() {
    try {
      const router = express.Router();
      const apiRoute = express.Router();

      router.use(httpLogger(this._logger));

      Object.keys(this._dependencies)
        .filter((dep) => dep.includes("Route"))
        .forEach((route) =>
          apiRoute.use(
            `/${route.replace("Route", "")}`,
            this._dependencies[`${route}`]
          )
        );

      router.use("/api", apiRoute);

      router.use((err, req, res, next) => {
        errorHandler(err, res, this._logger, this.Fail);
        next(err);
      });

      this._server.use(router);
    } catch (error) {
      throw new Error(error);
    }
  }

  getApp() {
    return this._server;
  }

  start() {
    return new Promise((resolve) => {
      const http = this._server.listen(this._config.PORT, () => {
        const { port } = http.address();
        this._logger.info(`Application running on port ${port}`);
        resolve();
      });
    });
  }
}

module.exports = Server;
