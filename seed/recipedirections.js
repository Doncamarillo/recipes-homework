const db = require('../db')
const Type = require('../models/type')
const Direction = require('../models/directions')
const Recipe = require('../models/recipes')

db.on('error', console.error.bind(console, 'MongoDb connection error:'))

const main = async () => {
    const types = await Type.insertMany([
        {
            name: "Italian",
            countryOfOrigin: "Italy",
            stapleIngredients: ["Pasta", "Tomato", "Olive Oil", "Basil"],
            popularDishes: ["Pizza", "Risotto", "Lasagna"]
        },
        {
            name: "Mexican",
            countryOfOrigin: "Mexico",
            stapleIngredients: ["Corn", "Beans", "Chili"],
            popularDishes: ["Tacos", "Burritos", "Enchiladas"]
        },
        {
            name: "Japanese",
            countryOfOrigin: "Japan",
            stapleIngredients: ["Rice", "Fish", "Seaweed"],
            popularDishes: ["Sushi", "Ramen", "Tempura"]
        }
    ])

    const recipes = await Recipe.insertMany([
        {
            name: "Pizza Margherita",
            ingredients: ["Flour", "Tomato Sauce", "Mozzarella", "Basil", "Olive Oil"],
            methodOfCooking: "Baking",
            difficulty: "Medium",
            type: types[0]._id  
        },
        {
            name: "Beef Burrito",
            ingredients: ["Tortilla", "Beef", "Beans", "Cheese", "Sour Cream"],
            methodOfCooking: "Grilling",
            difficulty: "Easy",
            type: types[1]._id  
        },
        {
            name: "Sushi Roll",
            ingredients: ["Rice", "Nori", "Fish", "Cucumber", "Soy Sauce"],
            methodOfCooking: "Rolling",
            difficulty: "Hard",
            type: types[2]._id  
        }
    ])

    const directions = await Direction.insertMany([
        {
            recipeName: "Pizza Margherita",
            timeNeededinHours: 1.5,
            appliancesNeeded: ["Oven"],
            utensilsNeeded: ["Rolling Pin", "Baking Tray"],
            recipe: recipes[0]._id  
        },
        {
            recipeName: "Beef Burrito",
            timeNeededinHours: 0.5,
            appliancesNeeded: ["Grill"],
            utensilsNeeded: ["Tongs", "Spatula"],
            recipe: recipes[1]._id 
        },
        {
            recipeName: "Sushi Roll",
            timeNeededinHours: 2,
            appliancesNeeded: ["Rice Cooker"],
            utensilsNeeded: ["Bamboo Mat", "Knife"],
            recipe: recipes[2]._id 
        }
    ])

    console.log('Data successfully seeded!')
}

const run = async () => {
    try {
        await main()
    } catch (error) {
        console.error('Error during seeding:', error)
    } finally {
        db.close()
    }
}

run()
