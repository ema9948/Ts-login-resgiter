import {Schema,model} from "mongoose";
import { User } from "../interface";


//? SCHEMA USER
const userSchema = new Schema<User>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


//?CREATE A MODEL
const userModel = model<User>("User",userSchema)

export default userModel