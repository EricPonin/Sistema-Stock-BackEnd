const cat = require('../model/categoriaModel');


const verCategorias = async (req, res) => {
    try {
        const categorias = await cat.getAllCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        console.error('Error al obtener artículos:', error.message);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

module.exports = {
    verCategorias
};