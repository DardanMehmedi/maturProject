import { bookList } from "../book.js";

const grimDarkBooks = [
    {
        bookPage: `/bookPages/The Handmaids Tale/bHandmaid1.html`,
        bookCover: `../covers/Dystopian/THT1.jpg`,
        bookTitle: `The Handmaid's Tale`,
      },
      {
        bookPage: `/bookPages/The Handmaids Tale/bHandmaid2.html`,
        bookCover: `../covers/Dystopian/THT2.jpg`,
        bookTitle: `The Testaments`,
      },
      {
        bookPage: `/bookPages/The Hunger Games/bHungerGames1.html`,
        bookCover: `../covers/Dystopian/THG1.jpg`,
        bookTitle: `The Hunger Games`,
      },
      {
        bookPage: `/bookPages/The Hunger Games/bHungerGames2.html`,
        bookCover: `../covers/Dystopian/THG2.jpg`,
        bookTitle: `Catching Fire`,
      },
      {
        bookPage: `/bookPages/The Hunger Games/bHungerGames3.html`,
        bookCover: `../covers/Dystopian/THG3.jpg`,
        bookTitle: `Mockingjay`,
      },
  ];

bookList(grimDarkBooks);
