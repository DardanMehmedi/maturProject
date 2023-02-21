import { sidebar } from "./newSideBar.js";
import {changeAuthors} from './NewSideBar.js';

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

const filterArray = [
  {
    id: `rest`,
    class: `snob`,
    text: `ALL`,
  },
  {
    id: `fButton`,
    class: `snob`,
    text: `FICTION`,
  },
  {
    id: `nFButton`,
    class: `snob`,
    text: `NON-FICTION`,
  },
  {
    id: `cButton`,
    class: `snob`,
    text: `CLASSICS`,
  },
 
];



sidebar(authorInfo, filterArray);
changeAuthors();

