const cat = require('../model/categoriaModel');


//-------------------------------------------------------------------------------------------------------------

const verCategorias = async (req, res) => {
    try {
        const result = await cat.getAllCategorias();
        return res.status(200).json(result);
    } catch (error) {
        console.error('Error al obtener artículos:', error.message);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

//-------------------------------------------------------------------------------------------------------------

const verCategoriaPorId = async (req, res) => {
    try {
        const { id_categoria } = req.params; 
        const result = await cat.getCategoriaId(id_categoria); 

        if (result.length === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        return res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error al obtener categoría:', error.message);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

//-------------------------------------------------------------------------------------------------------------

const verCategoriaPorNombre = async(req, res) => {
    try{
        const { nombre } = req.params;
        const result = await cat.getCategoriaNombre(nombre);
        return res.status(200).json(result);

    }catch (error){
        console.error('Error al obtener categoria:', error.message);
        return res.status(500).json({message:'Erroe del servidor'});
    }
};

//-------------------------------------------------------------------------------------------------------------

const nuevaCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        if (!nombre || !descripcion) {
            return res.status(400).json({ message: 'Nombre y descripción son obligatorios' });
        }

        const result = await cat.newCategoria(nombre, descripcion);

        return res.status(201).json({
            message: 'Categoría creada correctamente',
            id: result.insertId
        });
    } catch (error) {
        console.error('Error al crear la categoría:', error.message);
        return res.status(500).json({ message: 'Error del servidor' });
    }
}; 
//-------------------------------------------------------------------------------------------------------------

const borrarCategoria = async(req,res) => {
    try{
        const { nombre } = req.body;
        if (!nombre){
           return res.status(400).json({message:'Nombre obligatorio'});
        }

        const result = await cat.deleteCategoria(nombre);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        return res.status(200).json({ message: 'Categoría borrada correctamente' });

    }catch (error) {
        console.error('Error al borrar la categoria', error.message);
        return res.status(500).json({message:'Error del servidor'});
    }

};

//-------------------------------------------------------------------------------------------------------------

const modificarCategoria = async (req, res) => {
    try {
        const { id_categoria, nombre, descripcion } = req.body;

        if (!id_categoria || !nombre || !descripcion) {
            return res.status(400).json({ message: 'Faltan datos requeridos' });
        }

        const result = await cat.modifCategoriaId(id_categoria, nombre, descripcion);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        return res.status(200).json({ message: 'Categoría actualizada correctamente' });
    } catch (error) {
        console.error('Error al modificar la categoría:', error.message);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};
 

//-------------------------------------------------------------------------------------------------------------

module.exports = {
    verCategorias,
    verCategoriaPorId,
    verCategoriaPorNombre,
    nuevaCategoria,
    borrarCategoria,
    modificarCategoria
};