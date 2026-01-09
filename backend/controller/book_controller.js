import { Book } from "../models/book_model.js"

export const bookcontroller = async(req,res)=>{
    try {
        const body = req.body

        if(!body.bookname || !body.booktitle || !body.author || !body.sellingprice || !body.publishdate)
         return res.status(400).json({message:"Input Field Required"})

         const add = await Book.insertOne(body)
         if(add) return res.status(201).json({message:"Successfully Created"})

    } catch (error) {
        console.log(error.message)
    }
}

export const book_list = async(req,res)=>{
    try {
        const list = await Book.find({})
        return res.status(200).json({message:"All books fetch successfully ",TotalCount:list.length,BookList:list})
    } catch (error) {
        console.log(error.message)
    }
}

export const book_delete = async(req,res)=>{
    const body = req.body
    try {
        const deleted = await Book.deleteOne({_id:body.Id})
        if(deleted.acknowledged) return res.status(200).json({message:"Deleted Successfully"})
    } catch (error) {
        console.log(error.message)
    }
}

export const book_update = async(req,res)=>{
    try {
        const body = req.body      

        const update = await Book.updateOne({_id:body?.Id},{$set:body})
        if(update?.acknowledged) return res.status(200).json({message:"Book Updated Successfully"})
    } catch (error) {
        console.log(error.message)
    }
}