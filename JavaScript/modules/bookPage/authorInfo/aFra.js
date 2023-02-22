
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/FraH.jpg`,
        bookTitle: `FRANK HERBERT`,
        bookInfo: [
            {P:`Franklin Patrick Herbert Jr. (October 8, 1920 – February 11, 1986) was an American science fiction author best known for the 1965 novel Dune and its five sequels. Though he became famous for his novels, he also wrote short stories and worked as a newspaper journalist, photographer, book reviewer, ecological consultant, and lecturer.`},
            {P:`The Dune saga, set in the distant future, and taking place over millennia, explores complex themes, such as the long-term survival of the human species, human evolution, planetary science and ecology, and the intersection of religion, politics, economics and power in a future where humanity has long since developed interstellar travel and settled many thousands of worlds. Dune is the best-selling science fiction novel of all time,[3] and the entire series is considered to be among the classics of the genre.`},

            ]
    }
]

bookPage(bookInfo);