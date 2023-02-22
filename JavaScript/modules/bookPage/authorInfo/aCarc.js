
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/CC.jpg`,
        bookTitle: `CARLO COLLODI`,
        bookInfo: [
            {P:`Carlo Lorenzini (24 November 1826 – 26 October 1890), better known by the pen name Carlo Collodi (Italian: [ˈkarlo kolˈlɔːdi]), was an Italian author, humourist,[1] and journalist,[2] widely known for his fairy tale novel The Adventures of Pinocchio.`},
            {P:`Collodi was born in Florence on 24 November 1826. His mother, Angiolina Orzali Lorenzini, was a seamstress from Collodi, the town from which he later took the pen name, and his father, Domenico Lorenzini, was a cook. Both parents worked for the marchese Ginori Lisci.[1] Carlo was the eldest child in the family[3] and he had ten siblings but seven died at a young age. He spent most of his childhood in the town of Collodi where his mother was born. He lived there with his maternal grandmother. After attending primary school, he was sent to study at a theological seminary in Colle Val d’Elsa.[3] An account at the seminary shows that the marchese had offered financial aid, but the boy found that he did not want to be a priest so he continued his education at the College of the Scolopi Fathers in Florence.[4] In 1844 he started working at the Florentine bookstore Libreria Piatti, where he assisted Giuseppe Aiazzi, a prominent Italian manuscript specialist.[4]`},
            ]
    }
]

bookPage(bookInfo);