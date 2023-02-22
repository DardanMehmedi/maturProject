import { sidebar } from "./newSideBar.js";
import {changeAuthors} from './NewSideBar.js';

const authorInfo = [
  {
    href: `/authorPages/bASP.html`,
    name: `Andrzej Sapkowski`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bAntR.html`,
    name: `Anthony Ryan`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bBar.html`,
    name: `Barack Obama`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bBram.html`,
    name: `Bram Stoker`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bBra.html`,
    name: `Brandon Sanderson`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bCarc.html`,
    name: `Carlo Collodi`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bCha.html`,
    name: `Charles Dickens`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bJamW.html`,
    name: `Dr. James Watson`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bEdw.html`,
    name: `Edwards W. Said`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bEli.html`,
    name: `Elizabeth Kolbert`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bSco.html`,
    name: `F.Scott Fitzgerald`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bFra.html`,
    name: `Frank Herbert`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bGRRM.html`,
    name: `George R.R Martin`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bGer.html`,
    name: `Germaine Greer`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bGGK.html`,
    name: `GuyGavriel Kay`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bHom.html`,
    name: `Homer`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bJmb.html`,
    name: `J.M. Barrie`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bJRR.html`,
    name: `J.R.RTolkien`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bJac.html`,
    name: `Jack London`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bJim.html`,
    name: `Jim Butcher`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bJoa.html`,
    name: `Joan Didion`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bJoe.html`,
    name: `Joe Abercrombie`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bLei.html`,
    name: `Leigh Bardugo`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bLeo.html`,
    name: `Leo Tolstoy`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bLew.html`,
    name: `Lewis Carroll`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bMar.html`,
    name: `Mary Shelley`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bMic.html`,
    name: `Michael Herr`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bNao.html`,
    name: `Naomi Klein`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bNei.html`,
    name: `Neil Gaiman`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bNik.html`,
    name: `Nik Cohn`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bOli.html`,
    name: `Oliver Sacks`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bPP.html`,
    name: `Philip Pullman`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bRic.html`,
    name: `Richard Dawkins`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bRobJ.html`,
    name: `Robert Jordan`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bRobS.html`,
    name: `Robert Louis Stevenson`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bRob.html`,
    name: `Robin Hobb`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bScoL.html`,
    name: `Scott Lynch`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bSea.html`,
    name: `Seasmus Heaney`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bSir.html`,
    name: `Sir Arthur Conan Doyle`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bSte.html`,
    name: `Stephen Hawking`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bSteK.html`,
    name: `Stephen King`,
    class: `FictionAuthors`,
  },
  {
    href: `/authorPages/bSun.html`,
    name: `Sun Tzu`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bTed.html`,
    name: `Ted Hughes`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bTom.html`,
    name: `Tom Wolfe`,
    class: `NonFictionAuthors`,
  },
  {
    href: `/authorPages/bVic.html`,
    name: `Victor Hugo`,
    class: `ClassicAuthors`,
  },
  {
    href: `/authorPages/bWil.html`,
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

