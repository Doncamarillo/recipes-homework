const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Type= new Schema (
    {
        name: {type: String, required: true},
        countryOfOrigin: {type: String, required: true},
        stapleIngredients: {type: Array, required: true},
        popularDishes:{type: Array, required:true},
        recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }] 
        
    },
    {timestamps: true},
)
module.exports = mongoose.model ('types', Type)