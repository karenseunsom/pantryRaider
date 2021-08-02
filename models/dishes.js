'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dish.belongsToMany(models.Ingredient, {
        through: "DishIngredients",
      })
      Dish.hasMany(models.Favorite)
    }
  };
  Dish.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    // ingredients: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dish',
  });
  return Dish;
};