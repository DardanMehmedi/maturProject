
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/df2.jpg`,
        bookTitle: `Fool Moon`,
        bookInfo: [{
            P:`HARRY DRESDEN — WIZARD`},
            {P:`Lost Items Found. Paranormal Investigations. Consulting. Advice. Reasonable Rates. No Love Potions, Endless Purses, or Other Entertainment.`},
            {P:`Business has been slow. Okay, business has been dead. And not even of the undead variety. You would think Chicago would have a little more action for the only professional wizard in the phone book. But lately, Harry Dresden hasn't been able to dredge up any kind of work — magical or mundane.`},
            {P:`But just when it looks like he can't afford his next meal, a murder comes along that requires his particular brand of supernatural expertise.`},
            {P:`A brutally mutilated corpse. Strange-looking paw prints. A full moon. Take three guesses--and the first two don't count...`
        }]
    }
]

bookPage(bookInfo);