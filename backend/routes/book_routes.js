import express from 'express'
import { book_delete, book_list, book_update, bookcontroller } from '../controller/book_controller.js'

export const router = express.Router()
router.post("/addbook",bookcontroller)
router.get("/booklist",book_list)
router.post("/delete",book_delete)
router.put("/update",book_update)