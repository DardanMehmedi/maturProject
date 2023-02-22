
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/MarA.jpg`,
        bookTitle: `MARGRET ATWOOD`,
        bookInfo: [
            {P:`Margaret Eleanor Atwood CC OOnt CH FRSC FRSL (born November 18, 1939) is a Canadian poet, novelist, literary critic, essayist, teacher, environmental activist, and inventor. Since 1961, she has published 18 books of poetry, 18 novels, 11 books of non-fiction, nine collections of short fiction, eight children's books, and two graphic novels, and a number of small press editions of both poetry and fiction. Atwood has won numerous awards and honors for her writing, including two Booker Prizes, the Arthur C. Clarke Award, the Governor General's Award, the Franz Kafka Prize, Princess of Asturias Awards, and the National Book Critics and PEN Center USA Lifetime Achievement Awards.[2] A number of her works have been adapted for film and television.`},
            {P:`Atwood's works encompass a variety of themes including gender and identity, religion and myth, the power of language, climate change, and "power politics".[3] Many of her poems are inspired by myths and fairy tales which interested her from a very early age.[4]`},
            {P:`Atwood is a founder of the Griffin Poetry Prize and the Writers' Trust of Canada. She is also a Senior Fellow of Massey College, Toronto. She is the inventor of the LongPen device and associated technologies that facilitate remote robotic writing of documents.`},
            ]
    }
]

bookPage(bookInfo);