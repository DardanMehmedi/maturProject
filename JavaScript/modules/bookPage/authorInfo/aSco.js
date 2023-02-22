
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/ScoL.jpg`,
        bookTitle: `SCOTT LYNCH`,
        bookInfo: [
            {P:`Scott Lynch (born April 2, 1978)[1] is an American fantasy author who wrote the Gentleman Bastard Sequence series of novels. His first novel, The Lies of Locke Lamora, was purchased by Orion Books in August 2004 and published in June 2006 under the Gollancz imprint in the United Kingdom and under the Bantam imprint in the United States. The next two novels in the series, Red Seas Under Red Skies and The Republic of Thieves, were published in 2007 and 2013, respectively.`},
            {P:`Lynch's debut novel, The Lies of Locke Lamora, was a World Fantasy Award finalist in 2007.[2] In 2007 and 2008 Lynch was nominated for the John W. Campbell Award for Best New Writer.`},
            {P:`Lynch received the Sydney J. Bounds Best Newcomer Award from the British Fantasy Society in 2008.`},
            ]
    }
]

bookPage(bookInfo);