
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/AndW.jpg`,
        bookTitle: `ANDY WEIR`,
        bookInfo: [
            {P:`Andrew Taylor Weir (born June 16, 1972) is an American novelist and former computer programmer. His 2011 novel The Martian was adapted into the 2015 film of the same name directed by Ridley Scott. He received the John W. Campbell Award for Best New Writer in 2016 and his 2021 novel Project Hail Mary was a finalist for the 2022 Hugo Award for Best Novel.`},
            {P:`Weir was raised in Milpitas, California. His father, John Weir, was a physicist at Sandia National Laboratories, and his mother was an electrical engineer. He was an only child, and his parents divorced when he was eight.[3] Weir grew up reading classic science fiction such as the works of Arthur C. Clarke and Isaac Asimov.[1] At the age of 15, he began working as a computer programmer for Sandia.[6]`},
            {P:`After high school, Weir studied computer science at the University of California, San Diego, though he did not graduate. He worked as a programmer for several software companies, including AOL, Palm, MobileIron, and Blizzard, where he worked on the video game Warcraft II: Tides of Darkness.[1][7]`},
            ]
    }
]

bookPage(bookInfo);