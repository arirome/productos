const { model, Schema } = require('mongoose');

const cateSchema = new Schema({
    categoria: {
        type: String
    }
})

module.exports = model('categoria', cateSchema)