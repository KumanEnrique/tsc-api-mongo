import {Request,Response} from 'express'
import User from '../models/User'

export async function getUsers(req:Request,res:Response){
    const users = await User.find()
    res.json(users)
}
export async function getUser(req:Request,res:Response){
    const {id} = req.params
    const user = await User.findById(id).populate('posts')
    res.json(user)
}
export async function createUser(req:Request,res:Response){
    const {name,email,password,username} = req.body
    const user = new User({name,email,password,username})
    await user.save()
    res.send('se creo un nuevo usuario')
}
export async function deleteUser(req:Request,res:Response){
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.send('se elemino un usuario')
}
export async function updateUser(req:Request,res:Response){
    const {id} = req.params
    const updateUser = {...req.body,updateAt:Date.now()}
    await User.findByIdAndUpdate(id,updateUser)
    res.send('se actualizo un usuario')
}