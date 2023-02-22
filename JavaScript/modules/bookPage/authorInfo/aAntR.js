
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/AntR.jpg`,
        bookTitle: `ANTHONY RYAN`,
        bookInfo: [
            {P:`Anthony Ryan is a Scottish writer of fantasy and science fiction, best known for his books about Vaelin Al Sorna, which started in 2013 with Blood Song. He worked as a full-time researcher before switching to full-time writing. He currently lives in London, England. He has a degree in Medieval History.`},
            {P:`Anthony Ryan was born in Scotland in 1970 but has spent much of his adult life in London.[1] Anthony Ryan initially self-published Blood Song,[2] however, he switched to major publication when Penguin books offered him a three-book deal in May 2012. He started writing full-time after the success of the publication. He continues to self-publish a series of SF Noir novellas.`},
            ]
    }
]

bookPage(bookInfo);