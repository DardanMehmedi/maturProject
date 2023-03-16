import { bookList } from "../book.js";

const grimDarkBooks = [
  {
    bookPage: `/bookPages/A Song of Ice and Fire/bASoIaF1.html`,
    bookCover: `../../bookPages/All Covers/ASoIaF1.jpg`,
    bookTitle: `A Game of Thrones`,
  },
  {
    bookPage: `/bookPages/A Song of Ice and Fire/bASoIaF2.html`,
    bookCover: `../../bookPages/All Covers/ASoIaF2.jpg`,
    bookTitle: `A Clash of Kings`,
  },
  {
    bookPage: `/bookPages/A Song of Ice and Fire/bASoIaF3.html`,
    bookCover: `../../bookPages/All Covers/ASoIaF3.jpg`,
    bookTitle: `A Storm of Swords`,
  },
  {
    bookPage: `/bookPages/A Song of Ice and Fire/bASoIaF4.html`,
    bookCover: `../../bookPages/All Covers/ASoIaF4.jpg`,
    bookTitle: `A Feast for Crows`,
  },
  {
    bookPage: `/bookPages/A Song of Ice and Fire/bASoIaF5.html`,
    bookCover: `../../bookPages/All Covers/ASoIaF5.jpg`,
    bookTitle: `A Dance With Dragons`,
  },
  ];

bookList(grimDarkBooks);