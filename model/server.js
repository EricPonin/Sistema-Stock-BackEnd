const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.middleware();
        this.routers(); 
    }

    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
            next();
        });        
        this.app.use(express.static('public'));
    }

    routers() {
        this.app.use('/stock/', require('../routes/routes'));
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
