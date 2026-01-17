import express,{Router} from 'express'
import { login, register } from '../controller/user_controller.js'

export const user_route = express.Router()

user_route.post("/register",register)
user_route.post("/login",login)