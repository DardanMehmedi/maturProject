
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/N4.jpg`,
        bookTitle: `NEVERWHERE`,
        bookInfo: [
            {P:`Under the streets of London there's a world most people could never even dream of. A city of monsters and saints, murderers and angels, knights in armour and pale girls in black velvet.`},
            {P:`"Neverwhere" is the London of the people who have fallen between the cracks.`},
            {P:`Strange destinies lie in wait in London below - a world that seems eerily familiar. But a world that is utterly bizarre, peopled by unearthly characters such as the Angel called Islington, the girl named Door, and the Earl who holds Court on a tube train.
            `},
            {P:`Now a single act of kindness has catapulted young businessman Richard Mayhew out of his safe and predictable life - and into the realms of "Neverwhere." Richard is about to find out more than he ever wanted to know about this other London. Which is a pity. Because Richard just wants to go home...`},
            ]
    }
]

bookPage(bookInfo);