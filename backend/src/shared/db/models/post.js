'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Comment);
      this.hasMany(models.Action);
    }
  };
  Post.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER,
    userEmail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};