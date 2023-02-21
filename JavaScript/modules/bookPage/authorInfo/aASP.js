
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/AndS.jpg`,
        bookTitle: `Andrzej `,
        bookInfo: [
            {P:`Andrzej Sapkowski, born June 21, 1948 in Łódź, is a Polish fantasy writer. Sapkowski studied economics, and before turning to writing, he had worked as a senior sales representative for a foreign trade company. His first short story, The Witcher (Wiedźmin), was published in Fantastyka, Poland's leading fantasy literary magazine, in 1986 and was enormously successful both with readers and critics. Sapkowski has created a cycle of tales based on the world of The Witcher, comprising three collections of short stories and five novels. This cycle and his many other works have made him one of the best-known fantasy authors in Poland in the 1990s.`},
            {P:`The main character of The Witcher (alternative translation: The Hexer) is Geralt, a mutant assassin who has been trained since childhood to hunt down and destroy monsters. Geralt exists in an ambiguous moral universe, yet manages to maintain his own coherent code of ethics. At the same time cynical and noble, Geralt has been compared to Raymond Chandler's signature character Philip Marlowe. The world in which these adventures take place is heavily influenced by Slavic mythology.`},
            {P:`Sapkowski has won five Zajdel Awards, including three for short stories "Mniejsze zło" (Lesser Evil) (1990), "Miecz przeznaczenia" (Sword of Destiny) (1992) and "W leju po bombie" (In a Bomb Crater) (1993).`},
            ]
    }
]

bookPage(bookInfo);