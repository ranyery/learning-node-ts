import { Book } from "../models/book.model";

export interface IBookService {
  getAll(): Book[];
  getBookById(id: string): Book;
  create(book: Book): Book;
}
