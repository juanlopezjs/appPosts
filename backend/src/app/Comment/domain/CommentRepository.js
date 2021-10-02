const BaseRepository = require("../../../shared/app/domain/BaseRepository");
const Comment = require("./CommentModel");
class CommentRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Comment", Comment);
  }
}

module.exports = CommentRepository;
