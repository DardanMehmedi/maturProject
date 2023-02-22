
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/TH.jpg`,
        bookTitle: `TED HUGHES`,
        bookInfo: [
            {P:`Edward James Hughes OM OBE FRSL (17 August 1930 – 28 October 1998)[1] was an English poet, translator, and children's writer. Critics frequently rank him as one of the best poets of his generation and one of the twentieth century's greatest writers. He was appointed Poet Laureate in 1984 and held the office until his death. In 2008 The Times ranked Hughes fourth on its list of "The 50 greatest British writers since 1945".`},
            {P:`Hughes was married to American poet Sylvia Plath from 1956 until her death by suicide in 1963 at the age of 30.[3] His last poetic work, Birthday Letters (1998), explored their relationship.`},
            ]
    }
]

bookPage(bookInfo);