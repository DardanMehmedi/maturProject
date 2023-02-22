
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/GV4.jpg`,
        bookTitle: `SIX OF CROWS`,
        bookInfo: [
            {P:`Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone. . . .`},
            {P:`A convict with a thirst for revenge`},
            {P:`A sharpshooter who can’t walk away from a wager`},
            {P:`A runaway with a privileged past`},
            {P:`A spy known as the Wraith`},
            {P:`A Heartrender using her magic to survive the slums`},
            {P:`A thief with a gift for unlikely escapes`},
            {P:`Kaz’s crew is the only thing that might stand between the world and destruction—if they don’t kill each other first.`},
            ]
    }
]

bookPage(bookInfo);