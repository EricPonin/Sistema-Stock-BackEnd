const usr = require('../model/usuarioModel');


//-------------------------------------------------------------------------------------------------------------
const verUsuarios = async(req,res) =>{
    try{
        const result = await usr.getUsuarios();
        return res.status(200).json(result);
    }catch (error){
        console.error('Error al obtener Usuarios:', error.message);
        return res.status(500).json({message:'Erroe del servidor'});
    };
};

//-------------------------------------------------------------------------------------------------------------

const verUsuarioPorId = async(req,res) => {
    try{
        const {id_usuario} = req.params;
        const result = await usr.getUsuariosId(id_usuario);

        if(!id_usuario){
            return res.status(404).json({message:'Id de usuario es obligatorio'});
        }
        if(result.length ===0){
            return res.status(404).json({message:'Usuario no encontrado'});
        }
        return res.status(200).json(result);

    }
    catch (error){
        console.error('Error al obtener usuario:', error.message);
        return res.status(500).json({message:'Error del servidor'});
    };
};
//-------------------------------------------------------------------------------------------------------------

const nuevoUsuario = async(req,res) =>{
    try{
    const {nombre, email, pass} = req.body;

    if (!nombre || !email || !pass) {
        return res.status(404).json({message:'Los campos nombre, email y pass son obligatorios'});
    };

    const result = await usr.newUsuario(nombre,email,pass);
    return res.status(201).json({
        message: 'Usuario creado correctamente',
        id: result.insertId
    });
    
    }
    catch (error){
        console.error('Error al intentar crear el usuario:', error.message);
        return res.status(500).json({message:'Error del servidor'});
    };
};

//-------------------------------------------------------------------------------------------------------------
const borrarUsuario = async(req,res) => {
    try{
        const {nombre, pass} = req.body;
        
        if(!nombre || !pass){
            return res.status(400).json({message:'Los campos nombre y contrasenia son obligatorios'});
        }

        const result = await usr.deleteUsuario(nombre,pass);

        if (result.affectedRows === 0){
            return res.status(404).json({message:'Usuario o contraseña Incorrecta'});
        }

        return res.status(200).json({message:'Usuario eliminado correctamente'});
    }
    catch (error){
        console.error('Error al intentar borrar el usuario', error.message);
        return res.status(500).json({message:'Error del servidor'});
    };

};

//-------------------------------------------------------------------------------------------------------------

const modifUsuario = async (req,res) =>{
    try{
        const {id_usuario, nombre, email, pass} = req.body;

        if(!id_usuario || !nombre || ! email || !pass){
            return res.status(400).json({message:'Lo campos id_usuario, nombre, email y pass son obligatorios'});
        };
        
        const result = await usr.modificarUsuario(id_usuario, nombre, email, pass);
        
        if(result.affectedRows ===0){
            return res.status(404).json({message:'La modificacion del usuario no pudo realizarse'});
        };

        return res.status(200).json({message:'Usuario modificado'});

    }
    catch (error){
        console.error('La modificacion del usuario no pudo realizarse', error.message);
        return res.status(500).json({message:'Error del servidor'});
    };

};

//-------------------------------------------------------------------------------------------------------------



module.exports ={
    verUsuarios,
    verUsuarioPorId,
    nuevoUsuario,
    borrarUsuario,
    modifUsuario
};