
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/king5.jpg`,
        bookTitle: `Wolves of the Calla`,
        bookInfo: [
            {P:`Roland and his tet have just returned to the path of the Beam when they discover that they are being followed by a group of inexperienced trackers. The trackers are from the town of Calla Bryn Sturgis, and they desperately need the help of gunslingers. Once every generation, a band of masked riders known as the Wolves gallop out of the dark land of Thunderclap to steal one half of all the twins born in the Callas. When the children are returned, they are roont, or mentally and physically ruined. In less than a month, the Wolves will raid again. In exchange for Roland’s aid, Father Callahan—a priest originally from our world—offers to give Roland a powerful but evil seeing sphere, a sinister globe called Black Thirteen which he has hidden below the floorboards of his church. Not only must Roland and his tet discover a way to defeat the invincible Wolves, but they must also return to New York so that they can save our world’s incarnation of the Dark Tower from the machinations of the evil Sombra Corporation.`},
            ]
    }
]

bookPage(bookInfo);