const db = require('../config/db');

//-------------------------------------------------------------------------------------------------------------

const getAllCategorias = async () => {
    const [response] = await db.query('SELECT * FROM categorias');
    return response;
};

//-------------------------------------------------------------------------------------------------------------

const getCategoriaId = async (id) =>{
    const [response] = await db.query('SELECT * FROM categorias where id_categoria = ?',[id]);
    return response;
};

//-------------------------------------------------------------------------------------------------------------

const getCategoriaNombre = async(nom) => {
    const [response] = await db.query('SELECT * FROM categorias WHERE nombre = ?', [nom]);
    return response;
}
//-------------------------------------------------------------------------------------------------------------

const newCategoria = async (nom,des) => {
    const [response] = await db.query('INSERT INTO categorias(nombre, descripcion) VALUES (?,?)', [nom,des]);
    return response;
}

//-------------------------------------------------------------------------------------------------------------

const deleteCategoria = async(nom) =>{
    const [response] = await db.query('DELETE FROM categorias where nombre = ?', [nom]);
    return response;
}

//-------------------------------------------------------------------------------------------------------------

const modifCategoriaId = async (id, nom, des) => {
    const [response] = await db.query(
        'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id_categoria = ?',
        [nom, des, id]
    );
    return response;
};

//-------------------------------------------------------------------------------------------------------------

module.exports = {
    getAllCategorias,
    getCategoriaId,
    getCategoriaNombre,
    newCategoria,
    deleteCategoria,
    modifCategoriaId
};