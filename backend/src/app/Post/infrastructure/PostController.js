class PostController {
  constructor({
    PostApplication,
    logger,
    response: {
      Success
    }
  }) {
    this._PostApplication = PostApplication;
    this._logger = logger;
    this.Success = Success;
  }

  async index(req, res, next) {
    try {
      const {
        _page,
        _limit
      } = req.query;
      const Posts = await this._PostApplication.getPostsAll(_page, _limit);
      res.status(200).json(this.Success(Posts));
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      const {
        params
      } = req;
      const Post = await this._PostApplication.get(params.id);
      res.status(200).json(this.Success(Post));
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const {
        body
      } = req;
      const Post = await this._PostApplication.create(body);
      res.status(201).json(this.Success(Post));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      const {
        body,
        params
      } = req;
      const Post = await this._PostApplication.update(params.id, body);
      res.status(201).json(this.Success(Post));
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const {
        params
      } = req;
      const Post = await this._PostApplication.delete(params.id);
      res.status(201).json(this.Success(Post));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PostController;