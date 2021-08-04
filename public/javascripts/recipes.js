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
const instrList = document.getElementById('instructionsList')
const cookTime = document.getElementById('cookTime')


fetch(`https://api.spoonacular.com/recipes/${clickedRecipe}/information?apiKey=a4b35713784748878ce5b11f4c4293dd`).then(res => {
    return res.json()
}).then(data => {
    // console.log(data)
    recipeImg.setAttribute('src', data.image)
    recipeHeading.innerText = data.title
    recipeSummary.innerHTML = data.summary
    foodTypeString = data.diets.join(', ')
    recipeType.innerText = foodTypeString
    ingList.innerHTML = renderIngredients(data.extendedIngredients)
    if (data.instructions == null) {
        instrList.innerHTML = `
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold"><img id="hatImage"src="https://static.thenounproject.com/png/139676-200.png"></img></div>Please click <a href="${data.sourceUrl}">here</a> for detailed instructions on this recipe!
            </div>
        </li>`
    } else {
    instrList.innerHTML = renderInstructions(data.analyzedInstructions[0].steps)
    }
    cookTime.innerHTML = '<img style="width: 30px; height: 30px;"src="https://icon-library.com/images/small-clock-icon/small-clock-icon-21.jpg">' + `&nbsp${data.readyInMinutes} Minutes`

})



function renderIngredients(ingArray) {
    let ingredientsHtmlArray = ingArray.map((result) => {
        return `<li class="list-group-item">
        ${result.original}
    </li>`
    })
    return ingredientsHtmlArray.join('')
}



function renderInstructions(instructArray) {
    let instructionsHtmlArray = instructArray.map((instruction) => {
        return `
        <li class="list-group-item border border-white d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold"><img id="hatImage"src="https://static.thenounproject.com/png/139676-200.png">Step &nbsp${instruction.number}</div>
                ${instruction.step}
            </div>
        </li>`
    })
    return instructionsHtmlArray.join('')
}

