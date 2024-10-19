const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Direction = new Schema (
    {
        timeNeededinHours: {type: Number, required: true},
        appliancesNeeded:{type: String, required: true},
        utensilsNeeded:{type: Array, required:true},
        recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' } 

    },
    {timestamps: true}
)

module.exports = mongoose.model ('directions', Direction)