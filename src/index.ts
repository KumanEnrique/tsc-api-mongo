import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import PostRoutes from './routes/Post.routes';
import UserRoutes from './routes/User.routes';

class Server{
    app:express.Application;
    constructor(){
        this.app = express();
        this.settings();
        this.mongo();
        this.middleware();
        this.routes();
        this.start();
    }
    mongo(){
        const MONGO_URI = 'mongodb://localhost/restApiTSC'
        mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
            .then(db => console.log('db connected'))
            .catch(error =>console.log(error))
    }
    settings(){
        this.app.set('port',process.env.PORT || 3000);
    }
    middleware(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }
    routes(){
        this.app.get('/',(req,res)=>{
            res.send('hola mundo,ruta:/posts');
        })
        this.app.use('/posts',PostRoutes);
        this.app.use('/users',UserRoutes)
    }
    start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log(`server on http://localhost:${this.app.get('port')}`);
        });
    }
}

const server = new Server();