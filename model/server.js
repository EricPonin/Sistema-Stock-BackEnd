const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.middleware();// Middlewares
        this.routers(); // Rutas
    }

    middleware() {
        this.app.use(cors());// Habilitar CORS
        this.app.use(express.json());// Middleware para parsear JSON en body
        // Middleware para loguear todas las peticiones (opcional y útil para debugging)
        this.app.use((req, res, next) => {
            console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
            next();
        });        
        // Servir archivos estáticos desde /public
        this.app.use(express.static('public'));
    }

    routers() {
        this.app.use('/stock/', require('../routes/routes'));
        // Manejar rutas no encontradas
        this.app.all('*', (req, res) => {
            res.status(404).json({
                message: '404 Page Not Found',
                url: req.originalUrl
            }); 
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App escuchando en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;
