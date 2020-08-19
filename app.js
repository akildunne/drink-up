// `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
// `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

// Mick helped me with this part 
let liquorSelect = document.querySelector('.liquor-select')
let liquorName = document.createElement('option')
let results = document.querySelector('.results')
let drinkDetails = document.querySelector('.drink-details')
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

// let button = document.createElement('button')
// button.innerHTML = getLiquor()

// Mick helped with this also
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
  // console.log(drinkDetails)
  results.innerHTML= ''
  // console.log('test', id)
  const idUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  try {
    const response = await axios.get(idUrl)
    console.log(response.data.drinks)
    let h2 = document.createElement('h2')
    h2.textContent = response.data.drinks[0].strDrink
    drinkDetails.append(h2)
    let img = document.createElement('img')
    img.src = response.data.drinks[0].strDrinkThumb
    drinkDetails.append(img)
    let data = response.data.drinks[0]
    for (i in data) {
      if (i.substring(0, 6) === 'strIng') {
        if (data[i] !== null) {
          let p = document.createElement('p')
          p.classList.add('.ingredients')
          p.textContent = data[i]
          drinkDetails.append(p)
        }
      }
    }
    for (i in data) {
      if (i.substring(0,6) === 'strMea') {
        if (data[i] !== null) {
          let p = document.createElement('p')
          p.classList.add('.measurements')
          p.textContent = data[i]
          drinkDetails.append(p)
        }
      }
    
    }
    let p = document.createElement('p')
    p.classList.add('.instructions')
    p.textContent = response.data.drinks[0].strInstructions
    drinkDetails.append(p)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}


