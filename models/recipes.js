const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Recipe = new Schema (
    {
        name: {type: String,required: true},
        ingredients:{type: String, required: false},
        methodOfCooking: { type: String, required: true},
        difficulty: {type: String, required: true},
        type: { type: Schema.Types.ObjectId, ref: 'Type' },  
    },
    {timestamps: true},
)

module.exports = mongoose.model ('recipes', Recipe)