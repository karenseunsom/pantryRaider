// let session = require('express-session')
// let cookie = require('cookie-parser')


function renderDishesExternal(dishesArray) {
    let dishesHtmlArray = dishesArray.map((dish) => {
        return `
        <div class="col-auto mb-3">
            <div class="card h-100" style="width: 18rem;">
            <img src="${dish.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${dish.title}</h5>
                <a id="recipeButton" data-recipeid="${dish.id}" href="/recipes" class="btn btn-primary">View Recipe</a>
                <button class="btn btn-primary favorite-button" data-dishID="${dish.id}">Favorite</button>
            </div>
            </div>
        </div>`
    })
    // console.log(dishesArray)
    return dishesHtmlArray.join('')
}

const searchBar = document.getElementById('search-bar-ingredients')
const searchForm = document.getElementById('search-form')

let resultsBox = document.getElementById('results-box');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInputHTML = encodeURIComponent(searchBar.value)
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=72b922abc7e54c7b9f34a9882638cd8f&ingredients=` + searchInputHTML)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            resultsBox.innerHTML = renderDishesExternal(data)
        })

})

// event listener to store clicked recipe id into local storage
document.addEventListener('click', (event) => {
    if (event.target.id == 'recipeButton') {
        let clickedRecipeJSON = localStorage.getItem('clickedRecipe');
        let clickedRecipe = JSON.parse(clickedRecipeJSON);
        if (clickedRecipe == null) {
            clickedRecipe = []
        }
        clickedRecipe.splice(0, 1, event.target.dataset.recipeid)
        clickedRecipeJSON = JSON.stringify(clickedRecipe)
        localStorage.setItem('clickedRecipe', clickedRecipeJSON)
    }
})

// favorite functionality
//  event listener needs to be on the body of the results, to not include the buttons of Login and Favorite Recipes
// add eventListener for a click on button
// const dishID = event.target.dataset.dishid
const resultsBody = document.getElementById('results-box')

resultsBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("favorite-button")) {
        const dishID = event.target.dataset.dishid
        console.log(dishID)
        // write a function that saveToDB(dishID)
        // * function has to find the '===' of dishID in the db
        // add the dishID to table
        // TODO !! look into how to do a many to many table
        //TODO get the user.session.id
        const userID = user.session.id
        console.log(userID)
        // db.User.findOne({
        //     where: {
        //         email: "guest@account.com"
        //     }
        // })
        //     .then((user) => {
        //         if (user) {
        //             req.session.user = user
        //             // console.log(req.session.user)
        //             res.redirect('/')
        //         }
        //     })
    }
})

// Render Recipe information


