class CommentController {
  constructor({ CommentApplication, logger, response: { Success } }) {
    this._CommentApplication = CommentApplication;
    this._logger = logger;
    this.Success = Success;
  }

  async index(req, res, next) {
    try {
      const Comments = await this._CommentApplication.getAll();
      res.status(200).json(this.Success(Comments));
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const { params } = req;
      const Comment = await this._CommentApplication.get(params.id);
      res.status(200).json(this.Success(Comment));
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const { body } = req;
      const Comment = await this._CommentApplication.create(body);
      res.status(201).json(this.Success(Comment));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      const { body, params } = req;
      const Comment = await this._CommentApplication.update(params.id, body);
      res.status(201).json(this.Success(Comment));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { params } = req;
      const Comment = await this._CommentApplication.delete(params.id);
      res.status(201).json(this.Success(Comment));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CommentController;
