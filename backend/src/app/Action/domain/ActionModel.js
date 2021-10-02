class Action {
  constructor({ id, isLiked, PostId, userEmail, createdAt }) {
    this.id = id;
    this.isLiked = isLiked;
    this.userEmail = userEmail;
    this.PostId = PostId;
    this.createdAt = createdAt;
    
  }
}

module.exports = Action;
