
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/mist7.jpg`,
        bookTitle: `THE LOST METAL`,
        bookInfo: [
            {P:`For years, frontier lawman turned big-city senator Waxillium Ladrian has hunted the shadowy organization the Set—with his late uncle and his sister among their leaders—since they started kidnapping people with the power of Allomancy in their bloodlines. When Detective Marasi Colms and her partner, Wayne, find stockpiled weapons bound for the Outer City of Bilming, this opens a new lead. Conflict between the capital, Elendel, and the Outer Cities only favors the Set, and their tendrils now reach to the Elendel Senate—whose corruption Wax and his wife, Steris, have sought to expose—and Bilming is even more entangled.`},
            {P:`After Wax discovers a new type of explosive that can unleash unprecedented destruction and realizes that the Set must already have it, an immortal kandra serving Scadrial's god, Harmony, reveals that Bilming has fallen under the influence of another god: Trell, worshipped by the Set. And Trell isn't the only factor at play from the larger Cosmere—Marasi is recruited by offworlders with strange abilities who claim their goal is to protect Scadrial . . . at any cost.`},
            {P:`
            Wax must choose whether to set aside his rocky relationship with God and once again become the Sword that Harmony has groomed him to be. If no one steps forward to be the hero Scadrial needs, the planet and its millions of people will come to a sudden and calamitous ruin.`},
        ]
    }
]

bookPage(bookInfo);