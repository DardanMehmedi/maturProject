
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/JoeA.jpg`,
        bookTitle: `JOE ABERCROMBIE`,
        bookInfo: [
            {P:`Joseph Edward Abercrombie (born December 31, 1974) is a British fantasy writer and film editor. He is the author of The First Law trilogy, as well as other fantasy books in the same setting and a trilogy of young adult novels. His novel Half a King won the 2015 Locus Award for best young adult book.[1][2]`},
            {P:`Abercrombie was born in Lancaster, Lancashire, England. He was educated at Lancaster Royal Grammar School and Manchester University, where he studied psychology.[3] He has a wife, Lou.[4]`},
            {P:`Abercrombie has been an avid player of video games since his childhood. In an interview with Edge magazine, Abercrombie stated that video games have been a big influence on his writing, including early interest in text-based adventure games and historically based strategy games such as Civilization and Age of Empires. Other favorite games of Abercrombie's include Elite, Dungeon Master, Street Fighter II, and Red Dead Redemption.[5]`},
            ]
    }
]

bookPage(bookInfo);