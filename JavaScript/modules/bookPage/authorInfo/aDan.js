
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/DS.jpg`,
        bookTitle: `DAN SIMONS`,
        bookInfo: [
            {P:`Dan Simmons (born April 4, 1948) is an American science fiction and horror writer. He is the author of the Hyperion Cantos and the Ilium/Olympos cycles, among other works which span the science fiction, horror, and fantasy genres, sometimes within a single novel. Simmons's genre-intermingling Song of Kali (1985) won the World Fantasy Award.[1] He also writes mysteries and thrillers, some of which feature the continuing character Joe Kurtz.`},
            {P:`Born in Peoria, Illinois, Simmons received a B.A. in English from Wabash College in 1970 and, in 1971, a Masters in Education from Washington University in St. Louis.[2]`},
            {P:`He soon started writing short stories, although his career did not take off until 1982, when, through Harlan Ellison's help, his short story "The River Styx Runs Upstream" was published and awarded first prize in a Twilight Zone Magazine story competition, and he was taken on as a client by Ellison's agent, Richard Curtis. Simmons's first novel, Song of Kali, was released in 1985.[2]

            He worked in elementary education until 1989.[2]`},
            ]
    }
]

bookPage(bookInfo);