const db = require('../config/db');

//-------------------------------------------------------------------------------------------------------------
const getClientes = async() => {
    const [result] = await db.query('SELECT * FROM clientes');
    return result;
};

//-------------------------------------------------------------------------------------------------------------

const getClientePorId = async(id) => {
    const [result] = await db.query('SELECT * FROM clientes WHERE id_cliente = ?', [id]);
    return result;
};

//-------------------------------------------------------------------------------------------------------------

const newCliente = async(nom,dni,dir,tel,email) => {
    const [result] = await db.query(
        'INSERT INTO clientes (nombre, dni, direccion,telefono,email) VALUES(?,?,?,?,?)',
        [nom,dni,dir,tel,email]);
    return result;
};

//-------------------------------------------------------------------------------------------------------------

const modifCliente = async(id,nom,dni,dir,tel,email) =>{
    const[result] = await db.query(
        'UPDATE clientes SET nombre = ?, dni = ?, direccion = ?, telefono = ?, email = ? WHERE id_cliente = ?',
         [nom,dni,dir,tel,email,id]);
    return result;
};
//-------------------------------------------------------------------------------------------------------------

const deleteCliente = async(nom,dni) => {
    const [result] = await db.query('DELETE FROM clientes WHERE nombre = ? AND dni = ?',[nom,dni]);
    return result;
};

//-------------------------------------------------------------------------------------------------------------


module.exports = {
    getClientes,
    getClientePorId,
    newCliente,
    deleteCliente,
    modifCliente
};