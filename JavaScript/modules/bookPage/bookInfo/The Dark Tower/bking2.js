
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/king2.jpg`,
        bookTitle: `The Drawing of the Three`,
        bookInfo: [
            {P:`While pursuing his quest for the Dark Tower through a world that is a nightmarishly distorted mirror image of our own, Roland, the last gunslinger, encounters three mysterious doorways on the beach. Each one enters into the life of a different person living in contemporary New York.
            `},
            {P:`Here he links forces with the defiant young Eddie Dean and the beautiful, brilliant, and brave Odetta Holmes, in a savage struggle against underworld evil and otherworldly enemies.`},
            {P:`Once again, Stephen King has masterfully interwoven dark, evocative fantasy and icy realism.`},
            ]
    }
]

bookPage(bookInfo);