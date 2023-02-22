
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/SteK.jpg`,
        bookTitle: `STEPHEN KING`,
        bookInfo: [
            {P:`Stephen Edwin King (born September 21, 1947) is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. Described as the "King of Horror," a play on his surname and a reference to his high standing in pop culture,[2] his books have sold more than 350 million copies,[3] and many have been adapted into films, television series, miniseries, and comic books. King has published 64 novels, including seven under the pen name Richard Bachman, and five non-fiction books.[4] He has also written approximately 200 short stories, most of which have been published in book collections.`},
            {P:`King has received Bram Stoker Awards, World Fantasy Awards, and British Fantasy Society Awards. In 2003, the National Book Foundation awarded him the Medal for Distinguished Contribution to American Letters.[7] He has also received awards for his contribution to literature for his entire bibliography, such as the 2004 World Fantasy Award for Life Achievement and the 2007 Grand Master Award from the Mystery Writers of America.[8] In 2015, he was awarded with a National Medal of Arts from the U.S. National Endowment for the Arts for his contributions to literature.`},
            ]
    }
]

bookPage(bookInfo);