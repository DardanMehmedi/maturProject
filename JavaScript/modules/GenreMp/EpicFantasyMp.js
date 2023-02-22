import { bookList } from "../book.js";

const epicFantasyBooks = [
    {
        bookPage: `/bookPages/The Witcher/bwitcher8.html`,
        bookCover: `../covers/Epic Fantasy/witcher8.jpg`,
        bookTitle: `A Season of Storms`,
      },
      {
        bookPage: `/bookPages/The Witcher/bwitcher1.1.html`,
        bookCover: `../covers/Epic Fantasy/witcher1.1.jpg`,
        bookTitle: `The Last Wish`,
      },
      {
        bookPage: `/bookPages/The Witcher/bwitcher2.html`,
        bookCover: `../covers/Epic Fantasy/witcher2.jpg`,
        bookTitle: `Sword of Destiny`,
      },
      {
        bookPage: `/bookPages/The Witcher/bwitcher3.html`,
        bookCover: `../covers/Epic Fantasy/witcher3.jpg`,
        bookTitle: `Blood of Elves`,
      },
      {
        bookPage: `/bookPages/The Witcher/bwitcher4.html`,
        bookCover: `../covers/Epic Fantasy/witcher4.jpg`,
        bookTitle: `The Time of Contempt`,
      },
      {
        bookPage: `/bookPages/The Witcher/bwitcher5.html`,
        bookCover: `../covers/Epic Fantasy/witcher5.jpg`,
        bookTitle: `Baptism of Fire`,
      },
      {
        bookPage: `/bookPages/The Witcher/bwitcher6.html`,
        bookCover: `../covers/Epic Fantasy/witcher6.jpg`,
        bookTitle: `The Tower of Swallows`,
      },
      {
        bookPage: `/bookPages/The Witcher/bwitcher7.html`,
        bookCover: `../covers/Epic Fantasy/witcher7.jpg`,
        bookTitle: `The Lady of The Lake`,
      },
      {
        bookPage: `/bookPages/The Covenant of Steel/bCOS1.html`,
        bookCover: `../covers/Epic Fantasy/COS1.jpg`,
        bookTitle: `The Pariah`,
      },
      {
        bookPage: `/bookPages/The Covenant of Steel/bCOS2.html`,
        bookCover: `../covers/Epic Fantasy/COS2.jpg`,
        bookTitle: `The Martyr`,
      },
      {
        bookPage: `/bookPages/The Covenant of Steel/bCOS3.html`,
        bookCover: `../covers/Epic Fantasy/COS3.jpg`,
        bookTitle: `The Traitor`,
      },
      {
        bookPage: `/bookPages/Ravens Shadow/bRS1.html`,
        bookCover: `../covers/Epic Fantasy/RS1.jpg`,
        bookTitle: `Blood Song`,
      },
      {
        bookPage: `/bookPages/Ravens Shadow/bRS2.html`,
        bookCover: `../covers/Epic Fantasy/RS2.jpg`,
        bookTitle: `Tower Lord`,
      },
      {
        bookPage: `/bookPages/Ravens Shadow/bRS3.html`,
        bookCover: `../covers/Epic Fantasy/RS3.jpg`,
        bookTitle: `Queen of Fire`,
      },
      {
        bookPage: `/bookPages/The Draconic Memoir/bTDM1html`,
        bookCover: `../covers/Epic Fantasy/TDM1.jpg`,
        bookTitle: `The Waking Fire`,
      },
      {
        bookPage: `/bookPages/The Draconic Memoir/bTDM2.html`,
        bookCover: `../covers/Epic Fantasy/TDM2.jpg`,
        bookTitle: `The Legion of Flame`,
      },
      {
        bookPage: `/bookPages/The Draconic Memoir/bTDM3.html`,
        bookCover: `../covers/Epic Fantasy/TDM3.jpg`,
        bookTitle: `The Empire of Ashes`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight.html`,
        bookCover: `../covers/Epic Fantasy/strm1.jpg`,
        bookTitle: `The Way of Kings`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight2.html`,
        bookCover: `../covers/Epic Fantasy/strm2.jpg`,
        bookTitle: `Words of Radiance`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight3.html`,
        bookCover: `../covers/Epic Fantasy/strm3.1.jpg`,
        bookTitle: `Edgedancer`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight4.html`,
        bookCover: `../covers/Epic Fantasy/strm3.jpg`,
        bookTitle: `Oathbringer`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight5.html`,
        bookCover: `../covers/Epic Fantasy/strm4.1.jpg`,
        bookTitle: `Dawnshard`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight6.html`,
        bookCover: `../covers/Epic Fantasy/strm4.jpg`,
        bookTitle: `Rhythm of War`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist1.html`,
        bookCover: `../covers/Epic Fantasy/mist1.jpg`,
        bookTitle: `The Final Empire`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist2.html`,
        bookCover: `../covers/Epic Fantasy/mist2.jpg`,
        bookTitle: `The Well of Ascension`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist3.html`,
        bookCover: `../covers/Epic Fantasy/mist3.jpg`,
        bookTitle: `The Hero of Ages`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist4.1.html`,
        bookCover: `../covers/Epic Fantasy/mist4.1.jpg`,
        bookTitle: `Secret History`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist4.html`,
        bookCover: `../covers/Epic Fantasy/mist4.jpg`,
        bookTitle: `The Alloy of Law`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist5.html`,
        bookCover: `../covers/Epic Fantasy/mist5.jpg`,
        bookTitle: `Shadows of Self`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist6.html`,
        bookCover: `../covers/Epic Fantasy/mist6.jpg`,
        bookTitle: `The Bands of Mourning`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist7.html`,
        bookCover: `../covers/Epic Fantasy/mist7.jpg`,
        bookTitle: `The Lost Metal`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK1.html`,
        bookCover: `../covers/Epic Fantasy/A Brightness Long Ago.jpg`,
        bookTitle: `A Brightness Long Ago`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK2.html`,
        bookCover: `../covers/Epic Fantasy/Children of Earth and Sky.jpg`,
        bookTitle: `Children of Earth and Sky`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK3.html`,
        bookCover: `../covers/Epic Fantasy/Lord of Emperors.jpg`,
        bookTitle: `Lord of Emperors`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK4.html`,
        bookCover: `../covers/Epic Fantasy/River of Stars.jpg`,
        bookTitle: `River of Stars`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK5.html`,
        bookCover: `../covers/Epic Fantasy/The Summer Tree.jpg`,
        bookTitle: `The Summer Tree`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK6.html`,
        bookCover: `../covers/Epic Fantasy/The Wandering Fire.jpg`,
        bookTitle: `The Wandering Fire`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK7.html`,
        bookCover: `../covers/Epic Fantasy/Tigana.jpg`,
        bookTitle: `Tigana`,
      },
      {
        bookPage: `/bookPages/The Lord of the Rings/bLotr1.html`,
        bookCover: `../covers/Epic Fantasy/lotr1.jpg`,
        bookTitle: `The Hobbit`,
      },
      {
        bookPage: `/bookPages/The Lord of the Rings/bLotr2.html`,
        bookCover: `../covers/Epic Fantasy/lotr2.jpg`,
        bookTitle: `The Fellowship of the Ring`,
      },
      {
        bookPage: `/bookPages/The Lord of the Rings/bLotr3.html`,
        bookCover: `../covers/Epic Fantasy/lotr3.jpg`,
        bookTitle: `The Two Towers`,
      },
      {
        bookPage: `/bookPages/The Lord of the Rings/bLotr4.html`,
        bookCover: `../covers/Epic Fantasy/lotr4.gif`,
        bookTitle: `The Return of the King`,
      },
      {
        bookPage: `/bookPages/The Golden Compass/gTGC1.html`,
        bookCover: `../covers/Epic Fantasy/TGC1.jpg`,
        bookTitle: `The Golden Compass`,
      },
      {
        bookPage: `/bookPages/The Golden Compass/gTGC2.html`,
        bookCover: `../covers/Epic Fantasy/TGC2.jpg`,
        bookTitle: `The Sublte Knife`,
      },
      {
        bookPage: `/bookPages/The Golden Compass/gTGC3.html`,
        bookCover: `../covers/Epic Fantasy/TGC3.jpg`,
        bookTitle: `The Amber Spyglass`,
      },
      {
        bookPage: `/bookPages/The Book of Dust/TBOD1.html`,
        bookCover: `../covers/Epic Fantasy/TBOD1.jpg`,
        bookTitle: `The Secret Commonwealth`,
      },
      {
        bookPage: `/bookPages/The Book of Dust/TBOD2.html`,
        bookCover: `../covers/Epic Fantasy/TBOD2.jpg`,
        bookTitle: `The Amber Spyglass`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel0.5.html`,
        bookCover: `../covers/Epic Fantasy/wheel0.5.jpg`,
        bookTitle: `New Spring`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel1.html`,
        bookCover: `../covers/Epic Fantasy/wheel1.jpg`,
        bookTitle: `The Eye of the World`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel2.html`,
        bookCover: `../covers/Epic Fantasy/wheel2.jpg`,
        bookTitle: `The Great Hunt`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel3.html`,
        bookCover: `../covers/Epic Fantasy/wheel3.jpg`,
        bookTitle: `The Dragon Reborn`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel4.html`,
        bookCover: `../covers/Epic Fantasy/wheel4.jpg`,
        bookTitle: `The Shadow Rising`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel5.html`,
        bookCover: `../covers/Epic Fantasy/wheel5.jpg`,
        bookTitle: `The Fires of Heaven`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel6.html`,
        bookCover: `../covers/Epic Fantasy/wheel6.jpg`,
        bookTitle: `The Lord of Chaos`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel7.html`,
        bookCover: `../covers/Epic Fantasy/wheel7.jpg`,
        bookTitle: `A Crown of Swords`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel8.html`,
        bookCover: `../covers/Epic Fantasy/wheel8.jpg`,
        bookTitle: `The Path of Daggers`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel9.html`,
        bookCover: `../covers/Epic Fantasy/wheel9.jpg`,
        bookTitle: `Winters Heart`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel10.html`,
        bookCover: `../covers/Epic Fantasy/wheel10.jpg`,
        bookTitle: `Crossroads of Twilight`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel11.html`,
        bookCover: `../covers/Epic Fantasy/wheel11.jpg`,
        bookTitle: `Knife of Dreams`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel12.html`,
        bookCover: `../covers/Epic Fantasy/wheel12.jpg`,
        bookTitle: `The Gathering Storm`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel13.html`,
        bookCover: `../covers/Epic Fantasy/wheel13.jpg`,
        bookTitle: `Towers of Midnight`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel14.html`,
        bookCover: `../covers/Epic Fantasy/wheel14.jpg`,
        bookTitle: `A Memory of Light`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF1.html`,
        bookCover: `../covers/Epic Fantasy/FaF1.jpg`,
        bookTitle: `Assassin's Apprentice`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF2.html`,
        bookCover: `../covers/Epic Fantasy/FaF2.jpg`,
        bookTitle: `Royal Assassin`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF3.html`,
        bookCover: `../covers/Epic Fantasy/FaF3.jpg`,
        bookTitle: `Assassin's Quest`,
      },
      {
        bookPage: `/bookPages/The Mad Ship/bMSH1.html`,
        bookCover: `../covers/Epic Fantasy/MSH1.jpg`,
        bookTitle: `Ship of Magic`,
      },
      {
        bookPage: `/bookPages/The Mad Ship/bMSH2.html`,
        bookCover: `../covers/Epic Fantasy/MSH2.jpg`,
        bookTitle: `The Mad Ship`,
      },
      {
        bookPage: `/bookPages/The Mad Ship/bMSH3.html`,
        bookCover: `../covers/Epic Fantasy/MSH3.jpg`,
        bookTitle: `Ship of Destiny`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF4.html`,
        bookCover: `../covers/Epic Fantasy/FaF4.jpg`,
        bookTitle: `The Golden Fool`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF5.html`,
        bookCover: `../covers/Epic Fantasy/FaF5.jpg`,
        bookTitle: `Fool's Errand`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF6.html`,
        bookCover: `../covers/Epic Fantasy/FaF6.jpg`,
        bookTitle: `Fool's Fate`,
      },
      {
        bookPage: `/bookPages/Dragon Quartet/bDQ1.html`,
        bookCover: `../covers/Epic Fantasy/DQ1.jpg`,
        bookTitle: `Dragon Keeper`,
      },
      {
        bookPage: `/bookPages/Dragon Quartet/bDQ2.html`,
        bookCover: `../covers/Epic Fantasy/DQ2.jpg`,
        bookTitle: `Blood of Dragons`,
      },
      {
        bookPage: `/bookPages/Dragon Quartet/bDQ3.html`,
        bookCover: `../covers/Epic Fantasy/DQ3.jpg`,
        bookTitle: `City of Dragons`,
      },
      {
        bookPage: `/bookPages/Dragon Quartet/bDQ4.html`,
        bookCover: `../covers/Epic Fantasy/DQ4.jpg`,
        bookTitle: `Dragon Haven`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF7.html`,
        bookCover: `../covers/Epic Fantasy/FaF7.jpg`,
        bookTitle: `Fool's Quest`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF8.html`,
        bookCover: `../covers/Epic Fantasy/FaF8.jpg`,
        bookTitle: `Fool's Assassin`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF9.html`,
        bookCover: `../covers/Epic Fantasy/FaF9.jpg`,
        bookTitle:`Assassin's Fate`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/`,
        bookCover: `../covers/Epic Fantasy/king1.jpg`,
        bookTitle: `The Gunslinger`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/`,
        bookCover: `../covers/Epic Fantasy/king2.jpg`,
        bookTitle: `The Drawing of the Three`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking1.html`,
        bookCover: `../covers/Epic Fantasy/king3.jpg`,
        bookTitle: `The Waste Lands`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking2.html`,
        bookCover: `../covers/Epic Fantasy/king4.5.jpg`,
        bookTitle: `The Wind Through the Keyhole`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking3.html`,
        bookCover: `../covers/Epic Fantasy/king4.jpg`,
        bookTitle: `Wizard and Glass`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking4.html`,
        bookCover: `../covers/Epic Fantasy/king5.jpg`,
        bookTitle: `Wolves of the Calla`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking5.html`,
        bookCover: `../covers/Epic Fantasy/king6.jpg`,
        bookTitle: `Song of Susannah`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking6.html`,
        bookCover: `../covers/Epic Fantasy/king7.jpg`,
        bookTitle: `The Dark Tower`,
      },
  ];

bookList(epicFantasyBooks);
