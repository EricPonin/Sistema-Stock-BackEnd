const db = require('../config/db');

const getAllCategorias = async () => {
    const [rows] = await db.query('SELECT * FROM categoria');
    return rows;
};

module.exports = {
    getAllCategorias
};