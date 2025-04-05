const cat = require('../model/categoriaModel');


//-------------------------------------------------------------------------------------------------------------

const verCategorias = async (req, res) => {
    try {
        const categorias = await cat.getAllCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        console.error('Error al obtener artículos:', error.message);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

//-------------------------------------------------------------------------------------------------------------

const verCategoriaPorId = async (req, res) => {
    try {
        const { id_categoria } = req.params; 
        const id = await cat.getCategoriaId(id_categoria); 

        if (id.length === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        res.status(200).json(id[0]);
    } catch (error) {
        console.error('Error al obtener categoría:', error.message);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

//-------------------------------------------------------------------------------------------------------------

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

//-------------------------------------------------------------------------------------------------------------

const nuevaCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        if (!nombre || !descripcion) {
            return res.status(400).json({ message: 'Nombre y descripción son obligatorios' });
        }

        const result = await cat.newCategoria(nombre, descripcion);

        res.status(201).json({
            message: 'Categoría creada correctamente',
            id: result.insertId
        });
    } catch (error) {
        console.error('Error al crear la categoría:', error.message);
        res.status(500).json({ message: 'Error del servidor' });
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

        res.status(201).json({message: 'Categoria Borrada Correctamente'});

    }catch (error) {
        console.error('Error al borrar la categoria', error.message);
        res.status(500).json({message:'Error del servidor'});
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

        res.status(200).json({ message: 'Categoría actualizada correctamente' });
    } catch (error) {
        console.error('Error al modificar la categoría:', error.message);
        res.status(500).json({ message: 'Error del servidor' });
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