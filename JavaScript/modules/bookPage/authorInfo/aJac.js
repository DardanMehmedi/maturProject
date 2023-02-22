
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/JL.jpg`,
        bookTitle: `JACK LONDON`,
        bookInfo: [
            {P:`ohn Griffith Chaney[1] (January 12, 1876 – November 22, 1916), better known as Jack London,[2][3][4][5] was an American novelist, journalist and activist. A pioneer of commercial fiction and American magazines, he was one of the first American authors to become an international celebrity and earn a large fortune from writing.[6] He was also an innovator in the genre that would later become known as science fiction.`},
            {P:`London was part of the radical literary group "The Crowd" in San Francisco and a passionate advocate of animal rights, workers’ rights and socialism.[8][9] London wrote several works dealing with these topics, such as his dystopian novel The Iron Heel, his non-fiction exposé The People of the Abyss, War of the Classes, and Before Adam.`},
            {P:`His most famous works include The Call of the Wild and White Fang, both set in Alaska and the Yukon during the Klondike Gold Rush, as well as the short stories "To Build a Fire", "An Odyssey of the North", and "Love of Life". He also wrote about the South Pacific in stories such as "The Pearls of Parlay", and "The Heathen".`},
            ]
    }
]

bookPage(bookInfo);