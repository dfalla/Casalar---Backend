import express, { Application } from 'express';
import fileUpload from 'express-fileupload'
import cors from 'cors';
import db from '../database/connection';
import userRoutes from '../routes/auth';
import aceitesRoutes from '../routes/aceites';
import llantasRoutes from '../routes/llantas';
import motoresRoutes from '../routes/motores';
import mochilasFumigadorasRoutes from '../routes/mochilaFumigadoras';
import motosierrasRoutes from '../routes/motosierras';



class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        auth        : '/api/auth',
        aceites     : '/api/aceites',
        llantas     : '/api/llantas',
        motores     : '/api/motores',
        mochilas    : '/api/mochilas_fumigadoras',
        motosierras : '/api/motosierras'

    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';

        // Métodos iniciales
        this.listen();
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Base de datos conectada 😍');

        } catch (error) {
            console.log(error)
        }

    }

    routes() {
        this.app.use( this.apiPaths.auth, userRoutes );
        this.app.use( this.apiPaths.aceites, aceitesRoutes );
        this.app.use( this.apiPaths.llantas, llantasRoutes );
        this.app.use( this.apiPaths.motores, motoresRoutes );
        this.app.use( this.apiPaths.mochilas, mochilasFumigadorasRoutes );
        this.app.use( this.apiPaths.motosierras, motosierrasRoutes );

    }

    middlewares() {
        this.app.use(fileUpload({
            useTempFiles: true, 
            tempFileDir: './upload',
        }))

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        this.app.use(express.urlencoded({extended: true}));

        // Carpeta pública
        this.app.use( express.static('public') );

    }

}

export default Server;