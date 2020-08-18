// `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
// `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

// Mick helped me with this part 
let liquorSelect = document.querySelector('.liquor-select')
let liquorName = document.createElement('option')
let results = document.querySelector('.results')
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

// Followed Thursday's lesson 
const getLiquor = async (name) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
  try {
    const response = await axios.get(url)
    // console.log(response.data.drinks)
    response.data.drinks.forEach((drink) => {
      console.log(drink)
      let drinkResultWrapper = document.createElement('div')
      drinkResultWrapper.className = 'drink-result-wrapper'
      drinkResultWrapper.append(drink.strDrink)
      let img = document.createElement('img')
      img.src = drink.strDrinkThumb
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
})


async function getLiquorDetails(id) {
  // console.log('test', id)
  const idUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  try {
    const response = await axios.get(idUrl)
    let id = drink.idDrink
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

drinkResultWrapper.addEventListener('click', () => {
  getLiquorDetails(drinkResultWrapper.value)
})
