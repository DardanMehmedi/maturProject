
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/mist4.1.jpg`,
        bookTitle: `SECRET HISTORY`,
        bookInfo: [
            {P:`Mistborn: Secret History is a companion story to the original Mistborn trilogy. As such, it contains HUGE SPOILERS for the books Mistborn (The Final Empire), The Well of Ascension, and The Hero of Ages. It also contains very minor spoilers for the book The Bands of Mourning. Mistborn: Secret History builds upon the characterization, events, and worldbuilding of the original trilogy. Reading it without that background will be a confusing process at best. In short, this isn’t the place to start your journey into Mistborn. (Though if you have read the trilogy—but it has been a while—you should be just fine, so long as you remember the characters and the general plot of the books.) Saying anything more here risks revealing too much. Even knowledge of this story’s existence is, in a way, a spoiler. There’s always another secret.`},
        ]
    }
]

bookPage(bookInfo);