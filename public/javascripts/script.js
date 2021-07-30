
let resultsBox = document.getElementById('results-box');
fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=a4b35713784748878ce5b11f4c4293dd&ingredients=apples`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        resultsBox.innerHTML = renderDishesExternal(data)
    })

function renderDishesExternal(dishesArray) {
    let dishesHtmlArray = dishesArray.map((dish) => {
        return `<div class="card-img-top" style="width: 18rem;">
        <img src="${dish.image}" class="card-img-top">
        <div class="card-body mb-3">
            <h5 class="card-title">${dish.title}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
    })
    return dishesHtmlArray.join('')
}