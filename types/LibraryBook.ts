import { Book } from './Book';
import { Borrowable } from './Borrowable';

export class LibraryBook implements Borrowable {
  bookInfo: Book;

  constructor(bookInfo: Book) {
    this.bookInfo = bookInfo;
  }

  borrow(userName: string): void {
    console.log(`Книга "${this.bookInfo.title}" выдана пользователю ${userName}`);
  }
}
