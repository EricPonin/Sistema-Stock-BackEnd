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

const verCategoriaPorId = async (req, res) => {
    try {
        const { id_categoria } = req.params; // Extraer el ID de la URL
        const id = await cat.getCategoriaId(id_categoria); // Pasar el ID a la función

        if (id.length === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        res.status(200).json(id[0]); // Devolver solo la primera coincidencia
    } catch (error) {
        console.error('Error al obtener categoría:', error.message);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

const verCategoriaPorNombre = async(req, res) => {
    try{
        const { nombre } = req.params;
        const nom = await cat.getCategoriaNombre(nombre);
        res.status(200).json(nom);
        
    }catch (error){
        console.error('Error al obtener categoria:', error.message);
        res.status(500).json({message:'Erroe del servidor'});
    }
};

module.exports = {
    verCategorias,
    verCategoriaPorId,
    verCategoriaPorNombre
};