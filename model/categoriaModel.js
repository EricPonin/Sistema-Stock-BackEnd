const db = require('../config/db');

const getAllCategorias = async () => {
    const [rows] = await db.query('SELECT * FROM categorias');
    return rows;
};

const getCategoriaId = async (id) =>{
    const [rows] = await db.query('SELECT * FROM categorias where id_categoria = ?',[id]);
    return rows;
};

const getCategoriaNombre = async(nom) => {
    const [rows] = await db.query('SELECT * FROM categorias WHERE nombre = ?', [nom]);
    return rows;
}

module.exports = {
    getAllCategorias,
    getCategoriaId,
    getCategoriaNombre
};