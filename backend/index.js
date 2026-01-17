import { dbconnection } from "./databse.js";
import express from 'express'
import { router } from "./routes/book_routes.js";
import cors from 'cors'
import dotenv from 'dotenv';
import morgan from "morgan";
import { user_route } from "./routes/user_routes.js";
// import { authmiddleware } from "./middleware/auth_middleware.js";

dotenv.config()
await dbconnection()
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Error Occurred")
})

app.use('/book', router)
app.use('/book/user',user_route)
const PORT=process.env.PORT
if(process.env.NODE_ENV!=='production'){
    app.listen(PORT,()=>{
        console.log("Port running on 8000")
    })
}

export default app