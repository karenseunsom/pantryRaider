'use strict';

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
    return queryInterface.bulkInsert('Ingredients', [{
      IngredientId: 1,
      apiID: 20444,      
      name: 'Rice',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      IngredientId: 2,
      apiID: 16069,
      name: 'Beans',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      IngredientId: 3,
      apiID: 27027,
      name: 'Pico de gallo',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      IngredientId: 4,
      apiID: 5062,
      name: 'Chicken Breast',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 5,
      apiID: 11362,
      name: 'Potatoes',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 6,
      apiID: 11011,
      name: 'Asparagus',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 7,
      apiID: 1077,
      name: 'Milk',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 8,
      apiID: 20081,
      name: 'Flour',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 9,
      apiID: 1001,
      name: 'Butter',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 10,
      apiID: 1041009,
      name: 'Cheese',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 11,
      apiID: 10011457,
      name: 'Spinach',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 12,
      apiID: 14106,
      name: 'White Wine',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 13,
      apiID: 9150,
      name: 'Lemon',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 14,
      apiID: 2054,
      name: 'Capers',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 15,
      apiID: 1053,
      name: 'Cream',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 16,
      apiID: 1033,
      name: 'Parmigiano Reggiano',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 17,
      apiID: 10020409,
      name: 'Fettuccine',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 18,
      apiID: 10018079,
      name: 'Panko',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 19,
      apiID: 10151,
      name: 'Ham',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 20,
      apiID: 1040,
      name: 'Swiss Cheese',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 21,
      apiID: 10020052,
      name: 'Arborio Rice',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 22,
      apiID: 11529,
      name: 'Tomato',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 23,
      apiID: 11215,
      name: 'Garlic',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 24,
      apiID: 11282,
      name: 'Onion',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 25,
      apiID: 2044,
      name: 'Basil',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 26,
      apiID: 1230,
      name: 'Buttermilk',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 27,
      apiID: 11124,
      name: 'Carrots',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 28,
      apiID: 6172,
      name: 'Chicken Stock',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 29,
      apiID: 18364,
      name: 'Tortilla',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 30,
      apiID: 1056,
      name: 'Sour Cream',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 31,
      apiID: 5100,
      name: 'Chicken Wings',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 32,
      apiID: 18064,
      name: 'Bread',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 33,
      apiID: 6150,
      name: 'Barbecue Sauce',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 34,
      apiID: 1009,
      name:'Cheddar Cheese',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 35,
      apiID: 4025,
      name:'Mayonnaise',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 36,
      apiID: 10011937,
      name:'Dill Pickles',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 37,
      apiID: 11143,
      name:'Celery',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 38,
      apiID: 11959,
      name:'Arugula',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 39,
      apiID: 4582,
      name:'Oil',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 40,
      apiID: 2053,
      name:'Vinegar',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 41,
      apiID: 4135,
      name:'Vinaigrette',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 42,
      apiID: 13926,
      name:'Beef Tenderloin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 43,
      apiID: 10123,
      name:'Bacon',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 44,
      apiID: 10192,
      name:'Baby Back Ribs',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 45,
      apiID: 11168,
      name:'Corn',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 46,
      apiID: 10120499,
      name:'Elbow Macaroni',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 47,
      apiID: 23572,
      name:'Beef',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 48,
      apiID: 10111333,
      name:'Peppers',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 49,
      apiID: 14096,
      name:'Red Wine',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 50,
      apiID: 10218,
      name:'Pork Tenderloin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 51,
      apiID: 2036,
      name:'Rosemary',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 52,
      apiID: 11098,
      name:'Brussel Sprouts',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 53,
      apiID: 13346,
      name:'Corned Beef',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 54,
      apiID: 9003,
      name:'Apple',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 55,
      apiID: 21052,
      name:'Greens',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 56,
      apiID: 6170,
      name:'Beef Stock',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 57,
      apiID: 18023,
      name:'Cornbread Mix',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 58,
      apiID: 93698,
      name:'Pesto',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 59,
      apiID: 20420,
      name:'Pasta',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 60,
      apiID: 11260,
      name:'Mushroom',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 61,
      apiID: 15117,
      name:'Ahi Tuna',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 62,
      name:'Wasabi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 63,
      apiID: 16124,
      name:'Soy Sauce',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 64,
      apiID: 11233,
      name:'Kale',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 65,
      apiID: 15076,
      name:'Salmon',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 66,
      apiID: 10035137,
      name:'Polenta',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 67,
      apiID: 1002046,
      name:'Dijon Mustard',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 68,
      apiID: 11821,
      name:'Red Bell Pepper',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 69,
      apiID: 15164,
      name:'Mussels',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 70,
      apiID: 18033,
      name:'Baguette',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 71,
      apiID: 98839,
      name:'Chipotle',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 72,
      apiID: 15152,
      name:'Shrimp',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 73,
      apiID: 2043,
      name:'Turmeric',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 74,
      apiID: 16018,
      name:'Black Beans',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 75,
      apiID: 11165,
      name:'Cilantro',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 76,
      apiID: 9159,
      name:'Lime',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 77,
      apiID: 4053,
      name:'Olive Oil',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 78,
      apiID: 5091,
      name: 'Chicken Thighs',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 79,
      apiID: 5066,
      name: 'Chicken Drumsticks',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 80,
      apiID: 10211962,
      name: 'Ancho Chiles',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 81,
      apiID: 11954,
      name: 'Tomatillos',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 82,
      apiID: 10018029,
      name: 'Country Bread',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 83,
      apiID: 1012030,
      name: 'Lemon Pepper',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 84,
      apiID: 10311529,
      name: 'Cherry Tomato',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 85,
      apiID: 10211362,
      name: 'Yukon Gold Potatoes',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 86,
      apiID: 1125,
      name: 'Egg Yolk',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 87,
      apiID: 1012042,
      name: 'Herbs de Provence',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 88,
      apiID: 11439,
      name: 'Sauerkraut',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 89,
      apiID: 11935,
      name: 'Ketchup',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 90,
      apiID: 10010062,
      name: 'Pork Chops',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      IngredientId: 91,
      apiID: 11147,
      name: 'Swiss Chard',
      createdAt: new Date(),
      updatedAt: new Date()
    },{

      name:'',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'',
      createdAt: new Date(),
      updatedAt: new Date()
    }, ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
