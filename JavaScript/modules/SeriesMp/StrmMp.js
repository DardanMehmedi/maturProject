import { bookList } from "../book.js";

const grimDarkBooks = [
    {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight.html`,
        bookCover: `../../bookPages/All Covers/strm1.jpg`,
        bookTitle: `The Way of Kings`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight2.html`,
        bookCover: `../../bookPages/All Covers/strm2.jpg`,
        bookTitle: `Words of Radiance`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight3.html`,
        bookCover: `../../bookPages/All Covers/strm3.1.jpg`,
        bookTitle: `Edgedancer`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight4.html`,
        bookCover: `../../bookPages/All Covers/strm3.jpg`,
        bookTitle: `Oathbringer`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight5.html`,
        bookCover: `../../bookPages/All Covers/strm4.1.jpg`,
        bookTitle: `Dawnshard`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight6.html`,
        bookCover: `../../bookPages/All Covers/strm4.jpg`,
        bookTitle: `Rhythm of War`,
      },
  ];

bookList(grimDarkBooks);