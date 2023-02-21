
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/df6.jpg`,
        bookTitle: `Blood Rites`,
        bookInfo: [{
            P:`HARRY DRESDEN — WIZARD`},
            {P:`For Harry Dresden, Chicago's only professional wizard, there have been worse assignments than going undercover on the set of an adult film. Dodging flaming monkey poo, for instance. Or going toe-to-leaf with a walking plant monster. Still, there is something more troubling than usual about his newest case. The film's producer believes he's the target of a sinister entropy curse, but it's the women around him who are dying, in increasingly spectacular ways.
            `},
            {P:`Harry is doubly frustrated because he got involved with this bizarre mystery only as a favor to Thomas, his flirtatious, self-absorbed vampire acquaintance of dubious integrity. Thomas has a personal stake in the case Harry can't quite figure out, until his investigation leads him straight to Thomas' oversexed vampire family. Harry is about to discover that Thomas' family tree has been hiding a shocking secret; a revelation that will change Harry's life forever.`
        }]
    }
]

bookPage(bookInfo);