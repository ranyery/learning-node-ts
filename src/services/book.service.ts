import { randomUUID } from "crypto";
import { IBookService } from "../interfaces/IBookService";
import { Book } from "../models/book.model";

export class BookService implements IBookService {
  private books: Array<Book> = [
    new Book("9c4726a6-7a54-4f54-9ccf-50d28f5c898f", "Livro 1", 19.9),
    new Book("1de0dad9-6adb-4ac2-8eb4-0d77ef935a78", "Livro 2", 25),
    new Book("8a204652-5ca1-4b66-a768-3f780aa3c981", "Livro 3", 14.97),
  ];

  public getAll(): Book[] {
    return this.books;
  }

  public getBookById(id: string): Book {
    const book = this.books.find((book) => book.id === id);
    return book!;
  }

  public create(book: Book): Book {
    book.id = randomUUID();
    this.books.push(book);
    return book;
  }
}
