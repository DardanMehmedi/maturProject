
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/VH.jpg`,
        bookTitle: `VICTOR HUGO`,
        bookInfo: [
            {P:`Victor-Marie Hugo (French: [viktɔʁ maʁi yɡo] (listen); 26 February 1802 – 22 May 1885) was a French Romantic writer and politician. During a literary career that spanned more than sixty years, he wrote in a variety of genres and forms. He is considered to be one of the greatest French writers of all time.`},
            {P:`His most famous works are the novels The Hunchback of Notre-Dame (1831) and Les Misérables (1862). In France, Hugo is renowned for his poetry collections, such as Les Contemplations (The Contemplations) and La Légende des siècles (The Legend of the Ages). Hugo was at the forefront of the Romantic literary movement with his play Cromwell and drama Hernani. Many of his works have inspired music, both during his lifetime and after his death, including the opera Rigoletto and the musicals Les Misérables and Notre-Dame de Paris. He produced more than 4,000 drawings in his lifetime, and campaigned for social causes such as the abolition of capital punishment.`},
            {P:`Though he was a committed royalist when young, Hugo's views changed as the decades passed, and he became a passionate supporter of republicanism, serving in politics as both deputy and senator. His work touched upon most of the political and social issues and the artistic trends of his time. His opposition to absolutism and his literary stature established him as a national hero. He was honoured by interment in the Panthéon.`},
            ]
    }
]

bookPage(bookInfo);