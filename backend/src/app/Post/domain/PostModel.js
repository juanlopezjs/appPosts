class Post {
  constructor({
    id,
    name,
    content,
    likes,
    dislikes,
    userEmail,
    createdAt
  }) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.likes = likes;
    this.dislikes = dislikes;
    this.userEmail = userEmail;
    this.createdAt = createdAt;
  }
}

module.exports = Post;