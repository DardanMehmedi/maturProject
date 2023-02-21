
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/df15.jpg`,
        bookTitle: `Skin Game`,
        bookInfo: [{
            P:`Harry Dresden, Chicago's only professional wizard, is about to have a very bad day…`},
            {P:`Because as Winter Knight to the Queen of Air and Darkness, Harry never knows what the scheming Mab might want him to do. Usually, it’s something awful.`},
            {P:`He doesn’t know the half of it…`},
            {P:`Mab has just traded Harry’s skills to pay off one of her debts. And now he must help a group of supernatural villains—led by one of Harry’s most dreaded and despised enemies, Nicodemus Archleone—to break into the highest-security vault in town, so that they can then access the highest-security vault in the Nevernever.`},
            {P:`It's a smash and grab job to recover the literal Holy Grail from the vaults of the greatest treasure hoard in the supernatural world—which belongs to the one and only Hades, Lord of the freaking Underworld and generally unpleasant character. Worse, Dresden suspects that there is another game afoot that no one is talking about. And he's dead certain that Nicodemus has no intention of allowing any of his crew to survive the experience. Especially Harry.`},
            {P:`Dresden's always been tricky, but he's going to have to up his backstabbing game to survive this mess—assuming his own allies don’t end up killing him before his enemies get the chance…`},
        ]
    }
]

bookPage(bookInfo);