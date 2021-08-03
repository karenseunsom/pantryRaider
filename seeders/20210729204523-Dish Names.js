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
    return queryInterface.bulkInsert("Dishes", [
      {
        name: "Grilled Chicken with Rice and Beans and Pico de Gallo",
        // ingredient1: "rice",
        // ingredient2: "beans",
        // ingredient3: "pico de gallo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   name: "Roasted Chicken, Potatoes, Asparagus with Mornay Sauce",
      //   ingredient1: "chicken",
      //   ingredient2: "potatoes",
      //   ingredient3: "asparagus",
      //   ingredient4: "milk",
      //   ingredient5: "flour",
      //   ingredient6: "butter",
      //   ingredient7: "cheese",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Chicken Piccata, Rice, Sauteed Spinach, White Wine & Lemon-Caper Sauce",
      //   ingredient1: "chicken",
      //   ingredient2: "flour",
      //   ingredient3: "rice",
      //   ingredient4: "spinach",
      //   ingredient5: "white wine",
      //   ingredient6: "lemon",
      //   ingredient7: "capers",
      //   ingredient8: "butter",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Chicken Alfredo with Fettuccine",
      //   ingredient1: "chicken",
      //   ingredient2: "butter",
      //   ingredient3: "cream",
      //   ingredient4: "parmigiano reggiano",
      //   ingredient5: "fettuccine",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Chicken Cordon Bleu, Risotto and Tomato Sauce",
      //   ingredient1: "breadcrumbs",
      //   ingredient2: "ham",
      //   ingredient3: "cheese",
      //   ingredient4: "arborio rice",
      //   ingredient5: "white wine",
      //   ingredient6: "butter",
      //   ingredient7: "parmigiano reggiano",
      //   ingredient8: "tomato",
      //   ingredient9: "garlic",
      //   ingredient10: "onion",
      //   ingredient11: "basil",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Buttermilk Fried Chicken, Mashed Potatoes, Roasted Carrots and Chicken Gravy",
      //   ingredient1: "chicken",
      //   ingredient2: "flour",
      //   ingredient3: "buttermilk",
      //   ingredient4: "potatoes",
      //   ingredient5: "butter",
      //   ingredient6: "cream",
      //   ingredient7: "carrots",
      //   ingredient8: "chicken stock",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Chicken Tacos with Shredded Cheese, Sour Cream and Pico de Gallo",
      //   ingredient1: "chicken",
      //   ingredient2: "cheese",
      //   ingredient3: "tortilla",
      //   ingredient4: "sour cream",
      //   ingredient5: "pico de gallo",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "BBQ Chicken Sandwich with Cheddar Cheese, Mayo and Dill Pickles",
      //   ingredient1: "chicken breast",
      //   ingredient2: "bread",
      //   ingredient3: "barbecue sauce",
      //   ingredient4: "cheddar cheese",
      //   ingredient5: "mayonnaise",
      //   ingredient6: "dill pickles",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Chicken Salad Sandwich",
      //   ingredient1: "chicken",
      //   ingredient2: "mayonnaise",
      //   ingredient3: "celery",
      //   ingredient4: "onion",
      //   ingredient5: "bread",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Grilled Chicken and Arugula Salad with Tomato, Onion and Vinaigrette",
      //   ingredient1: "chicken",
      //   ingredient2: "arugula",
      //   ingredient3: "tomato",
      //   ingredient4: "onion",
      //   ingredient5: "oil",
      //   ingredient6: "vinegar",
      //   ingredient7: "vinaigrette",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Bacon Wrapped Beef Tenderloin with Grilled Asparagus and Roasted Potato",
      //   ingredient1: "beef tenderloin",
      //   ingredient2: "bacon",
      //   ingredient3: "asparagus",
      //   ingredient4: "potatoes",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "BBQ Baby Back Ribs, Corn and Mac N' Cheese",
      //   ingredient1: "barbecue sauce",
      //   ingredient2: "baby back ribs",
      //   ingredient3: "corn",
      //   ingredient4: "elbow macaroni",
      //   ingredient5: "cheese",
      //   ingredient6: "milk",
      //   ingredient7: "flour",
      //   ingredient8: "butter",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Steak Fajitas with Grilled Peppers and Onions, Cheese and Sour Cream",
      //   ingredient1: "beef",
      //   ingredient2: "peppers",
      //   ingredient3: "onion",
      //   ingredient4: "tortilla",
      //   ingredient5: "cheese",
      //   ingredient6: "sour cream",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "Steak Frites with a Red Wine Pan Sauce",
      //   ingredient1: "beef",
      //   ingredient2: "potatoes",
      //   ingredient3: "red wine",
      //   ingredient4: "butter",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "",
      //   ingredient1: "",
      //   ingredient2: "",
      //   ingredient3: "",
      //   ingredient4: "",
      //   ingredient5: "",
      //   ingredient6: "",
      //   ingredient7: "",
      //   ingredient8: "",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "",
      //   ingredient1: "",
      //   ingredient2: "",
      //   ingredient3: "",
      //   ingredient4: "",
      //   ingredient5: "",
      //   ingredient6: "",
      //   ingredient7: "",
      //   ingredient8: "",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "",
      //   ingredient1: "",
      //   ingredient2: "",
      //   ingredient3: "",
      //   ingredient4: "",
      //   ingredient5: "",
      //   ingredient6: "",
      //   ingredient7: "",
      //   ingredient8: "",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "",
      //   ingredient1: "",
      //   ingredient2: "",
      //   ingredient3: "",
      //   ingredient4: "",
      //   ingredient5: "",
      //   ingredient6: "",
      //   ingredient7: "",
      //   ingredient8: "",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "",
      //   ingredient1: "",
      //   ingredient2: "",
      //   ingredient3: "",
      //   ingredient4: "",
      //   ingredient5: "",
      //   ingredient6: "",
      //   ingredient7: "",
      //   ingredient8: "",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "",
      //   ingredient1: "",
      //   ingredient2: "",
      //   ingredient3: "",
      //   ingredient4: "",
      //   ingredient5: "",
      //   ingredient6: "",
      //   ingredient7: "",
      //   ingredient8: "",

      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: "",
      //   ingredient1: "",
      //   ingredient2: "",
      //   ingredient3: "",
      //   ingredient4: "",
      //   ingredient5: "",
      //   ingredient6: "",
      //   ingredient7: "",
      //   ingredient8: "",

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
