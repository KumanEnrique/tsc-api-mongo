import {Request,Response} from 'express'
import Post from '../models/Post'

export async function getPosts(req:Request,res:Response){
    const posts = await Post.find();
    res.json(posts)
}
export async function getPost(req:Request,res:Response){
    const {id} = req.params
    const post = await Post.findById(id)
    res.json(post)
}
export async function createPost(req:Request,res:Response){
    const {title,url,content,image} = req.body
    const post = new Post({title,url,content,image})
    await post.save()
    console.log(post)
    res.send('post creado')
}
export async function updatePost(req:Request,res:Response){
    const {id} = req.params
    const newPost = {...req.body,updateAt:Date.now()}
    await Post.findByIdAndUpdate(id,newPost)
    res.send('post actualizado')
}
export async function deletePost(req:Request,res:Response){
    const id = req.params.id
    await Post.findByIdAndDelete(id)
    res.send('post borrado')
}