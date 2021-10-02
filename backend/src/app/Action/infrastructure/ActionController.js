class ActionController {
  constructor({ ActionApplication, logger, response: { Success } }) {
    this._ActionApplication = ActionApplication;
    this._logger = logger;
    this.Success = Success;
  }

  async index(req, res, next) {
    try {
      const Actions = await this._ActionApplication.getAll();
      res.status(200).json(this.Success(Actions));
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { params } = req;
      const Action = await this._ActionApplication.get(params.id);
      res.status(200).json(this.Success(Action));
    } catch (error) {
      next(error);
    }
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

  async edit(req, res, next) {
    try {
      const { body, params } = req;
      const Action = await this._ActionApplication.update(params.id, body);
      res.status(201).json(this.Success(Action));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { params } = req;
      const Action = await this._ActionApplication.delete(params.id);
      res.status(201).json(this.Success(Action));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ActionController;
