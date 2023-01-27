import { Request,Response} from "express"
import { User } from "../interface"
import userModel from "../model/userModel"

export const login =async (req:Request,res:Response)=>{
    const {name,email,password}:User =req.body

    const user = await userModel.findOne({email})
    //! exist user?
    if(!user) return res.status(404).json({msg:"email no registrado"})
    return res.sendStatus(200)

}

export const register = async (req:Request<User>,res:Response)=>{
    const {name,email,password}:User = req.body
    if(!email || !name ||!password) return res.status(404).json({msg:"faltan datos."})
    let newUser = await userModel.findOne({email})
    //! email en uso ?
    if(newUser) return res.status(401).json({msg:"Email en uso."})
     newUser = new userModel({name,password,email})
    await newUser.save()
    return res.sendStatus(201)
}