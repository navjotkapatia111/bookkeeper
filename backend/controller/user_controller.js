import { User } from "../models/auth_models.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const SECRET_KEY = "jkdfnhfjfilawjdlqwjkwj"

export const register = async(req,res)=>{
    try {
        const body = req.body
        if(!body.name || !body.email || !body.password) return res.status(400).json({message:"All fields required"})

        const hashpassword = await bcrypt.hash(body.password,10)
        console.log("hash--- ",hashpassword)

        const signUp = await User.insertOne({...body,password:hashpassword})
        if(signUp) return res.status(200).json({message:"User created successfully",id:signUp?._id})

    } catch (error) {
        console.log(error.message)
    }
}

export const login = async(req,res)=>{
    try {
        const body = req.body
        if(!body.email || !body.password) return res.status(400).json({message:"All fields required"})

        const user = await User.findOne({email:body.email})
        if(!user) return res.status(404).send({success:false,message:"Email not exists"})

        const ismatch = await bcrypt.compare(body.password,user.password)
        if(!ismatch) return res.status(404).send({success:false,message:"Mismatch Password"})

        const token = jwt.sign({email:user?.email, id:user?._id},SECRET_KEY)
        return res.status(200).send({success:true, message:"User LoggedIn Successfully",token:token})

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({success:false, message:"Internal Server Error"});
    }
}