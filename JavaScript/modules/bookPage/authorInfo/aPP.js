
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/PP.jpg`,
        bookTitle: `PHILIP PULLMAN`,
        bookInfo: [
            {P:`Sir Philip Nicholas Outram Pullman[1] CBE FRSL (born 19 October 1946) is an English writer. His books include the fantasy trilogy His Dark Materials and The Good Man Jesus and the Scoundrel Christ, a fictionalised biography of Jesus. In 2008, The Times named Pullman one of the "50 greatest British writers since 1945".[2] In a 2004 BBC poll, he was named the eleventh most influential person in British culture.[3][4] He was knighted in the 2019 New Year Honours for services to literature.`},
            {P:`Northern Lights, the first volume in His Dark Materials, won the 1995 Carnegie Medal of the Library Association as the year's outstanding English-language children's book.[6] For the 70th anniversary it was named in the top ten by a panel composing the public election for an all-time favourite.[7] It won the public vote from the shortlist and was named all-time "Carnegie of Carnegies" in June 2007. It was filmed under the book's US title, The Golden Compass. In 2003, His Dark Materials trilogy ranked third in the BBC's The Big Read, a poll of 200 top novels voted by the British public.`},
            ]
    }
]

bookPage(bookInfo);