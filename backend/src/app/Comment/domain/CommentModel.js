class Comment {
  constructor({ id, name, content, PostId, userEmail, createdAt }) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.userEmail = userEmail;
    this.PostId = PostId;
    this.createdAt = createdAt;
    
  }
}

module.exports = Comment;
