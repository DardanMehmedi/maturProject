
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/df3.jpg`,
        bookTitle: `Grave Peril`,
        bookInfo: [{
            P:`HARRY DRESDEN — WIZARD`},
            {P:`Lost Items Found. Paranormal Investigations. Consulting. Advice. Reasonable Rates. No Love Potions, Endless Purses, or Other Entertainment.`},
            {P:`Harry Dresden has faced some pretty terrifying foes during his career. Giant scorpions. Oversexed vampires. Psychotic werewolves. It comes with the territory when you're the only professional wizard in the Chicago-area phone book.`},
            {P:`But in all Harry's years of supernatural sleuthing, he's never faced anything like this: The spirit world has gone postal. All over Chicago, ghosts are causing trouble - and not just of the door-slamming, boo-shouting variety. These ghosts are tormented, violent, and deadly. Someone - or something - is purposely stirring them up to wreak unearthly havoc. But why? And why do so many of the victims have ties to Harry? If Harry doesn't figure it out soon, he could wind up a ghost himself....`},
            {P:`Magic - it can get a guy killed.`
        }]
    }
]

bookPage(bookInfo);