import { Book } from './types/Book';
import { LibraryBook } from './types/LibraryBook';
import { Repository } from './types/Repository';
import { updateBook, getReadonlyBooks } from './types/BookUtils';

const firstBookData: Book = {
  title: 'Мастер и Маргарита',
  author: 'Михаил Булгаков',
  year: 1967
};

const secondBookData: Book = {
  title: '1984',
  author: 'Джордж Оруэлл',
  year: 1949
};

const myFirstBook = new LibraryBook(firstBookData);
const mySecondBook = new LibraryBook(secondBookData);

myFirstBook.borrow('Алексей');
mySecondBook.borrow('Елена');

const bookRepository = new Repository<Book>([firstBookData, secondBookData]);

const thirdBookData: Book = {
  title: 'Анна Каренина',
  author: 'Лев Толстой',
  year: 1877
};

bookRepository.add(thirdBookData);

const allBooks = bookRepository.getAll();
console.log('Все книги:', allBooks);

const updatedBook = updateBook(firstBookData, { year: 1968 });
console.log('Обновленная книга:', updatedBook);

const readonlyBooks = getReadonlyBooks(bookRepository);
