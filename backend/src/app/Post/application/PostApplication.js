const BaseApplication = require("../../../shared/app/application/BaseApplication");
class PostApplication extends BaseApplication {
  constructor({
    PostRepository
  }) {
    super(PostRepository);
  }

  getPagination(_page, _limit) {
    const limit = _limit ? +_limit : 20;
    const offset = _page ? _page * limit : 0;

    return {
      limit,
      offset
    };
  }

  getPagingData(data, page, limit) {
    const {
      count: totalItems,
      rows: items
    } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return {
      totalItems,
      items,
      totalPages,
      currentPage
    };
  };

  async getPostsAll(_page, _limit) {
    const {
      limit,
      offset
    } = this.getPagination(_page, _limit);

    const posts = await this._entityRepository.getPostsAll(limit, offset);
    return this.getPagingData(posts, _page, limit)
  }
}

module.exports = PostApplication;