// `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
// `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

const getLiquor = async () => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
}

let liquorSelect = document.querySelector('.liquor-select')
let liquorName = document.createElement('option')
liquorName.value = ''
liquorName.innerHTML = 'Choose your Liquor'
liquorSelect.append(liquorName)
const liquor = ['Bourbon', 'Gin', 'Mezcal', 'Rum', 'Scotch', 'Tequila', 'Vodka', 'Whiskey']
liquor.forEach((name) => {
  let liquorName = document.createElement('option')
  liquorName.value = name
  liquorName.innerHTML = name
  liquorSelect.append(liquorName)
})
