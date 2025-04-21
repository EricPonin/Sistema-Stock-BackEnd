const pro = require('../model/proveedorModel');


//-------------------------------------------------------------------------------------------------------------
const verProveedores = async(req,res) => {
    try{
        const result = await pro.getAllProveedores();
        if(result.length === 0){
            return res.status(404).json({message:'No hay Proveedores cargados'});
        }
        return res.status(200).json(result);
    }
    catch (error){
        console.error('Error al mostrar los proveedores', error.message);
        res.status(500).json({message:'Error del servidor'});
    };
};

//-------------------------------------------------------------------------------------------------------------
const verProveedorPorId = async(req,res) => {
    try{
        const{id_proveedor} = req.params;
        if(!id_proveedor){
            return res.status(404).json({message:'El id del proveedor es obligatorio'});
        }
        const resutl = await pro.getProveedorPorId(id_proveedor);

        if(result.length === 0) {
            return res.status(404).json({message:'No se encontro el Proveedor'});
        }
        return res.status(200).json(resutl);
    }
    catch(error){
        console.error('Error al buscar el proveedor', error.message);
        return res.status(500).json({message:'Error del servidor'});
    };
};
//-------------------------------------------------------------------------------------------------------------
const nuevoProveedor = async(req,res) => {
    try{
        const {nombre, direccion, email, telefono} = req.body;
        if(!nombre || !direccion || !email || !telefono ){
            return res.status(404).json({message:'Los campos nombre, direccion, email y telefono son obligatorios'});
        }
        const result = await pro.newProveedor(nombre, direccion, email, telefono);
        return res.status(200).json(
            {message:'Proveedor creado correctamente',
            id: result.insertId
        });
    }
    catch (error){
        console.error('Error al crear el Proveedor', error.message);
        return res.status(500).json({message:'Error del servidor'});
    };

};

//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------


module.exports = {
    verProveedores,
    verProveedorPorId,
    nuevoProveedor
};