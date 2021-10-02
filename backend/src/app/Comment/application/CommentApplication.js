const BaseApplication = require("../../../shared/app/application/BaseApplication");
class CommentApplication extends BaseApplication {
  constructor({ CommentRepository }) {
    super(CommentRepository);
  }
}

module.exports = CommentApplication;
