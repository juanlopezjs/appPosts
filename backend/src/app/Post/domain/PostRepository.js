const BaseRepository = require("../../../shared/app/domain/BaseRepository");
const Post = require("./PostModel");
const Comment = require("../../Comment/domain/CommentModel");

class PostRepository extends BaseRepository {
  constructor({
    db
  }) {
    super(db, "Post", Post);
  }

  async getPostsAll(limit, offset) {

    const params = {
      include: [{
        model: this._db.getEntity("Comment"),
      }],
      order: [
        ['createdAt', 'DESC']
      ],
      distinct: true,
      limit,
      offset
    };

    const data = await this.getCountAll(params);

    const rows = data.rows.map((entity) => {
      const record = entity.toJSON();
      let post = new Post(record)
      post.Comments = record.Comments.map(comment => new Comment(comment))

      return post
    });

    return {
      ...data,
      rows
    };
  }
}

module.exports = PostRepository;