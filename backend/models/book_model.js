import mongoose, { Schema } from "mongoose";

const bookSchema = new mongoose.Schema({
    bookname:{
        type:String,
        require:true
    },
    booktitle:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    sellingprice:{
        type:String,
        require:true
    },
    publishdate:{
        type:String,
        require:true
    }
},{timestamps:true})

export const Book = mongoose.model("Books",bookSchema)