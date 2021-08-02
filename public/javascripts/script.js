function renderDishesExternal(dishesArray) {
    let dishesHtmlArray = dishesArray.map((dish) => {
        return `
        <div class="col-auto mb-3">
            <div class="card h-100" style="width: 18rem;">
            <img src="${dish.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${dish.title}</h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <form method="POST" action="/favorite/${dish.id}">
                <button type="submit" class="btn btn-primary favorite-button" data-dishID="${dish.id}">Favorite</button>
                </form>
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
            // console.log(data)
            resultsBox.innerHTML = renderDishesExternal(data)
        })

})
