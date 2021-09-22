const Categoria = require('../models/categoria');

const siExistecategoria = async (categoria = '')=> {
    const cateEcontrado = await Categoria.findOne({categoria })

    if(!cateEcontrado){
        throw new Error('la categoria especificado no existe')
    }
}

module.exports = {
    siExistecategoria
}