
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/EliK.jpg`,
        bookTitle: `ELIZABETH KOLBERT`,
        bookInfo: [
            {P:`Elizabeth Kolbert (born 1961) is an American journalist, author, and visiting fellow at Williams College. She is best known for her Pulitzer Prize-winning book The Sixth Extinction: An Unnatural History,[1] and as an observer and commentator on the environment for The New Yorker magazine.[2] The Sixth Extinction was a New York Times bestseller and won the Los Angeles Times’ book prize for science and technology. Her book Under a White Sky was one of The Washington Post’s ten best books of the 2021. Kolbert is a two-time National Magazine Award winner, and was awarded the BBVA Biophilia Award for Environmental Communication in 2022. Her work has appeared in The Best American Science and Nature Writing and The Best American Essays.`},
            {P:`Kolbert served as a member of the Bulletin of the Atomic Scientists' Science and Security Board from 2017 to 2020.[3]`},
            ]
    }
]

bookPage(bookInfo);