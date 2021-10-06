class CommentController {
  constructor({ CommentApplication, logger, response: { Success } }) {
    this._CommentApplication = CommentApplication;
    this._logger = logger;
    this.Success = Success;
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
}

module.exports = CommentController;
