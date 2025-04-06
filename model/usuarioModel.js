const db = require('../config/db');


//-------------------------------------------------------------------------------------------------------------
const getUsuarios = async() => {
    const [result] = await db.query('SELECT * FROM usuarios');
    return result;

};

//-------------------------------------------------------------------------------------------------------------

const getUsuariosId = async(id) =>{
    const [result] = await db.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id]);
    return result;

};

//-------------------------------------------------------------------------------------------------------------

const newUsuario = async(nom,email,pass) => {
    const [result] = await db.query('INSERT INTO usuarios(nombre, email, pass) VALUES(?,?,?)',[nom,email,pass]);
    return result;

};

//-------------------------------------------------------------------------------------------------------------

const deleteUsuario = async(nom,pass) => {
    const [result] = await db.query('DELETE FROM usuarios WHERE nombre = ? AND pass = ?',[nom,pass]);
    return result;
};

//-------------------------------------------------------------------------------------------------------------

const modificarUsuario = async(id,nom,email,pass) =>{
    const [result] = await db.query(
        'UPDATE usuarios SET nombre = ?, email = ?, pass = ? WHERE id_usuario = ?',
        [nom,email,pass,id]
    );
    return result;
}
//-------------------------------------------------------------------------------------------------------------



module.exports = {
    getUsuarios,
    getUsuariosId,
    newUsuario,
    deleteUsuario,
    modificarUsuario
};