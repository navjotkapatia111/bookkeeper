import mongoose from 'mongoose'
import 'dotenv/config'

export const dbconnection = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        if(connect){
            return console.log(`Connected${connect.connection.host}`)
        }
        return console.log("Error Occurred")
    } catch (error) {
        console.log(error.message)
    }
}