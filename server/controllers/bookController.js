import express from "express";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Book } from "../models/bookModel.js";
import { User } from "../models/UserModels.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const addBook = catchAsyncErrors(async(req, res, next)=>{
    const {title, author, description, price, quantity} = req.body; // ye chize chahiye rahegi

    //agar hum inme se koi bhi ek chiz nhi dalte h toh if() wale se error ayega
    if (!title || !author || !description || !price || !quantity) {
        return next(new ErrorHandler("Please fill all fields.", 400));
    }

    //ye book create krne ke liye
    const book = await Book.create({
        title,
        author,
        description,
        price,
        quantity,
    });

    // add hone ke baad 201(jo create krne ka status code h vo ayega) or messge jo h print hoga
    res.status(201).json({
        success: true,
        message: "Book added sucessfully.",
        book,
    });
});

export const getAllBooks = catchAsyncErrors(async(req, res, next) => {
    const books = await Book.find();
    res.status(200).json({
        success: true,
        books,
    });
});
export const deleteBook = catchAsyncErrors(async(req, res, next) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
        return next(new ErrorHandler("Book not found", 404));
    }

    await book.deleteOne();

    res.status(200).json({
        success: true,
        message: "Book deleted successfully.",
    });
});