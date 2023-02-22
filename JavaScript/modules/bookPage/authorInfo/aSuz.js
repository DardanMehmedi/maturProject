
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/SuzC.jpg`,
        bookTitle: `SUZANE COLLINS`,
        bookInfo: [
            {P:`Suzanne Collins (born August 10, 1962) is an American author and television writer. She is known as the author of the book series The Underland Chronicles and The Hunger Games.`},
            {P:`Suzanne Collins was born on August 10, 1962, in Hartford, Connecticut, to Jane Brady Collins (born 1931) and Lieutenant Colonel Michael John Collins (1931–2003),[2] a U.S. Air Force officer who served in the Korean and the Vietnam War. She is the youngest of four children, who include Kathryn (born 1957), Andrew (born 1958), and Joan (born 1960). As the daughter of a military officer, she and her family were constantly moving. She spent her childhood in the eastern United States.`},
            {P:`Collins graduated from the Alabama School of Fine Arts in Birmingham in 1980 as a Theater Arts major.[4] She completed her bachelor of arts degree from Indiana University Bloomington in 1985 with a double major in theater and telecommunications.[5][6][7] In 1989, Collins earned her Master of Fine Arts in dramatic writing from the New York University Tisch School of the Arts.`},
            ]
    }
]

bookPage(bookInfo);