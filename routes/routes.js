const categoriaController = require('../controller/categoriaController');
const usuarioController = require('../controller/usuarioController');
const { Router } = require('express');

const rutas = Router();





// Rutas de Categorías
//------------------------------------------------------------------------------
rutas.get('/categorias', categoriaController.verCategorias);
rutas.get('/categorias/id/:id_categoria', categoriaController.verCategoriaPorId);
rutas.get('/categorias/nombre/:nombre', categoriaController.verCategoriaPorNombre);
rutas.post('/categorias', categoriaController.nuevaCategoria);
rutas.delete('/categorias',categoriaController.borrarCategoria);
rutas.put('/categorias', categoriaController.modificarCategoria);

//------------------------------------------------------------------------------


// Ruta de Artículos
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//Rutas Clientes
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//Rutas Compras
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//Rutas Ventas
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//Rutas Productos
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//Rutas Proveedores
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//Rutas Usuarios
//------------------------------------------------------------------------------
rutas.get('/usuarios', usuarioController.verUsuarios);
rutas.get('/usuarios/id/:id_usuario',usuarioController.verUsuarioPorId);
rutas.post('/usuarios', usuarioController.nuevoUsuario);
rutas.delete('/usuarios', usuarioController.borrarUsuario);
rutas.put('/usuarios', usuarioController.modifUsuario);

//------------------------------------------------------------------------------



module.exports = rutas;
