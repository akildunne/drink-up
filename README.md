# Project Overview

## Project Name

Drink Up

## Project Description

Drink Up is an app that provides cocktail ingredients and recipes for anyone wanting to get creative with their mixing abilities. You can select a spirit of your choice to view cocktail options. A list of ingredients and recipe are provided as well as a picture to help the user visualize the final outcome.

## API and Data Sample

This app will be using https://www.thecocktaildb.com/api.php . The API in Cocktail DP will be https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name} 
The first snippet is from when I typed in Vodka. The next snippet is when a cocktail is selected, the specific cocktail API will be chosen https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id} . The second snippet is of the cocktail ID. 

Sample JSON:
```json
{
    "drinks": [
        {
            "strDrink": "'57 Chevy with a White License Plate",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
            "idDrink": "14029"
        },
        {
            "strDrink": "155 Belmont",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
            "idDrink": "15346"
        },
        {
            "strDrink": "501 Blue",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg",
            "idDrink": "17105"
        }

{
    "drinks": [
        {
            "idDrink": "15346",
            "strDrink": "155 Belmont",
            "strDrinkAlternate": null,
            "strDrinkES": null,
            "strDrinkDE": null,
            "strDrinkFR": null,
            "strDrinkZH-HANS": null,
            "strDrinkZH-HANT": null,
            "strTags": null,
            "strVideo": null,
            "strCategory": "Cocktail",
            "strIBA": null,
            "strAlcoholic": "Alcoholic",
            "strGlass": "White wine glass",
            "strInstructions": "Blend with ice. Serve in a wine glass. Garnish with carrot.",
            "strInstructionsES": null,
            "strInstructionsDE": "Mit Eis vermischen. In einem Weinglas servieren. Mit Karotte garnieren.",
            "strInstructionsFR": null,
            "strInstructionsZH-HANS": null,
            "strInstructionsZH-HANT": null,
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
            "strIngredient1": "Dark rum",
            "strIngredient2": "Light rum",
            "strIngredient3": "Vodka",
            "strIngredient4": "Orange juice",
            "strIngredient5": null,
            "strIngredient6": null,
            "strIngredient7": null,
            "strIngredient8": null,
            "strIngredient9": null,
            "strIngredient10": null,
            "strIngredient11": null,
            "strIngredient12": null,
            "strIngredient13": null,
            "strIngredient14": null,
            "strIngredient15": null,
            "strMeasure1": "1 shot ",
            "strMeasure2": "2 shots ",
            "strMeasure3": "1 shot ",
            "strMeasure4": "1 shot ",
            "strMeasure5": null,
            "strMeasure6": null,
            "strMeasure7": null,
            "strMeasure8": null,
            "strMeasure9": null,
            "strMeasure10": null,
            "strMeasure11": null,
            "strMeasure12": null,
            "strMeasure13": null,
            "strMeasure14": null,
            "strMeasure15": null,
            "strCreativeCommonsConfirmed": "No",
            "dateModified": "2016-10-05 12:36:28"
        }
    ]
}
```

## Wireframes

Mobile Version: 
https://imgur.com/7S9BRuy
https://imgur.com/wbuWMiI
https://imgur.com/ErnStkk
https://imgur.com/hh5ZP5D

Tablet Version:
https://imgur.com/eXEj3w

### MVP/PostMVP

#### MVP 

- Use CocktailDB api 
- Provide dropdown list of liquor for user to choose
- Render cocktail names recipe and image on page 

#### PostMVP  

- Choose cocktail by name/image and have cocktail pop up on new page
- Add random cocktail end point at home page
- Add a search text box for the user to enter cocktail names directly
- Add back button and home button
- Add icons for polished look

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 17| Project Approval, Start HTML | Complete
|August 18| Core Application Structure (HTML, CSS, etc.) | Complete
|August 19| Initial Clickable Model  | Complete
|August 20| MVP | Complete
|August 21| Presentations | Incomplete

## Priority Matrix

https://imgur.com/QEDB0C7

## Timeframes

I anticipate neededing quite a bit of time for each feature. My goal is to focus on the HTML and CSS first and complete as quickly as possible so I can then focus my time on the functionality of the app. I will try to save time where I can to devote the majority to JS. If I am able to complete my MVP on Thursday as planned, I will then go back and update CSS as much as possible.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Set-up | H | 3.5hrs| 6hrs | 5hrs |
| CSS Set-up | H | 4hrs | 8hrs | 8hrs |
| Flex Box Layout | M | 6hrs | 3hrs | 3hrs | 
| Drop-down Link API | H | 8hrs | 8hrs | 3hrs |
| Search Button | M | 3hrs | 3hrs | 1hrs |
| Image API | H | 6hrs | 2hrs | 2hrs |
| Drink API | H | 4hrs | 3hrs | 3hrs |
| Adjusting Layout & API Results | L | 8hrs| 9hrs | 9hrs |
| Total | H | 42.5hrs| 42hrs | 34hrs |

## Code Snippet

In order to filter through the ingredients and measurements, the for loop below had to exclude the item values of null as there were place holders for up to 15 ingredients and measurements that most of the drinks did not need. 

```
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
```

## Change Log
 - Changed picture boarder to work with different photo styles

