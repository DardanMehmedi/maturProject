
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/NeiG.jpg`,
        bookTitle: `NEIL GAIMAN`,
        bookInfo: [
            {P:`Neil Richard MacKinnon Gaiman[2] /ˈɡeɪmən/[3] (born Neil Richard Gaiman;[2] born 10 November 1960)[4] is an English author of short fiction, novels, comic books, graphic novels, nonfiction, audio theatre, and films. His works include the comic book series The Sandman and novels Stardust, Anansi Boys, American Gods, Coraline, and The Graveyard Book. He has won numerous awards, including the Hugo, Nebula, and Bram Stoker awards, as well as the Newbery and Carnegie medals. He is the first author to win both the Newbery and the Carnegie medals for the same work, The Graveyard Book (2008).[5][6] In 2013, The Ocean at the End of the Lane was voted Book of the Year in the British National Book Awards.[7] It was later adapted into a critically acclaimed stage play at the Royal National Theatre in London, England that The Independent called "...theatre at its best".[8]`},
            ]
    }
]

bookPage(bookInfo);