
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/GRRM.jpg`,
        bookTitle: `GEORGE R.R. MARTIN`,
        bookInfo: [
            {P:`George Raymond Richard Martin[1] (born George Raymond Martin; September 20, 1948),[2] also known as GRRM,[3] is an American novelist, screenwriter, television producer and short story writer. He is the author of the series of epic fantasy novels A Song of Ice and Fire, which were adapted into the Emmy Award-winning HBO series Game of Thrones (2011–2019) and its prequel series House of the Dragon (2022–present). He also helped create the Wild Cards anthology series, and contributed worldbuilding for the 2022 video game Elden Ring.`},
            {P:`In 2005, Lev Grossman of Time called Martin "the American Tolkien",[4][5][6] and in 2011, he was included on the annual Time 100 list of the most influential people in the world.[7][8] He is a longtime citizen of Santa Fe, New Mexico, where he helped fund Meow Wolf and owns the Jean Cocteau Cinema.[9][10][11][12] The city commemorates March 29 as George R. R. Martin Day.`},

            ]
    }
]

bookPage(bookInfo);