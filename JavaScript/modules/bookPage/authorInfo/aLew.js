
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/LC.jpg`,
        bookTitle: `LEWIS CAROLL`,
        bookInfo: [
            {P:`Charles Lutwidge Dodgson (/ˈlʌtwɪdʒ ˈdɒdʒsən/ LUT-wij DOJ-sən; 27 January 1832 – 14 January 1898), better known by his pen name Lewis Carroll, was an English author, poet and mathematician. His most notable works are Alice's Adventures in Wonderland (1865) and its sequel Through the Looking-Glass (1871). He was noted for his facility with word play, logic, and fantasy. His poems Jabberwocky (1871) and The Hunting of the Snark (1876) are classified in the genre of literary nonsense.`},
            {P:`Carroll came from a family of high-church Anglicans, and developed a long relationship with Christ Church, Oxford, where he lived for most of his life as a scholar and teacher. Alice Liddell, the daughter of Christ Church's dean Henry Liddell, is widely identified as the original inspiration for Alice in Wonderland, though Carroll always denied this.`},
            {P:`An avid puzzler, Carroll created the word ladder puzzle (which he then called "Doublets"), which he published in his weekly column for Vanity Fair magazine between 1879 and 1881. In 1982 a memorial stone to Carroll was unveiled at Poets' Corner in Westminster Abbey. There are societies in many parts of the world dedicated to the enjoyment and promotion of his works.`},
            ]
    }
]

bookPage(bookInfo);