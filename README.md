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

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Use CocktailDB api 
- Provide dropdown list of liquor for user to choose
- Render cocktail names recipe and image on page 

#### PostMVP  

- Add second API for drink ID
- Choose cocktail by name/image and have cocktail pop up on new page
- Add random cocktail API at home page

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 17| Project Approval | Incomplete
|August 18| Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 19| Initial Clickable Model  | Incomplete
|August 20| MVP | Incomplete
|August 21| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 
