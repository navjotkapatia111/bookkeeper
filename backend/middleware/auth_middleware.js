import jwt from 'jsonwebtoken'
import {User} from '../models/auth_models.js'

const SECRET_KEY = "jkdfnhfjfilawjdlqwjkwj"

export const authmiddleware = async(req,res,next)=>{
    const authHeader = req.header.authorization //if this not exists then this means user don't have tokens

    try {
        if(!authHeader || !authHeader.startswith('Bearer ')) {//space Bearer is a format for token
            return res.status(500).json({message:"Invalid token"})
        }
        const token = authHeader.split(" ")[1] //our token is split into two parts:- first is bearer second actually token
        const verifyToken = jwt.verify(token,SECRET_KEY)
        if(!verifyToken) return res.status(500).json({message:"Invalid token"})

        const verifyuser = await User.findOne({email:verifyToken?.email}).select("-password")
        if(!verifyuser) return res.status(500).json({message:"Unauthorized User"})
        req.user = verifyuser
        next()

    } catch (error) {
        console.log(error.message)
    }
}