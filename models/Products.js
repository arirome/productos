const { model, Schema } = require('mongoose');

const ProductoSchema = new Schema({

    nombre:{

        type: String,
        required:true
    },

    precio:{

        type:Number,
        required:true
    },

    categoria:{

        type:String,
        required:true
    },





});

module.exports = model('Producto', ProductoSchema);