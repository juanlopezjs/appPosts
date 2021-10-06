const BaseApplication = require("../../../shared/app/application/BaseApplication");
class ActionApplication extends BaseApplication {
  constructor({ ActionRepository, PostApplication }) {
    super(ActionRepository);
    this._PostApplication = PostApplication;
  }

  async createAction(record) {
    try {
      const { PostId, userEmail, isLiked } = record;

      let recordPost = await this._PostApplication.get(PostId);
      let recordAction = await this.getWithParameters({
        PostId,
        userEmail,
      });

      if (recordPost === null) {
        throw "The post not exist";
      }

      if (recordAction) {
        if (recordAction.isLiked !== isLiked) {
          if (recordAction.isLiked) {
            recordPost.likes--;
            recordPost.dislikes++;
          } else {
            recordPost.dislikes--;
            recordPost.likes++;
          }

          await this.update(recordAction.id, {
            isLiked,
          });
        } else {
          isLiked ? recordPost.likes-- : recordPost.dislikes--;
          await this.delete(recordAction.id);
        }
      } else {
        isLiked ? recordPost.likes++ : recordPost.dislikes++;
        await this.create(record);
      }

      return await this._PostApplication.update(PostId, recordPost);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ActionApplication;
