

let search = document.getElementById(`search`)
const office = ['Kelly', 'Creed', 'Stanley', 'Oscar', 'Michael', 'Jim', 'Darryl', 'Phyllis', 'Pam', 'Dwight', 'Angela', 'Andy', 'William', 'Ryan', 'Toby', 'Bob']
let append = document.getElementById(`append`)
let newDiv = document.createElement(`div`)
newDiv.classList.add(`search`)

const authorInfo = [
    {
      href: `/authorPages/bASP.html`,
      name: `Andrzej Sapkowski`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/AntR.html`,
      name: `Anthony Ryan`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/BarO.html`,
      name: `Barack Obama`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/BramS.html`,
      name: `Bram Stoker`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/BraS.html`,
      name: `Brandon Sanderson`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/CarC.html`,
      name: `Carlo Collodi`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/ChaD.html`,
      name: `Charles Dickens`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/JamW.html`,
      name: `Dr. James Watson`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/EdwS.html`,
      name: `Edwards W. Said`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/EliK.html`,
      name: `Elizabeth Kolbert`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/ScoF.html`,
      name: `F.Scott Fitzgerald`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/FraH.html`,
      name: `Frank Herbert`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/GRRM.html`,
      name: `George R.R Martin`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/GerG.html`,
      name: `Germaine Greer`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/GGK.html`,
      name: `GuyGavriel Kay`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/HomE.html`,
      name: `Homer`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/JmbA.html`,
      name: `J.M. Barrie`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/JRRT.html`,
      name: `J.R.RTolkien`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/JacL.html`,
      name: `Jack London`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/JimB.html`,
      name: `Jim Butcher`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/JoaD.html`,
      name: `Joan Didion`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/JoeA.html`,
      name: `Joe Abercrombie`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/LeiB.html`,
      name: `Leigh Bardugo`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/LeoT.html`,
      name: `Leo Tolstoy`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/LewC.html`,
      name: `Lewis Carroll`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/MarS.html`,
      name: `Mary Shelley`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/MicH.html`,
      name: `Michael Herr`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/NaoK.html`,
      name: `Naomi Klein`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/NeiG.html`,
      name: `Neil Gaiman`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/NikC.html`,
      name: `Nik Cohn`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/OliS.html`,
      name: `Oliver Sacks`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/PhiP.html`,
      name: `Philip Pullman`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/RicD.html`,
      name: `Richard Dawkins`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/RobJ.html`,
      name: `Robert Jordan`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/RobS.html`,
      name: `Robert Louis Stevenson`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/RobH.html`,
      name: `Robin Hobb`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/Scol.html`,
      name: `Scott Lynch`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/SeaH.html`,
      name: `Seasmus Heaney`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/SirD.html`,
      name: `Sir Arthur Conan Doyle`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/SteH.html`,
      name: `Stephen Hawking`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/SteK.html`,
      name: `Stephen King`,
      class: `FictionAuthors`,
    },
    {
      href: `authorPages/SunT.html`,
      name: `Sun Tzu`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/TedH.html`,
      name: `Ted Hughes`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/TomW.html`,
      name: `Tom Wolfe`,
      class: `NonFictionAuthors`,
    },
    {
      href: `authorPages/VicH.html`,
      name: `Victor Hugo`,
      class: `ClassicAuthors`,
    },
    {
      href: `authorPages/WilS.html`,
      name: `William Shakespeare`,
      class: `ClassicAuthors`,
    }
  ];

