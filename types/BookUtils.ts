import { Book } from './Book';
import { Repository } from './Repository';

export function updateBook(book: Book, updates: Partial<Book>): Book {
  return {
    ...book,
    ...updates
  };
}

export function getReadonlyBooks(repo: Repository<Book>): Readonly<Book[]> {
  return repo.getAll() as Readonly<Book[]>;
}

// readonlyBooks.push({title: 'Test', author: 'Author', year: 2020});
// readonlyBooks[0].title = 'Changed';
