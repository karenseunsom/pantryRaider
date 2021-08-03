// Recipe ID from local storage
let clickedRecipeJSON = localStorage.getItem('clickedRecipe');
let clickedRecipe = JSON.parse(clickedRecipeJSON);

// Recipe name from local storage
let clickedNameJSON = localStorage.getItem('clickedName');
let clickedName = JSON.parse(clickedNameJSON);

// Recipe image from local storage
let clickedImageJSON = localStorage.getItem('clickedImage');
let clickedImage = JSON.parse(clickedImageJSON);

let recipeName = document.getElementById('heading');
recipeName.innerText = clickedName

let recipeImg = document.getElementById('image');
recipeImg.setAttribute('src', clickedImage)

console.log(clickedImage)




fetch(`https://api.spoonacular.com/recipes/${clickedRecipe}/ingredientWidget.json?apiKey=a4b35713784748878ce5b11f4c4293dd`).then(res => {
    return res.json()
}).then(data => {
    console.log(data)
    const ingList = document.getElementById('ingredientsList')
    ingList.innerHTML = renderIngredients(data.ingredients)
})



function renderIngredients(ingArray) {
    let ingredientsHtmlArray = ingArray.map((ing) => {
        return `<label class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="">
        ${ing.amount.us.value} ${ing.amount.us.unit} ${ing.name}
    </label>`
    })
    return ingredientsHtmlArray.join('')
}