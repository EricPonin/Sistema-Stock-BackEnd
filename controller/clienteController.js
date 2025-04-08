const cli = require ('../model/clienteModel');

//-------------------------------------------------------------------------------------------------------------

const verCLientes = async(req,res) => {
    try{
         const result = await cli.getClientes();
         if(result.length === 0){
            return res.status(404).json({message:'No hay Datos cargados'});
        }
         return res.status(200).json(result);
    }
    catch(error){
        console.error('Error al obtener clientes', error.message);
        return res.status(500).json({message: 'Error del servidor'});
    };
};

//-------------------------------------------------------------------------------------------------------------

const verClientePorId = async(req,res) => {
    try{
        const {id_cliente} = req.params;
        if(!id_cliente){
            return res.status(404).json({message:'El parametro ID es obligatorio'});
        }
        const result = await cli.getClientePorId(id_cliente);
        if(result.length === 0){
            return res.status(404).json({message:'Cliente no encontrado'});
        }
        return res.status(200).json(result);
    }
    catch (error){
        console.error('Error al obtener Cliente', error.message);
        return res.status(500).json({message:'Error del servidor'});
    };

};

//-------------------------------------------------------------------------------------------------------------

const nuevoCliente = async(req,res) => {
    try{
        const {nombre, dni, direccion, telefono, email} = req.body;
        if(!nombre || !dni || !direccion || !telefono || !email){
            return res.status(404).json({message:'Los campos nombre, dni, direccion, telefono, email son obligatorios'});
        }
        const result = await cli.newCliente(nombre, dni, direccion, telefono, email);
        return res.status(200).json(
            {message:'Cliente creado correctamente',
            id: result.insertId
        });
    }
    catch (error){
        console.error('Error al crear el cliente', error.message);
        return res.status(500).json({message:'Error del servidor'});
    };

};

//-------------------------------------------------------------------------------------------------------------

const modificarCliente = async(req,res) => {
    try{
        const {id_cliente, nombre, dni, direccion, telefono, email} = req.body;
        if(!id_cliente || !nombre || !dni || !direccion || !telefono || !email){
            return res.status(404).json({message:'Los campos id_cliente, nombre, dni, direccion, telefono, email son obligatorios'});
        }
        const result = await cli.modifCliente(id_cliente,nombre,dni,direccion,telefono,email);
        return res.status(200).json(
            {message:'Cliente Modificado'
        });

    }
    catch (error){
        console.error('Error al modificar el cliente', error.message);
        return res.status(500).json({message:'Error del servidor'});
    };

};

//-------------------------------------------------------------------------------------------------------------

const borrarCliente = async(req,res) => {
    try{
        const {nombre, dni} = req.body;
        
        if(!nombre || !dni){
            return res.status(400).json({message:'El Nombre y el DNI es obligatorio'});
        }
        const result = await cli.deleteCliente(nombre,dni);

        if (result.affectedRows === 0){
            return res.status(404).json({message:'Cliente no encontrado'});
        }
        return res.status(200).json({message:'Cliente eliminado correctamente'});
    }
    catch (error){
        console.error('Error al intentar borrar el Cliente', error.message);
        return res.status(500).json({message:'Error del servidor'});
    };

};

//-------------------------------------------------------------------------------------------------------------



module.exports = {
    verCLientes,
    verClientePorId,
    nuevoCliente,
    modificarCliente,
    borrarCliente
};