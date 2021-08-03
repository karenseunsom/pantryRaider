// Recipe ID from local storage
let clickedRecipeJSON = localStorage.getItem('clickedRecipe');
let clickedRecipe = JSON.parse(clickedRecipeJSON);

// // Recipe name from local storage
// let clickedNameJSON = localStorage.getItem('clickedName');
// let clickedName = JSON.parse(clickedNameJSON);

// // Recipe image from local storage
// let clickedImageJSON = localStorage.getItem('clickedImage');
// let clickedImage = JSON.parse(clickedImageJSON);

// let recipeName = document.getElementById('heading');
// recipeName.innerText = clickedName

// let recipeImg = document.getElementById('image');
// recipeImg.setAttribute('src', clickedImage)

// console.log(clickedImage)

const recipeImg = document.getElementById('image')
const recipeHeading = document.getElementById('heading')
const recipeSummary = document.getElementById('summary')
const recipeType = document.getElementById('type')
const ingList = document.getElementById('ingredientsList')


fetch(`https://api.spoonacular.com/recipes/${clickedRecipe}/information?apiKey=e015566f0b9e4c8cb5307efb74303f10`).then(res => {
    return res.json()
}).then(data => {
    console.log(data)
    recipeImg.setAttribute('src', data.image)
    recipeHeading.innerText = data.title
    recipeSummary.innerHTML = data.summary
    foodTypeString = data.diets.join(', ')
    recipeType.innerText = foodTypeString
    console.log(data.extendedIngredients)
    ingList.innerHTML = renderIngredients(data.extendedIngredients)
})



function renderIngredients(ingArray) {
    let ingredientsHtmlArray = ingArray.map((result) => {
        return `<li class="list-group-item">
        ${result.originalName}
    </li>`
    })
    return ingredientsHtmlArray.join('')
}

