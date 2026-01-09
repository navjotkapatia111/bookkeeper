import { dbconnection } from "./databse.js";
import express from 'express'
import { router } from "./routes/book_routes.js";
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config()
await dbconnection()
const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use('/book',router)
const PORT=process.env.PORT
if(process.env.NODE_ENV!=='production'){
    app.listen(PORT,()=>{
        console.log("Port running on 8000")
    })
}

export default app