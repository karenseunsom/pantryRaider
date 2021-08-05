"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    function getDishIngredient(dishId, ingredientId) {
      return{
        DishId: dishId,
        IngredientId: ingredientId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    }

    return queryInterface.bulkInsert("DishIngredients", [
    //   name: "Grilled Chicken with Rice and Beans and Pico de Gallo",
    //   // ingredient1: "rice",
    //   // ingredient2: "beans",
    //   // ingredient3: "pico de gallo",
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   name: "Roasted Chicken, Potatoes, Asparagus with Mornay Sauce",
    // //   ingredient1: "chicken",
    // //   ingredient2: "potatoes",
    // //   ingredient3: "asparagus",
    // //   ingredient4: "milk",
    // //   ingredient5: "flour",
    // //   ingredient6: "butter",
    // //   ingredient7: "cheese",
      getDishIngredient(1,1),
      getDishIngredient(1,2),
      getDishIngredient(1,3),
      getDishIngredient(2,4),
      getDishIngredient(2,5),
      getDishIngredient(2,6),
      getDishIngredient(2,7),
      getDishIngredient(2,8),
      getDishIngredient(2,9),
      getDishIngredient(2,10),
      getDishIngredient(3,4),
      getDishIngredient(3,8),
      getDishIngredient(3,1),
      getDishIngredient(3,11),
      getDishIngredient(3,12),
      getDishIngredient(3,13),
      getDishIngredient(3,14),
      getDishIngredient(3,9),
      getDishIngredient(4,4),
      getDishIngredient(4,15),
      getDishIngredient(4,17),
      getDishIngredient(4,16),
      getDishIngredient(5,4),
      getDishIngredient(5,8),
      getDishIngredient(5,9),
      getDishIngredient(5,16),
      getDishIngredient(5,18),
      getDishIngredient(5,21),
      getDishIngredient(5,22),
      getDishIngredient(5,23),
      getDishIngredient(5,24),
      getDishIngredient(5,25),
      getDishIngredient(6,79),
      getDishIngredient(6,8),
      getDishIngredient(6,26),
      getDishIngredient(6,27),
      getDishIngredient(6,28),
      getDishIngredient(6,5),
      getDishIngredient(6,15),
      getDishIngredient(7,80),
      getDishIngredient(7,4),
      getDishIngredient(7,29),
      getDishIngredient(7,81),
      getDishIngredient(7,30),
      getDishIngredient(7,10),
      getDishIngredient(7,24),
      getDishIngredient(7,23),
      getDishIngredient(7,39),
      getDishIngredient(7,75),
      getDishIngredient(7,76),
      getDishIngredient(8,4),
      getDishIngredient(8,32),
      getDishIngredient(8,33),
      getDishIngredient(8,34),
      getDishIngredient(8,35),
      getDishIngredient(8,36),
      getDishIngredient(9,82),
      getDishIngredient(9,83),
      getDishIngredient(9,35),
      getDishIngredient(9,37),
      getDishIngredient(9,24),
      getDishIngredient(9,4),
      getDishIngredient(10,84),
      getDishIngredient(10,4),
      getDishIngredient(10,38),
      getDishIngredient(10,39),
      getDishIngredient(10,40),
      getDishIngredient(10,13),
      getDishIngredient(10,24),
      getDishIngredient(11,42),
      getDishIngredient(11,43),
      getDishIngredient(11,6),
      getDishIngredient(11,85),
      getDishIngredient(11,86),
      getDishIngredient(11,9),
      getDishIngredient(11,22),
      getDishIngredient(12,44),
      getDishIngredient(12,33),
      getDishIngredient(12,45),
      getDishIngredient(12,46),
      getDishIngredient(12,10),
      getDishIngredient(12,7),
      getDishIngredient(13,47),
      getDishIngredient(13,48),
      getDishIngredient(13,24),
      getDishIngredient(13,10),
      getDishIngredient(13,30),
      getDishIngredient(13,75),
      getDishIngredient(13,76),
      getDishIngredient(13,29),
      getDishIngredient(14,87),
      getDishIngredient(14,47),
      getDishIngredient(14,49),
      getDishIngredient(14,5),
      getDishIngredient(14,9),

      //   DishName: 'Herb de Provence Steak Frites with Red Wine Pan Sauce',
      //   DishId: 13,
      //   IngredientId: 87,
      //   IngredientId: 47,
      //   IngredientId: 49,
      //   IngredientId: 5,
      //   IngredientId: 9,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },{
      //   DishName: 'Apple Braised Pork Tenderloin with Rosemary Potato-Brussel Sprout Hash and Veloute',
      //   DishId: 14,
      //   IngredientId: 50,
      //   IngredientId: 51,
      //   IngredientId: 52,
      //   IngredientId: 54,
      //   IngredientId: 5,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },{
      //   DishName: 'Rueben Sandwich with Sauerkraut and Thousand Island on Marble Rye',
      //   DishId: 15,
      //   IngredientId: 53,
      //   IngredientId: 88,
      //   IngredientId: 32,
      //   IngredientId: 13,
      //   IngredientId: 35,
      //   IngredientId: 89,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },{
      //   DishName: 'Heirloom Tomato and Arugula BLT on Country Bread with Smoked Paprika Aioli',
      //   DishId: 16,
      //   IngredientId: 22,
      //   IngredientId: 23,
      //   IngredientId: 35,
      //   IngredientId: 38,
      //   IngredientId: 43,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   DishName: 'Grilled Adobo Pork Chops with BBQ Braised Beans and Caramelized Apple and Onions',
      //   DishId: 17,
      //   IngredientId: 90,
      //   IngredientId: 33,
      //   IngredientId: 43,
      //   IngredientId: 24,
      //   IngredientId: 54,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   DishName: 'Chicken Fried Steak with Braised Greens, Steak Gravy and Cornbread',
      //   DishId: 18,
      //   IngredientId: 8,
      //   IngredientId: 47,
      //   IngredientId: 55,
      //   IngredientId: 56,
      //   IngredientId: 57,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },{
      //   DishName: 'Pesto Grilled Flank Steak with Tagliatelle, Swiss Chard and Red Wine-Mushroom Sauce',
      //   DishId: 19,
      //   IngredientId: 47,
      //   IngredientId: 49,
      //   IngredientId: 58,
      //   IngredientId: 59,
      //   IngredientId: 60,
      //   IngredientId: 9,
      //   IngredientId: 91,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },{
      //   DishName: 'White Wine-Garlic Steamed Mussels with Toasted Baguette',
      //   DishId: 20,
      //   IngredientId: 12,
      //   IngredientId: 9,
      //   IngredientId: 13,
      //   IngredientId: 23,
      //   IngredientId: 69,
      //   IngredientId: 70,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },{
      //   DishName: 'Chile Rubbed Ahi Tuna with Wasabi Mashed Potatoes and Soy Braised Kale',
      //   DishId: 21,
      //   IngredientId: 71,
      //   IngredientId: 61,
      //   IngredientId: 62,
      //   IngredientId: 63,
      //   IngredientId: 64,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },{
      //   DishName: 'Grilled Salmon with Lemon Polenta, Sauteed Spinach and Red Pepper Coulis',
      //   DishId: 22,
      //   IngredientId: 65,
      //   IngredientId: 66,
      //   IngredientId: 67,
      //   IngredientId: 68,
      //   IngredientId: 11,
      //   IngredientId: 13,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
