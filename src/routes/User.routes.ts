import {Router} from 'express'
import {getUsers,getUser,createUser,deleteUser,updateUser} from '../controllers/User.controllers'

class UserRoutes{
    router:Router;
    constructor(){
        this.router = Router();
    }
    getUsers(){
        this.router.get('/',getUsers);
    }
    getUser(){
        this.router.get('/:id',getUser);
    };
    createUser(){
        this.router.post('/',createUser);
    };
    deleteUser(){
        this.router.delete('/:id',deleteUser);
    };
    updateUser(){
        this.router.put('/:id',updateUser);
    };
    routes(){
        this.getUsers();
        this.getUser();
        this.createUser();
        this.deleteUser();
        this.updateUser();
    }
}
const userRoutes = new UserRoutes();
userRoutes.routes()
export default userRoutes.router