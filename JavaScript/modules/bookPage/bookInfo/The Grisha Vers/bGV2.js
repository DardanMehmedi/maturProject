
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/GV2.jpg`,
        bookTitle: `SIEGE AND STORM`,
        bookInfo: [
            {P:`Hunted across the True Sea, haunted by the lives she took on the Fold, Alina must try to make a life with Mal in an unfamiliar land, all while keeping her identity as the Sun Summoner a secret. But she can’t outrun her past or her destiny for long.`},
            {P:`The Darkling has emerged from the Shadow Fold with a terrifying new power and a dangerous plan that will test the very boundaries of the natural world. With the help of a notorious privateer, Alina returns to the country she abandoned, determined to fight the forces gathering against Ravka. But as her power grows, Alina slips deeper into the Darkling’s game of forbidden magic, and farther away from Mal. Somehow, she will have to choose between her country, her power, and the love she always thought would guide her—or risk losing everything to the oncoming storm.`},
            ]
    }
]

bookPage(bookInfo);