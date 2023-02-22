
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/GV5.jpg`,
        bookTitle: `CROOKED KINGDOM`,
        bookInfo: [
            {P:`Welcome to the world of the Grisha.`},
            {P:`Kaz Brekker and his crew of deadly outcasts have just pulled off a heist so daring even they didn't think they'd survive. But instead of divvying up a fat reward, they're right back to fighting for their lives.`},
            {P:`Double-crossed and badly weakened, the crew is low on resources, allies, and hope. As powerful forces from around the world descend on Ketterdam to root out the secrets of the dangerous drug known as jurda parem, old rivals and new enemies emerge to challenge Kaz's cunning and test the team's fragile loyalties.`},
            {P:`A war will be waged on the city's dark and twisting streets - a battle for revenge and redemption that will decide the fate of the Grisha world.`},
            ]
    }
]

bookPage(bookInfo);