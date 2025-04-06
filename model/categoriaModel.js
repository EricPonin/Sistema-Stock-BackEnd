const db = require('../config/db');

//-------------------------------------------------------------------------------------------------------------

const getAllCategorias = async () => {
    const [result] = await db.query('SELECT * FROM categorias');
    return result;
};

//-------------------------------------------------------------------------------------------------------------

const getCategoriaId = async (id) =>{
    const [result] = await db.query('SELECT * FROM categorias where id_categoria = ?',[id]);
    return result;
};

//-------------------------------------------------------------------------------------------------------------

const getCategoriaNombre = async(nom) => {
    const [result] = await db.query('SELECT * FROM categorias WHERE nombre = ?', [nom]);
    return result;
}
//-------------------------------------------------------------------------------------------------------------

const newCategoria = async (nom,des) => {
    const [result] = await db.query('INSERT INTO categorias(nombre, descripcion) VALUES (?,?)', [nom,des]);
    return result;
}

//-------------------------------------------------------------------------------------------------------------

const deleteCategoria = async(nom) =>{
    const [result] = await db.query('DELETE FROM categorias WHERE nombre = ?', [nom]);
    return result;
}

//-------------------------------------------------------------------------------------------------------------

const modifCategoriaId = async (id, nom, des) => {
    const [result] = await db.query(
        'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id_categoria = ?',
        [nom, des, id]
    );
    return result;
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