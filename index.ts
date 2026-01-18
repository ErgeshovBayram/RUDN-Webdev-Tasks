import { Book } from './types/Book';
import { LibraryBook } from './types/LibraryBook';

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
