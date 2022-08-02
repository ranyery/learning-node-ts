import { Request, Response } from "express";
import { Book } from "../models/book.model";
import { BookService } from "../services/book.service";

const bookService = new BookService();

export const getAll = (req: Request, res: Response<Book[]>) => {
  const bookService = new BookService();
  const books = bookService.getAll();
  res.json(books);
};

export const getById = (req: Request, res: Response<Book>) => {
  const id = req.params["id"];
  const book = bookService.getBookById(id);
  res.json(book);
};

export const create = (req: Request, res: Response<Book>) => {
  console.log("Body", req.body);
  const book: Book = req.body;
  const _book = bookService.create(book);
  res.json(_book);
};
