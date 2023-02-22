
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/GV3.jpg`,
        bookTitle: `RUIN AND RISING`,
        bookInfo: [
            {P:`The capital has fallen.`},
            {P:`The Darkling rules Ravka from his shadow throne.`},
            {P:`Now the nation's fate rests with a broken Sun Summoner, a disgraced tracker, and the shattered remnants of a once-great magical army.`},
            {P:`Deep in an ancient network of tunnels and caverns, a weakened Alina must submit to the dubious protection of the Apparat and the zealots who worship her as a Saint. Yet her plans lie elsewhere, with the hunt for the elusive firebird and the hope that an outlaw prince still survives.`},
            {P:`Alina will have to forge new alliances and put aside old rivalries as she and Mal race to find the last of Morozova's amplifiers. But as she begins to unravel the Darkling's secrets, she reveals a past that will forever alter her understanding of the bond they share and the power she wields. The firebird is the one thing that stands between Ravka and destruction—and claiming it could cost Alina the very future she’s fighting for.`},
            ]
    }
]

bookPage(bookInfo);