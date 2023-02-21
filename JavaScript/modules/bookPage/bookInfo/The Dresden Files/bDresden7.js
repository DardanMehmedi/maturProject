
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/df7.jpg`,
        bookTitle: `Dead Beat`,
        bookInfo: [{
            P:`Meet Harry Dresden, Chicago's first (and only) Wizard P.I. Turns out the 'everyday' world is full of strange and magical things - and most of them don't play well with humans. That's where Harry comes in.`},
            {P:`Luckily, however, he's not alone. Although most people don't believe in magic, the Chicago P.D. has a Special Investigations department, headed by his good friend Karrin Murphy. They deal with the . . . stranger cases. It's down to Karrin that Harry sneaks into Graceland Cemetery to meet a vampire named Mavra. Mavra has evidence that would destroy Karrin's career, and her demands are simple. She wants the Word of Kemmler - and all the power that comes with it. But first, Harry's keen to know what he'd be handing over. Before long he's racing against time, and six necromancers, to get the Word. And to prevent a Halloween that would truly wake the dead.`},
            {P:`Magic - it can get a guy killed.`
        }]
    }
]

bookPage(bookInfo);