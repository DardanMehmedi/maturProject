import { sideBar } from "./sideBar.js";

const authorInfo = [
  {
    href: `Authors/AndS.html`,
    name: `Andrzej Sapkowski`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/BarO.html`,
    name: `Barack Obama`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/BramS.html`,
    name: `Bram Stoker`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/BraS.html`,
    name: `Brandon Sanderson`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/CarC.html`,
    name: `Carlo Collodi`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/ChaD.html`,
    name: `Charles Dickens`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/JamW.html`,
    name: `Dr. James Watson`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/EdwS.html`,
    name: `Edwards W. Said`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/EliK.html`,
    name: `Elizabeth Kolbert`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/ScoF.html`,
    name: `F.Scott Fitzgerald`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/FraH.html`,
    name: `Frank Herbert`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/GRRM.html`,
    name: `George R.R Martin`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/GerG.html`,
    name: `Germaine Greer`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/GGK.html`,
    name: `GuyGavriel Kay`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/HomE.html`,
    name: `Homer`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/JmbA.html`,
    name: `J.M. Barrie`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/JRRT.html`,
    name: `J.R.RTolkien`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/JacL.html`,
    name: `Jack London`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/JimB.html`,
    name: `Jim Butcher`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/JoaD.html`,
    name: `Joan Didion`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/JoeA.html`,
    name: `Joe Abercrombie`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/LeiB.html`,
    name: `Leigh Bardugo`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/LeoT.html`,
    name: `Leo Tolstoy`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/LewC.html`,
    name: `Lewis Carroll`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/MarS.html`,
    name: `Mary Shelley`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/MicH.html`,
    name: `Michael Herr`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/NaoK.html`,
    name: `Naomi Klein`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/NikC.html`,
    name: `Nik Cohn`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/OliS.html`,
    name: `Oliver Sacks`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/RicD.html`,
    name: `Richard Dawkins`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/RobJ.html`,
    name: `Robert Jordan`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/RobS.html`,
    name: `Robert Louis Stevenson`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/RobH.html`,
    name: `Robin Hobb`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/Scol.html`,
    name: `Scott Lynch`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/SeaH.html`,
    name: `Seasmus Heaney`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/SirD.html`,
    name: `Sir Arthur Conan Doyle`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/SteH.html`,
    name: `Stephen Hawking`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/SteK.html`,
    name: `Stephen King`,
    class: `FictionAuthors`,
  },
  {
    href: `Authors/SunT.html`,
    name: `Sun Tzu`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/TedH.html`,
    name: `Ted Hughes`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/TomW.html`,
    name: `Tom Wolfe`,
    class: `NonFictionAuthors`,
  },
  {
    href: `Authors/VicH.html`,
    name: `Victor Hugo`,
    class: `ClassicAuthors`,
  },
  {
    href: `Authors/WilS.html`,
    name: `William Shakespeare`,
    class: `ClassicAuthors`,
  },
];

const filterArray = [
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
  {
    id: `rest`,
    class: `snob kakur`,
    text: ``,
  },
];

sideBar(authorInfo, filterArray);
changeTheme();
sleepBtn.addEventListener(`click`, () => {
  localStorage.setItem(`theme`, theme === `dark` ? `light` : `dark`);
  theme = localStorage.getItem(`theme`);
  console.log(`theme`, theme);
  changeTheme();
});
