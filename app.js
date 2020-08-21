// `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
// `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

// Mick helped me with this part 
let liquorSelect = document.querySelector('.liquor-select')
let liquorName = document.createElement('option')
let results = document.querySelector('.results')
let drinkDetails = document.querySelector('.drink-details')

// Create drop-down menue with liquor selections
liquorName.value = ''
liquorName.innerHTML = 'Pick Your Poison'
liquorSelect.append(liquorName)
const liquor = ['Bourbon', 'Gin', 'Mezcal', 'Rum', 'Scotch', 'Tequila', 'Vodka', 'Whiskey']
liquor.forEach((name) => {
  let liquorName = document.createElement('option')
  liquorName.value = name
  liquorName.innerHTML = name
  liquorSelect.append(liquorName)
})
//

// Mick helped with this also
// This function links the alcohol selected and supplies all drinks with that liquor form the API
const getLiquor = async (name) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
  try {
    const response = await axios.get(url)
    // console.log(response.data.drinks)
    response.data.drinks.forEach((drink) => {
      // console.log(drink)
      let drinkResultWrapper = document.createElement('div')
      drinkResultWrapper.className = 'drink-result-wrapper'
      let h2 = document.createElement('h2')
      h2.textContent = drink.strDrink
      drinkResultWrapper.append(h2)
      let img = document.createElement('img')
      img.src = drink.strDrinkThumb
      img.className = 'drink-thumb'
      drinkResultWrapper.append(img)
      results.append(drinkResultWrapper)
      drinkResultWrapper.addEventListener('click', () => {
        getLiquorDetails(drink.idDrink)
      })
    })
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

liquorSelect.addEventListener('change', () => {
  getLiquor(liquorSelect.value) 
  let drinkImage = document.querySelector('.drink-image')
  drinkImage.style.display = 'none'
  liquorSelect.style.display = 'none'
})

// Once the drink is clicked, the function below shows that specific drink's details from another end point.
async function getLiquorDetails(id) {
  results.innerHTML= ''
  const idUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  try {
    const response = await axios.get(idUrl)
    console.log(response.data.drinks)
    let h2 = document.createElement('h2')
    h2.textContent = response.data.drinks[0].strDrink
    drinkDetails.append(h2)
    let img = document.createElement('img')
    img.src = response.data.drinks[0].strDrinkThumb
    img.className = 'drink-thumb'
    drinkDetails.append(img)
    // This is to cycle through the string items that are labeled ingredients or measurements and only takes the items that have actual data. 
    let data = response.data.drinks[0]
    let ingMeaWrapper = document.createElement('div')
    ingMeaWrapper.className = 'ing-mea-wrapper'
    drinkDetails.append(ingMeaWrapper)

    let measurementDiv = document.createElement('div')
    measurementDiv.className = 'measurements-list'
    ingMeaWrapper.append(measurementDiv)

    let ingredientDiv = document.createElement('div')
    ingredientDiv.className = 'ingredients-list'
    ingMeaWrapper.append(ingredientDiv)

    for (i in data) {
      if (i.substring(0,6) === 'strMea') {
        if (data[i] !== null) {
          let p = document.createElement('p')
          p.classList.add('measurements')
          p.textContent = data[i]
          measurementDiv.append(p)
        }
      }
    
    }
    
    for (i in data) {
      if (i.substring(0, 6) === 'strIng') {
        if (data[i] !== null) {
          let p = document.createElement('p')
          p.classList.add('ingredients')
          p.textContent = data[i]
          ingredientDiv.append(p)
        }
      }
    }

    let p = document.createElement('p')
    p.classList.add('instructions')
    p.textContent = response.data.drinks[0].strInstructions
    drinkDetails.append(p)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}


