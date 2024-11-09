{
  // key of operator

  type Book = {
    author: string;
    title: string;
    publishYear: number;
  };

type BookType = keyof Book

function getPropertyValue <T,K extends keyof T>(book: T, key: K): T[K]{
return book[key]




}










}
