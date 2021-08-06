import { Router } from "express";
import {getPosts,getPost,createPost,deletePost,updatePost} from '../controllers/Posts.controller';

class PostRoutes{
    router:Router;
    constructor(){
        this.router = Router();
    }
    getPosts(){
        this.router.get('/',getPosts);
    }
    getPost(){
        this.router.get('/:id',getPost)
    };
    createPost(){
        this.router.post('/',createPost)
    };
    deletePost(){
        this.router.delete('/:id',deletePost)
    };
    updatePost(){
        this.router.put('/:id',updatePost)
    };
    routes(){
        this.getPosts();
        this.getPost();
        this.createPost();
        this.deletePost();
        this.updatePost();
    }
}
const postRoutes = new PostRoutes();;
postRoutes.routes()
export default postRoutes.router;