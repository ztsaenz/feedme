// list of meals and the ingredients
// if you want to add more food copy and paste one line completely and change the values of title and ingredients
// the values need to be typed between ' ' and on ingredients type out 'category / how much you want' and each ingredient is separated by a comma
const foods = [
    {title: 'chicken enchilada pasta', ingredients:['chicken / 3 breasts','pasta']},
    {title: 'chicken enchilada soup', ingredients:['corn','peppers']},
    {title: 'macaroni and cheese', ingredients:['cheese','mac']},
    {title: 'roast', ingredients:['beef','carrot']},
    {title: 'chili beans', ingredients:['beans']},
    {title: 'navajo tacos', ingredients:['beans']},
    {title: 'german pancakes', ingredients:['sugar']},
    {title: 'tomato and spinach pasta', ingredients:['spinach']},
    {title: 'lasagna', ingredients:['lasagna noodles']},
    {title: 'rosemary red potatoes', ingredients:['red potatoes']},
    {title: 'baked chicken broccoli and potatoes', ingredients:['broccoli']},
    {title: 'scalloped potatoes', ingredients:['potatoes']},
    {title: 'shepherd\'s pie', ingredients:['cheese']},
    {title: 'chile verde', ingredients:['pork']},
    {title: '5 cheese ziti', ingredients:['cheese']},
    {title: 'corn on the cob', ingredients:['corn']},
    {title: 'tacos', ingredients:['tacos']},
    {title: 'hot dogs', ingredients:['buns']},
    {title: 'fancy mashed potatoes', ingredients:['onions']},
    {title: 'sweet and sour chicken', ingredients:['chicken']},
    {title: 'game day potatoes', ingredients:['potatoes']},
    {title: 'bbq chicken sandwiches', ingredients:['bbq sauce']},
    {title: 'stew', ingredients:['pepper']},
    {title: 'chicken lo mein', ingredients:['noodles']},
    {title: 'jambalaya', ingredients:['sausage']},
    {title: 'chicken enchiladas', ingredients:['tortillas']},
    {title: 'fettuccine alfredo', ingredients:['alfredo']},
    {title: 'tuscan garlic fettuccine', ingredients:['garlic']},
    {title: 'carrot stir fry', ingredients:['carrot']},
    {title: 'stromboli sandwiches', ingredients:['stromboli']},
    {title: 'spaghetti with italian sausage', ingredients:['italian sausage']},
    {title: 'bacon wrapped filets', ingredients:['bacon']},
    {title: 'ground pork carnitas', ingredients:['ground pork']},
    {title: 'breakfast burrito', ingredients:['tortillas']},
]
// this picks the meals randomly
function feedMe (howManyMeals){


  const menu = []
  for(let i = 0; i < howManyMeals+1; i++){
    const num = foods.length - 1;
    const index =  Math.floor(Math.random() * num)
    const meal = foods[index]
    menu.push(meal)
  }
  return menu
}
// the number between the parenthesis can be changed depending on how many meals you want to have
const meals = feedMe(7)
//this gets the titles for the meals
const mealTitles = meals.map((meal,i)=>{
  return meal.title
})
// this makes the shopping list
const shoppingList = meals.map((meal,i)=>{
  return meal.ingredients.join(',')
})
// this prints the meal titles below
console.log(mealTitles.sort())
// this prints the shopping list below
console.log(shoppingList.join().split(',').sort())



