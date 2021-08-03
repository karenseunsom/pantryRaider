function renderDishesExternal(dishesArray) {
    let dishesHtmlArray = dishesArray.map((dish) => {
        return `
        <div class="col-auto mb-3">
            <div class="card h-100" style="width: 18rem;">
            <img src="${dish.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${dish.title}</h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <form method='post' action='/favorites/:id'>
                    <input type='hidden' value='${dish.id}' name='DishId'>
                    
                    <button type='submit'>Add to Favorite</button>
                </form>
                <button class="btn btn-primary favorite-button" data-dishID="${dish.id}">Favorite</button>
            </div>
            </div>
        </div>`;
    });
    // <form method="POST" action="/favorite/${dish.id}">
    // console.log(dishesArray)
    return dishesHtmlArray.join("");
}

const searchBar = document.getElementById("search-bar-ingredients");
const searchForm = document.getElementById("search-form");
// const favBtn = document.getElementsByClassName('favorite-button')
let resultsBox = document.getElementById("results-box");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchInputHTML = encodeURIComponent(searchBar.value);
    fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=a4b35713784748878ce5b11f4c4293dd&ingredients=` +
        searchInputHTML
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            resultsBox.innerHTML = renderDishesExternal(data);
            // adds event listener for all favorite buttons
            document.querySelectorAll(".favorite-button").forEach(function (element) {
                element.addEventListener("click", function (e) {
                    e.preventDefault()
                    // * fetch w/ POST method
                    const dishId = e.target.dataset.dishid;
                    // console.log(dishId)
                    fetch(
                        `https://api.spoonacular.com/recipes/${dishId}/information?apiKey=a4b35713784748878ce5b11f4c4293dd`
                        // {
                        //     method: "post",
                        //     headers: {
                        //         "Accept": "application/json",
                        //         "Content-Type": "application/json",
                        //     },
                        //     //make sure to serialize your JSON body
                        //     body: JSON.stringify({
                        //         dishId: dishId,
                        //         userId: req.session.user.id
                        //     }),
                        // }
                    ).then((response) => {
                        //do something awesome that makes the world a better place
                        // console.log(response)
                        return response.json()
                    }) 
                    .then((data) => {
                        console.log(data)
                    });

                    // * get userId from sessions
                    // * get dishId from data-dishId on button
                    // * db Create Favorite with both ID's
                });
            });
        });
});

// console.log("loaded script.js");
