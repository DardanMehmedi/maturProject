
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/GV6.jpg`,
        bookTitle: `KING OF SCARS`,
        bookInfo: [
            {P:`Face your demons... or feed them.`},
            {P:`The dashing young king, Nikolai Lantsov, has always had a gift for the impossible. No one knows what he endured in his country's bloody civil war--and he intends to keep it that way. Now, as enemies gather at his weakened borders, Nikolai must find a way to refill Ravka's coffers, forge new alliances, and stop a rising threat to the once-great Grisha Army.`},
            {P:`Yet with every day a dark magic within him grows stronger, threatening to destroy all he has built. With the help of a young monk and a legendary Grisha general, Nikolai will journey to the places in Ravka where the deepest magic survives to vanquish the terrible legacy inside him. He will risk everything to save his country and himself. But some secrets aren't meant to stay buried--and some wounds aren't meant to heal.`},
            ]
    }
]

bookPage(bookInfo);