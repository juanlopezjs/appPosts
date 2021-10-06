class ActionController {
  constructor({ ActionApplication, logger, response: { Success } }) {
    this._ActionApplication = ActionApplication;
    this._logger = logger;
    this.Success = Success;
  }

  async store(req, res, next) {
    try {
      const { body } = req;
      const Action = await this._ActionApplication.createAction(body);
      res.status(201).json(this.Success(Action));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ActionController;
