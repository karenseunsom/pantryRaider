function renderDishesExternal(dishesArray) {
    let dishesHtmlArray = dishesArray.map((dish) => {
        return `
        <div class="col-auto mb-3">
            <div class="card h-100" style="width: 18rem;">
            <img src="${dish.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${dish.title}</h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
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
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=a4b35713784748878ce5b11f4c4293dd&ingredients=` + searchInputHTML)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            resultsBox.innerHTML = renderDishesExternal(data)
        })

})

// favorite functionality
//  event listener needs to be on the body of the results, to not include the buttons of Login and Favorite Recipes
// add eventListener for a click on button
// const dishID = event.target.dataset.dishid
// const resultsBody = document.getElementById('results-box')
// var favDishArraySession = []

// resultsBody.addEventListener("click", (e) => {
//     if (e.target.classList.contains("favorite-button")) {
//         const dishID = event.target.dataset.dishid
//         console.log(dishID)
//         if (!favDishArraySession.includes(dishID)) {
//             // return
//             // console.log('test')
//             favDishArraySession.push(dishID)
//         }
//         // TODO !! look into how to do a many to many table
//         //TODO get the user.session.id
//         const userID = user.session.id
//         // console.log(userID)
//         // db.User.findOne({
//         //     where: {
//         //         id: 
//         //     }
//         // })
//         //     .then((user) => {
//         //         if (user) {
//         //             req.session.user = user
//         //             // console.log(req.session.user)
//         //             res.redirect('/')
//         //         }
//         //     })
//         // todo pass userID to views folder
//         // todo 
//     }
//     // console.log(favDishArray)
//     // module.exports(favDishArraySession)
//     localStorage.setItem('favoriteDishes', favDishArraySession)
// })