const bookInfo = [
    {
        bookPage: `/bookPages/Alcatraz vs the Evil Librarians/bAlcatraz.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/alc1.jpg`,
        bookTitle: `Alcatraz vs the Evil Librarians`,
    },
    {
        bookPage: `/bookPages/Alcatraz vs the Evil Librarians/bAlcatraz2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/alc2.jpg`,
        bookTitle: `The Scrivener's Bones`,
    },
    {
        bookPage: `/bookPages/Alcatraz vs the Evil Librarians/bAlcatraz3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/alc3.jpg`,
        bookTitle: `The Knights of Crystallia`,
    },
    {
        bookPage: `/bookPages/Alcatraz vs the Evil Librarians/bAlcatraz4.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/alc4.jpg`,
        bookTitle: `The Shattered Lens`,
    },
    {
        bookPage: `/bookPages/Alcatraz vs the Evil Librarians/bAlcatraz5.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/alc5.jpg`,
        bookTitle: `The Dark Talent`,
    },
    {
        bookPage: `/bookPages/Alcatraz vs the Evil Librarians/bAlcatraz6.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/alc6.jpg`,
        bookTitle: `Bastille vs the Evil Librarians`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df1.jpg`,
        bookTitle: `Storm Front`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden2.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df2.jpg`,
        bookTitle: `Fool Moon`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden3.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df3.jpg`,
        bookTitle: `Grave Peril`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden4.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df4.jpg`,
        bookTitle: `Summer Knight`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden5.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df5.jpg`,
        bookTitle: `Death Masks`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden6.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df6.jpg`,
        bookTitle: `Blood Rites`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden7.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df7.jpg`,
        bookTitle: `Dead Beat`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden8.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df8.jpg`,
        bookTitle: `Proven Guilty`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden9.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df9.jpg`,
        bookTitle: `White Night`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden10.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df10.jpg`,
        bookTitle: `Small Favor`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden11.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df11.jpg`,
        bookTitle: `Turn Coat`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden12.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df12.jpg`,
        bookTitle: `Changes`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden13.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df13.jpg`,
        bookTitle: `Ghost Story`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden14.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df14.jpg`,
        bookTitle: `Cold Days`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden15.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df15.jpg`,
        bookTitle: `Skin Game`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden16.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df16.jpg`,
        bookTitle: `Peace Talks`,
    },
    {
        bookPage: `/bookPages/The Dresden Files/bDresden17.html`,
        bookSeries: `The Dresden Files`,
        bookCover: `../covers/Urban Fantasy/df17.jpg`,
        bookTitle: `Battle Ground`,
    },
    {
        bookPage: `/bookPages/American Gods/bAG1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/ag.jpg`,
        bookTitle: `American Gods`,
    },
    {
        bookPage: `/bookPages/American Gods/bAG1.5.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/ag1.5.jpg`,
        bookTitle: `Anansi Boys`,
    },
    {
        bookPage: `/bookPages/American Gods/bAG2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/ag2.jpg`,
        bookTitle: `The Monarch of the Glen`,
    },
    {
        bookPage: `/bookPages/American Gods/bAG3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/ag3.jpg`,
        bookTitle: `Black Dog`,
    },
    {
        bookPage: `/bookPages/Neil Gaiman/bN1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/N1.jpg`,
        bookTitle: `The Ocean at the End of the Lane`,
    },
    {
        bookPage: `/bookPages/Neil Gaiman/bN4.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/N4.jpg`,
        bookTitle: `Neverwhere`,
    },
    {
        bookPage: `/bookPages/Neil Gaiman/bN6.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/N6.jpg`,
        bookTitle: `Fragile Things`,
    },
    {
        bookPage: `/bookPages/Neil Gaiman/bN7.html`,
        bookSeries: `#`,
        bookCover: `../covers/Urban Fantasy/N7.jpg`,
        bookTitle: `Smoke and Mirrors`,
    },
    {
        bookPage: `/bookPages/The Witcher/bWitcher8.html`,
        bookCover: `../covers/Epic Fantasy/witcher8.jpg`,
        bookTitle: `A Season of Storms`,
      },
      {
        bookPage: `/bookPages/The Witcher/bWitcher1.1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/witcher1.1.jpg`,
        bookTitle: `The Last Wish`,
      },
      {
        bookPage: `/bookPages/The Witcher/bWitcher2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/witcher2.jpg`,
        bookTitle: `Sword of Destiny`,
      },
      {
        bookPage: `/bookPages/The Witcher/bWitcher3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/witcher3.jpg`,
        bookTitle: `Blood of Elves`,
      },
      {
        bookPage: `/bookPages/The Witcher/bWitcher4.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/witcher4.jpg`,
        bookTitle: `The Time of Contempt`,
      },
      {
        bookPage: `/bookPages/The Witcher/bWitcher5.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/witcher5.jpg`,
        bookTitle: `Baptism of Fire`,
      },
      {
        bookPage: `/bookPages/The Witcher/bWitcher6.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/witcher6.jpg`,
        bookTitle: `The Tower of Swallows`,
      },
      {
        bookPage: `/bookPages/The Witcher/bWitcher7.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/witcher7.jpg`,
        bookTitle: `The Lady of The Lake`,
      },
      {
        bookPage: `/bookPages/Covenant of Steel/bCOS1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/COS1.jpg`,
        bookTitle: `The Pariah`,
      },
      {
        bookPage: `/bookPages/Covenant of Steel/bCOS2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/COS2.jpg`,
        bookTitle: `The Martyr`,
      },
      {
        bookPage: `/bookPages/Covenant of Steel/bCOS3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/COS3.jpg`,
        bookTitle: `The Traitor`,
      },
      {
        bookPage: `/bookPages/Ravens Shadow/bRS1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/RS1.jpg`,
        bookTitle: `Blood Song`,
      },
      {
        bookPage: `/bookPages/Ravens Shadow/bRS2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/RS2.jpg`,
        bookTitle: `Tower Lord`,
      },
      {
        bookPage: `/bookPages/Ravens Shadow/bRS3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/RS3.jpg`,
        bookTitle: `Queen of Fire`,
      },
      {
        bookPage: `/bookPages/The Draconics Memoria/bTDM1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/TDM1.jpg`,
        bookTitle: `The Waking Fire`,
      },
      {
        bookPage: `/bookPages/The Draconics Memoria/bTDM2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/TDM2.jpg`,
        bookTitle: `The Legion of Flame`,
      },
      {
        bookPage: `/bookPages/The Draconics Memoria/bTDM3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/TDM3.jpg`,
        bookTitle: `The Empire of Ashes`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/strm1.jpg`,
        bookTitle: `The Way of Kings`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/strm2.jpg`,
        bookTitle: `Words of Radiance`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/strm3.1.jpg`,
        bookTitle: `Edgedancer`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight4.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/strm3.jpg`,
        bookTitle: `Oathbringer`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight5.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/strm4.1.jpg`,
        bookTitle: `Dawnshard`,
      },
      {
        bookPage: `/bookPages/The Stormlight Archive/bStormlight6.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/strm4.jpg`,
        bookTitle: `Rhythm of War`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/mist1.jpg`,
        bookTitle: `The Final Empire`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/mist2.jpg`,
        bookTitle: `The Well of Ascension`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/mist3.jpg`,
        bookTitle: `The Hero of Ages`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist4.1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/mist4.1.jpg`,
        bookTitle: `Secret History`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist4.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/mist4.jpg`,
        bookTitle: `The Alloy of Law`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist5.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/mist5.jpg`,
        bookTitle: `Shadows of Self`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist6.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/mist6.jpg`,
        bookTitle: `The Bands of Mourning`,
      },
      {
        bookPage: `/bookPages/Mistborn/bMist7.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/mist7.jpg`,
        bookTitle: `The Lost Metal`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/A Brightness Long Ago.jpg`,
        bookTitle: `A Brightness Long Ago`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/Children of Earth and Sky.jpg`,
        bookTitle: `Children of Earth and Sky`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/Lord of Emperors.jpg`,
        bookTitle: `Lord of Emperors`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK4.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/River of Stars.jpg`,
        bookTitle: `River of Stars`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK5.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/The Summer Tree.jpg`,
        bookTitle: `The Summer Tree`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK6.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/The Wandering Fire.jpg`,
        bookTitle: `The Wandering Fire`,
      },
      {
        bookPage: `/bookPages/Guy Gavriel Kay/bGGK7.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/Tigana.jpg`,
        bookTitle: `Tigana`,
      },
      {
        bookPage: `/bookPages/The Lord of the Rings/blotr1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/lotr1.jpg`,
        bookTitle: `The Hobbit`,
      },
      {
        bookPage: `/bookPages/The Lord of the Rings/blotr2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/lotr2.jpg`,
        bookTitle: `The Fellowship of the Ring`,
      },
      {
        bookPage: `/bookPages/The Lord of the Rings/blotr3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/lotr3.jpg`,
        bookTitle: `The Two Towers`,
      },
      {
        bookPage: `/bookPages/The Lord of the Rings/blotr4.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/lotr4.gif`,
        bookTitle: `The Return of the King`,
      },
      {
        bookPage: `/bookPages/The Golden Compass/bTGC1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/TGC1.jpg`,
        bookTitle: `The Golden Compass`,
      },
      {
        bookPage: `/bookPages/The Golden Compass/bTGC2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/TGC2.jpg`,
        bookTitle: `The Sublte Knife`,
      },
      {
        bookPage: `/bookPages/The Golden Compass/bTGC3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/TGC3.jpg`,
        bookTitle: `The Amber Spyglass`,
      },
      {
        bookPage: `/bookPages/The Book of Dust/bTBOD1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/TBOD1.jpg`,
        bookTitle: `La Belle Sauvage`,
      },
      {
        bookPage: `/bookPages/The Book of Dust/bTBOD2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/TBOD2.jpg`,
        bookTitle: `The Secret Commonwealth`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel0.5.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel0.5.jpg`,
        bookTitle: `New Spring`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel1.jpg`,
        bookTitle: `The Eye of the World`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel2.jpg`,
        bookTitle: `The Great Hunt`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel3.jpg`,
        bookTitle: `The Dragon Reborn`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel4.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel4.jpg`,
        bookTitle: `The Shadow Rising`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel5.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel5.jpg`,
        bookTitle: `The Fires of Heaven`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel6.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel6.jpg`,
        bookTitle: `The Lord of Chaos`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel7.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel7.jpg`,
        bookTitle: `A Crown of Swords`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel8.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel8.jpg`,
        bookTitle: `The Path of Daggers`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel9.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel9.jpg`,
        bookTitle: `Winters Heart`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel10.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel10.jpg`,
        bookTitle: `Crossroads of Twilight`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel11.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel11.jpg`,
        bookTitle: `Knife of Dreams`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel12.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel12.jpg`,
        bookTitle: `The Gathering Storm`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel13.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel13.jpg`,
        bookTitle: `Towers of Midnight`,
      },
      {
        bookPage: `/bookPages/The Wheel of Time/bwheel14.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/wheel14.jpg`,
        bookTitle: `A Memory of Light`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/FaF1.jpg`,
        bookTitle: `Assassin's Apprentice`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/FaF2.jpg`,
        bookTitle: `Royal Assassin`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/FaF3.jpg`,
        bookTitle: `Assassin's Quest`,
      },
      {
        bookPage: `/bookPages/Mad Ship Trilogy/bMSH1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/MSH1.jpg`,
        bookTitle: `Ship of Magic`,
      },
      {
        bookPage: `/bookPages/Mad Ship Trilogy/bMSH2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/MSH2.jpg`,
        bookTitle: `The Mad Ship`,
      },
      {
        bookPage: `/bookPages/Mad Ship Trilogy/bMSH3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/MSH3.jpg`,
        bookTitle: `Ship of Destiny`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF4.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/FaF4.jpg`,
        bookTitle: `The Golden Fool`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF5.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/FaF5.jpg`,
        bookTitle: `Fool's Errand`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF6.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/FaF6.jpg`,
        bookTitle: `Fool's Fate`,
      },
      {
        bookPage: `/bookPages/Dragon Quadrilogy/bDQ1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/DQ1.jpg`,
        bookTitle: `Dragon Keeper`,
      },
      {
        bookPage: `/bookPages/Dragon Quadrilogy/bDQ2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/DQ2.jpg`,
        bookTitle: `Blood of Dragons`,
      },
      {
        bookPage: `/bookPages/Dragon Quadrilogy/bDQ3html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/DQ3.jpg`,
        bookTitle: `City of Dragons`,
      },
      {
        bookPage: `/bookPages/Dragon Quadrilogy/bDQ4.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/DQ4.jpg`,
        bookTitle: `Dragon Haven`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF7.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/FaF7.jpg`,
        bookTitle: `Fool's Quest`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF8.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/FaF8.jpg`,
        bookTitle: `Fool's Assassin`,
      },
      {
        bookPage: `/bookPages/Fitz and the Fool/bFaF9.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/FaF9.jpg`,
        bookTitle:`Assassin's Fate`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking1.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/king1.jpg`,
        bookTitle: `The Gunslinger`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking2.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/king2.jpg`,
        bookTitle: `The Drawing of the Three`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking3.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/king3.jpg`,
        bookTitle: `The Waste Lands`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking4.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/king4.5.jpg`,
        bookTitle: `The Wind Through the Keyhole`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking5.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/king4.jpg`,
        bookTitle: `Wizard and Glass`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking6.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/king5.jpg`,
        bookTitle: `Wolves of the Calla`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking7.html`,
        bookSeries: `#`,
        bookCover: `../covers/Epic Fantasy/king6.jpg`,
        bookTitle: `Song of Susannah`,
      },
      {
        bookPage: `/bookPages/The Dark Tower/bking8.html`,
        bookSeries: `aa`,
        bookCover: `../covers/Epic Fantasy/king7.jpg`,
        bookTitle: `The Dark Tower`,
      },
      {
        bookPage: `/bookPages/The First Law World/bTFLW1.html`,
        bookCover: `../covers/Grimdark/TFLW1.jpg`,
        bookTitle: `The Blade Itself`,
      },
      {
        bookPage: `/bookPages/The First Law World/bTFLW2.html`,
        bookCover: `../covers/Grimdark/TFLW2.jpg`,
        bookTitle: `Before They Are Hanged`,
      },
      {
        bookPage: `/bookPages/The First Law World/bTFLW3.html`,
        bookCover: `../covers/Grimdark/TFLW3.jpg`,
        bookTitle: `Last Argument of Kings`,
      },
      {
        bookPage: `/bookPages/The First Law World/bTFLW4.html`,
        bookCover: `../covers/Grimdark/TFLW4.jpg`,
        bookTitle: `Best Served Cold`,
      },
      {
        bookPage: `/bookPages/The First Law World/bTFLW5.html`,
        bookCover: `../covers/Grimdark/TFLW5.jpg`,
        bookTitle: `The Heroes`,
      },
      {
        bookPage: `/bookPages/The First Law World/bTFLW6.html`,
        bookCover: `../covers/Grimdark/TFLW6.jpg`,
        bookTitle: `Red Country`,
      },
      {
        bookPage: `/bookPages/The First Law World/bTFLW7.html`,
        bookCover: `../covers/Grimdark/TFLW7.jpg`,
        bookTitle: `A Little Hatred`,
      },
      {
        bookPage: `/bookPages/The First Law World/bTFLW8.html`,
        bookCover: `../covers/Grimdark/TFLW8.jpg`,
        bookTitle: `The Trouble With Peace`,
      },
      {
        bookPage: `/bookPages/The First Law World/bTFLW9.html`,
        bookCover: `../covers/Grimdark/TFLW9.jpg`,
        bookTitle: `The Wisdom of Crowds`,
      },
      {
        bookPage: `/bookPages/A Song if Ice and Fire/bASoIaF1.html`,
        bookCover: `../covers/Grimdark/ASoIaF1.jpg`,
        bookTitle: `A Game of Thrones`,
      },
      {
        bookPage: `/bookPages/A Song if Ice and Fire/bASoIaF2.html`,
        bookCover: `../covers/Grimdark/ASoIaF2.jpg`,
        bookTitle: `A Clash of Kings`,
      },
      {
        bookPage: `/bookPages/A Song if Ice and Fire/bASoIaF3.html`,
        bookCover: `../covers/Grimdark/ASoIaF3.jpg`,
        bookTitle: `A Storm of Swords`,
      },
      {
        bookPage: `/bookPages/A Song if Ice and Fire/bASoIaF4.html`,
        bookCover: `../covers/Grimdark/ASoIaF4.jpg`,
        bookTitle: `A Feast for Crows`,
      },
      {
        bookPage: `/bookPages/A Song if Ice and Fire/bASoIaF5.html`,
        bookCover: `../covers/Grimdark/ASoIaF5.jpg`,
        bookTitle: `A Dance With Dragons`,
      },
      {
        bookPage: `/bookPages/The Gentleman Bastards/bgmb1.html`,
        bookCover: `../covers/Grimdark/gmb1.jpg`,
        bookTitle: `The Lies of Locke Lamora`,
      },
      {
        bookPage: `/bookPages/The Gentleman Bastards/bgmb2.html`,
        bookCover: `../covers/Grimdark/gmb2.jpg`,
        bookTitle: `Red Seas Under Red Skies`,
      },
      {
        bookPage: `/bookPages/The Gentleman Bastards/bgmb3.html`,
        bookCover: `../covers/Grimdark/gmb3.jpg`,
        bookTitle: `The Republic of Thieves`,
      },
      {
        bookPage: `/bookPages/The Gentleman Bastards/bgmb4.html`,
        bookCover: `../covers/Grimdark/gmb4.jpg`,
        bookTitle: `The Thorn of Emberlain`,
      },
      {
        bookPage: `/bookPages/Dune/bD1.html`,
        bookCover: `../covers/Sci-Fi/D1.jpg`,
        bookTitle: `Dune`,
      },
      {
        bookPage: `/bookPages/Dune/bD2.html`,
        bookCover: `../covers/Sci-Fi/D2.jpg`,
        bookTitle: `Dune Messiah`,
      },
      {
        bookPage: `/bookPages/Dune/bD3.html`,
        bookCover: `../covers/Sci-Fi/D3.jpg`,
        bookTitle: `Children of Dune`,
      },
      {
        bookPage: `/bookPages/Dune/bD4.html`,
        bookCover: `../covers/Sci-Fi/D4.jpg`,
        bookTitle: `God Emperor of Dune`,
      },
      {
        bookPage: `/bookPages/Dune/bD5.html`,
        bookCover: `../covers/Sci-Fi/D5.jpg`,
        bookTitle: `Heretics of Dune`,
      },
      {
        bookPage: `/bookPages/Dune/bD6.html`,
        bookCover: `../covers/Sci-Fi/D6.jpg`,
        bookTitle: `Chapterhouse Dune`,
      },
      {
        bookPage: `/bookPages/Isaac Asimov/bIA1.html`,
        bookCover: `../covers/Sci-Fi/IA1.jpg`,
        bookTitle: `Foundation`,
      },
      {
        bookPage: `/bookPages/Isaac Asimov/bIA2.html`,
        bookCover: `../covers/Sci-Fi/IA2.jpg`,
        bookTitle: `I, Robot`,
      },
      {
        bookPage: `/bookPages/Isaac Asimov/bIA3.html`,
        bookCover: `../covers/Sci-Fi/IA3.jpg`,
        bookTitle: `Second Foundation`,
      },
      {
        bookPage: `/bookPages/Isaac Asimov/bIA4.html`,
        bookCover: `../covers/Sci-Fi/IA4.jpg`,
        bookTitle: `The Caves of Steel`,
      },
      {
        bookPage: `/bookPages/Isaac Asimov/bIA5.html`,
        bookCover: `../covers/Sci-Fi/IA5.jpg`,
        bookTitle: `The Naked Sun`,
      },
      {
        bookPage: `/bookPages/Skyward/bSW1.html`,
        bookCover: `../covers/Sci-Fi/SW1.jpg`,
        bookTitle: `Skyward`,
      },
      {
        bookPage: `/bookPages/Skyward/bSW2.html`,
        bookCover: `../covers/Sci-Fi/SW2.jpg`,
        bookTitle: `Starsight`,
      },
      {
        bookPage: `/bookPages/Skyward/bSW3.html`,
        bookCover: `../covers/Sci-Fi/SW3.jpg`,
        bookTitle: `Skyward Flight`,
      },
      {
        bookPage: `/bookPages/Skyward/bSW4.html`,
        bookCover: `../covers/Sci-Fi/SW4.jpg`,
        bookTitle: `Cytonic`,
      },
      {
        bookPage: `/bookPages/The Reckoners/bTR1.html`,
        bookCover: `../covers/Sci-Fi/TR1.jpg`,
        bookTitle: `Steelheart`,
      },
      {
        bookPage: `/bookPages/The Reckoners/bTR1.5.html`,
        bookCover: `../covers/Sci-Fi/TR1.5.jpg`,
        bookTitle: `Mitosis`,
      },
      {
        bookPage: `/bookPages/The Reckoners/bTR2.html`,
        bookCover: `../covers/Sci-Fi/TR2.jpg`,
        bookTitle: `Firefight`,
      },
      {
        bookPage: `/bookPages/The Reckoners/bTR3.html`,
        bookCover: `../covers/Sci-Fi/TR3.jpg`,
        bookTitle: `Calamity`,
      },
      {
        bookPage: `/bookPages/Grisha Vers/bGV0.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/GV0.jpg`,
        bookTitle: `The Language of Thorns`,
      },
      {
        bookPage: `/bookPages/Grisha Vers/bGV1.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/GV1.jpg`,
        bookTitle: `Shadow and Bone`,
      },
      {
        bookPage: `/bookPages/Grisha Vers/bGV2.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/GV2.jpg`,
        bookTitle: `Siege and Storm`,
      },
      {
        bookPage: `/bookPages/Grisha Vers/bGV3.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/GV3.jpg`,
        bookTitle: `Ruin and Rising`,
      },
      {
        bookPage: `/bookPages/Grisha Vers/bGV4.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/GV4.jpg`,
        bookTitle: `Six of Crows`,
      },
      {
        bookPage: `/bookPages/Grisha Vers/bGV5.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/GV5.jpg`,
        bookTitle: `Crooked Kingdom`,
      },
      {
        bookPage: `/bookPages/Grisha Vers/bGV6.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/GV6.jpg`,
        bookTitle: `King of Scars`,
      },
      {
        bookPage: `/bookPages/Grisha Vers/bGV7.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/GV7.jpg`,
        bookTitle: `Rule of Wolves`,
      },
      {
        bookPage: `/bookPages/Neil Gaiman/bN3.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/N3.jpg`,
        bookTitle: `Stardust`,
      },
      {
        bookPage: `/bookPages/Neil Gaiman/bN5.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/N5.jpg`,
        bookTitle: `Coraline`,
      },
      {
        bookPage: `/bookPages/Sally Lockhart/bSLH1.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/SLH1.jpg`,
        bookTitle: `The Ruby in the Smoke`,
      },
      {
        bookPage: `/bookPages/Sally Lockhart/bSLH2.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/SLH2.jpg`,
        bookTitle: `The Shadow in the North`,
      },
      {
        bookPage: `/bookPages/Sally Lockhart/bSLH3.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/SLH3.jpg`,
        bookTitle: `The Tiger in the Well`,
      },
      {
        bookPage: `/bookPages/Sally Lockhart/bSLH4.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/SLH4.jpg`,
        bookTitle: `The Tin Princess`,
      },
      {
        bookPage: `/bookPages/The Hunger Games/bTHG1.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/THG1.jpg`,
        bookTitle: `The Hunger Games`,
      },
      {
        bookPage: `/bookPages/The Hunger Games/bTHG2.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/THG2.jpg`,
        bookTitle: `Catching Fire`,
      },
      {
        bookPage: `/bookPages/The Hunger Games/bTHG3.html`,
        bookCover: `../covers/YA Sci-fi & Fantasy/THG3.jpg`,
        bookTitle: `Mockingjay`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK1.html`,
        bookCover: `../covers/Horror/1922.jpg`,
        bookTitle: `1922`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK2.html`,
        bookCover: `../covers/Horror/Gerald's Game.jpg`,
        bookTitle: `Gerald's Game`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK3.html`,
        bookCover: `../covers/Horror/IT.jpg`,
        bookTitle: `IT`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK4.html`,
        bookCover: `../covers/Horror/Misery.jpg`,
        bookTitle: `Misery`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK5.html`,
        bookCover: `../covers/Horror/Night Shift.jpg`,
        bookTitle: `Night Shift`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK6.html`,
        bookCover: `../covers/Horror/Rose Madder.jpg`,
        bookTitle: `Rose Madder`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK7.html`,
        bookCover: `../covers/Horror/Carrie.jpg`,
        bookTitle: `Carrie`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK8.html`,
        bookCover: `../covers/Horror/Christine.jpg`,
        bookTitle: `Christine`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK9.html`,
        bookCover: `../covers/Horror/Dr Sleep.jpg`,
        bookTitle: `Dr Sleep`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK10.html`,
        bookCover: `../covers/Horror/Firestarter.jpg`,
        bookTitle: `Firestarter`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK11.html`,
        bookCover: `../covers/Horror/If It Bleeds.jpg`,
        bookTitle: `If It Bleeds`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK12.html`,
        bookCover: `../covers/Horror/Later.jpg`,
        bookTitle: `Later`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK13.html`,
        bookCover: `../covers/Horror/Pet Sematary.jpg`,
        bookTitle: `Pet Sematary`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK14.html`,
        bookCover: `../covers/Horror/Revival.jpg`,
        bookTitle: `Revival`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK15.html`,
        bookCover: `../covers/Horror/Salems Lot.jpg`,
        bookTitle: `Slame's Lot`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK16.html`,
        bookCover: `../covers/Horror/The Bazaar of Bad Dreams.jpg`,
        bookTitle: `The Bazaar of Bad Dreams`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK17.html`,
        bookCover: `../covers/Horror/The Dead Zone.jpg`,
        bookTitle: `The Dead Zone`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK18.html`,
        bookCover: `../covers/Horror/The Outsider.jpg`,
        bookTitle: `The Outsider`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK19.html`,
        bookCover: `../covers/Horror/The Shining.jpg`,
        bookTitle: `The Shining`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK20.html`,
        bookCover: `../covers/Horror/The Stand.jpg`,
        bookTitle: `The Stand`,
      },
      {
        bookPage: `/bookPages/Bram Stoker/bBS1.html`,
        bookCover: `../covers/Horror/Dracula.jpg`,
        bookTitle: `Dracula`,
      },
      {
        bookPage: `/bookPages/Bram Stoker/bBS2.html`,
        bookCover: `../covers/Horror/The Castle of the King.jpg`,
        bookTitle: `The Castle of The King`,
      },
      {
        bookPage: `/bookPages/Bram Stoker/bBS3.html`,
        bookCover: `../covers/Horror/A Star Trap.jpg`,
        bookTitle: `A Star Trap`,
      },
      {
        bookPage: `/bookPages/Bram Stoker/bBS4.html`,
        bookCover: `../covers/Horror/The Secret of the Growing Gold.jpg`,
        bookTitle: `The Secret of the Growing Gold`,
      },
      {
        bookPage: `/bookPages/Bram Stoker/bBS5.html`,
        bookCover: `../covers/Horror/The Burial of the Rats.jpg`,
        bookTitle: `The Burial of the Rats`,
      },
      {
        bookPage: `/bookPages/Bram Stoker/bBS6.html`,
        bookCover: `../covers/Horror/Dracula's Guest.jpg`,
        bookTitle: `Dracula's Guest`,
      },
      {
        bookPage: `/bookPages/Bram Stoker/bBS7.html`,
        bookCover: `../../covers/Horror/The Squaw.jpg`,
        bookTitle: `La Squaw`,
      },
      {
        bookPage: `/bookPages/Bram Stoker/bBS8.html`,
        bookCover: `../../covers/Horror/The Judges House.jpg`,
        bookTitle: `The Judges House`,
      },
      {
        bookPage: `/bookPages/Sherlock Holmes/bSHL1.html`,
        bookCover: `../covers/Mystery/SHL1.jpg`,
        bookTitle: `A Study in Scarlet`,
      },
      {
        bookPage: `/bookPages/Sherlock Holmes/bSHL2.html`,
        bookCover: `../covers/Mystery/SHL2.jpg`,
        bookTitle: `The Sign of Four`,
      },
      {
        bookPage: `/bookPages/Sherlock Holmes/bSHL3.html`,
        bookCover: `../covers/Mystery/SHL3.jpg`,
        bookTitle: `The Adventures of Sherlock Holmes`,
      },
      {
        bookPage: `/bookPages/Sherlock Holmes/bSHL4.html`,
        bookCover: `../covers/Mystery/SHL4.jpg`,
        bookTitle: `The Memoirs of Sherlock Holmes`,
      },
      {
        bookPage: `/bookPages/Sherlock Holmes/bSHL5.html`,
        bookCover: `../covers/Mystery/SHL5.jpg`,
        bookTitle: `The Hound of Baskervilles`,
      },
      {
        bookPage: `/bookPages/Sherlock Holmes/bSHL6html`,
        bookCover: `../covers/Mystery/SHL6.jpg`,
        bookTitle: `The Return of Sherlock Holmes`,
      },
      {
        bookPage: `/bookPages/Sherlock Holmes/bSHL7.html`,
        bookCover: `../covers/Mystery/SHL7.jpg`,
        bookTitle: `The Valley of Fear`,
      },
      {
        bookPage: `/bookPages/Sherlock Holmes/bSHL8.html`,
        bookCover: `../covers/Mystery/SHL8.jpg`,
        bookTitle: `His Last Bow`,
      },
      {
        bookPage: `/bookPages/The Handmaids Tale/bTHT1.html`,
        bookCover: `../covers/Dystopian/THT1.jpg`,
        bookTitle: `The Handmaid's Tale`,
      },
      {
        bookPage: `/bookPages/The Handmaids Tale/bTHT2.html`,
        bookCover: `../covers/Dystopian/THT2.jpg`,
        bookTitle: `The Testaments`,
      },
      {
        bookPage: `/bookPages/Neil Gaiman/bN8.html`,
        bookCover: `../covers/Comedy/N8.jpg`,
        bookTitle: `Good Omens`,
      },
      {
        bookPage: `/bookPages/Terry Pratchet/bd1.5.html`,
        bookCover: `../covers/Comedy/d1.5.jpg`,
        bookTitle: `Death and What Comes Next`,
      },
      {
        bookPage: `/bookPages/Terry Pratchet/bd1.html`,
        bookCover: `../covers/Comedy/d1.jpg`,
        bookTitle: `Mort`,
      },
      {
        bookPage: `/bookPages/Terry Pratchet/bd2.html`,
        bookCover: `../covers/Comedy/d2.jpg`,
        bookTitle: `Reaper Man`,
      },
      {
        bookPage: `/bookPages/Terry Pratchet/bd3.html`,
        bookCover: `../covers/Comedy/d3.jpg`,
        bookTitle: `Soul Music`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK21.html`,
        bookCover: `../covers/Thriller/112263.jpg`,
        bookTitle: `11/22/63`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK22.html`,
        bookCover: `../covers/Thriller/Billy Summers.jpg`,
        bookTitle: `Billy Summers`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK23.html`,
        bookCover: `../covers/Thriller/Cujo.jpg`,
        bookTitle: `Cujo`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK24.html`,
        bookCover: `../covers/Thriller/Dolores Claiborne.jpg`,
        bookTitle: `Dolores Claiborne`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK25.html`,
        bookCover: `../covers/Thriller/The Body.jpg`,
        bookTitle: `The Body`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK26.html`,
        bookCover: `../covers/Thriller/The Green Mile.jpg`,
        bookTitle: `The Green Mile`,
      },
      {
        bookPage: `/bookPages/Stephen King/bSK27.html`,
        bookCover: `../covers/Thriller/The Institute.jpg`,
        bookTitle: `The Institute`,
      },
      {
        bookPage: `/bookPages/Alex Stern/bAS1.html`,
        bookCover: `../covers/Thriller/AS1.jpg`,
        bookTitle: `Ninth House`,
      },
      {
        bookPage: `/bookPages/Alex Stern/bAS2.html`,
        bookCover: `../covers/Thriller/AS2.jpg`,
        bookTitle: `Hell Bent`,
      },
];


console.log(`gaga`,search)



search.addEventListener(`change`, (e)=>{
    newDiv.innerHTML = ``
    if (e.target.value === ``)
    {return null}
    var str = e.target.value.toLowerCase()
    var filteredArr = authorInfo.filter((x)=>{
        return x.name.toLowerCase().includes(str)
    })
    var bookArr = bookInfo.filter((x)=>{
        return x.bookTitle.toLowerCase().includes(str)
    })
    filteredArr.map((author)=>{
        const a = document.createElement(`a`)
        a.href = author.href
        a.innerHTML = author.name
        newDiv.append(a)
    })
    bookArr.map((book)=>{
        const a = document.createElement(`a`)
        a.href = book.bookPage
        a.innerHTML = book.bookTitle
        newDiv.append(a)
        
    })
    append.append(newDiv)
})



