
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/GV7.jpg`,
        bookTitle: `RULE OF WOLVES`,
        bookInfo: [
            {P:`The Demon King. As Fjerda's massive army prepares to invade, Nikolai Lantsov will summon every bit of his ingenuity and charm—and even the monster within—to win this fight. But a dark threat looms that cannot be defeated by a young king's gift for the impossible.
            `},
            {P:`The Stormwitch. Zoya Nazyalensky has lost too much to war. She saw her mentor die and her worst enemy resurrected, and she refuses to bury another friend. Now duty demands she embrace her powers to become the weapon her country needs. No matter the cost.`},
            {P:`The Queen of Mourning. Deep undercover, Nina Zenik risks discovery and death as she wages war on Fjerda from inside its capital. But her desire for revenge may cost her country its chance at freedom and Nina the chance to heal her grieving heart.`},
            {P:`King. General. Spy. Together they must find a way to forge a future in the darkness. Or watch a nation fall.`},
            ]
    }
]

bookPage(bookInfo);