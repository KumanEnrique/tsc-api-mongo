import mongoose,{Schema} from 'mongoose'

const PostSchema = new Schema({
    title: {type:String,required:true},
    url: {type:String,required:true},
    content:{type:String,required:true},
    image:String,
    createdAt:{type:Date,default:Date.now()},
    updateAt: Date,
    
})
export default mongoose.model('Post',PostSchema)