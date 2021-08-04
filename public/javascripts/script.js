function renderDishesExternal(dishesArray) {
    let dishesHtmlArray = dishesArray.map((dish) => {
        return `
        <div class="col-auto mb-3 one-card float-md-start">
            <div class="card h-100" style="width: 18rem;">
            <img src="${dish.image}" class="card-img-top">
            <div class="card-body position-relative">
                <h5 class="card-title">${dish.title}</h5>
                <div class="options bottom-0 start-50 translate-middle-x">
                <a href="/recipes" id="recipeButton" class="btn btn-primary btn-sm" data-recipeid="${dish.id}">Recipe</a>
                <form method='post' action='/dishes/add-dish'>
                    <input type='hidden' value='${dish.id}' name='apiDishId'>
                    <input type='hidden' value='${dish.title}' name='name'>
                    <button type='submit' class="btn btn-primary btn-sm">Add to Favorite</button>
                </form>
                </div>
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
    const searchInputHTML = encodeURIComponent(searchBar.value)
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=a4b35713784748878ce5b11f4c4293dd&ingredients=` + searchInputHTML)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)
            resultsBox.innerHTML = renderDishesExternal(data)
        })

})

// event listener to store clicked recipe id into local storage
document.addEventListener('click', (event) => {
    if (event.target.id == 'recipeButton') {
        //recipe id
        let clickedRecipeJSON = localStorage.getItem('clickedRecipe');
        let clickedRecipe = JSON.parse(clickedRecipeJSON);
        if (clickedRecipe == null) {
            clickedRecipe = []
        }
        clickedRecipe.splice(0, 1, event.target.dataset.recipeid)
        clickedRecipeJSON = JSON.stringify(clickedRecipe)
        localStorage.setItem('clickedRecipe', clickedRecipeJSON)
        // recipe name
        // let clickedNameJSON = localStorage.getItem('clickedName');
        // let clickedName = JSON.parse(clickedNameJSON);
        // if (clickedName == null) {
        //     clickedName = []
        // }
        // clickedName.splice(0, 1, event.target.dataset.name)
        // clickedNameJSON = JSON.stringify(clickedName)
        // localStorage.setItem('clickedName', clickedNameJSON)
        // // recipe image
        // let clickedImageJSON = localStorage.getItem('clickedImage');
        // let clickedImage = JSON.parse(clickedImageJSON);
        // if (clickedImage == null) {
        //     clickedImage = []
        // }
        // clickedImage.splice(0, 1, event.target.dataset.img)
        // clickedImageJSON = JSON.stringify(clickedImage)
        // localStorage.setItem('clickedImage', clickedImageJSON)
    }
})
