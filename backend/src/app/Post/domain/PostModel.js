class Post {
  constructor({
    id,
    name,
    content,
    likes,
    deslikes,
    userEmail,
    createdAt
  }) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.likes = likes;
    this.deslikes = deslikes;
    this.userEmail = userEmail;
    this.createdAt = createdAt;
  }
}

module.exports = Post;