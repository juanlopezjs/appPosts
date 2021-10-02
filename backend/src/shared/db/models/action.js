'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Post);
    }
  };
  Action.init({
    PostId: DataTypes.INTEGER,
    userEmail: DataTypes.STRING,
    isLiked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Action',
  });
  return Action;
};