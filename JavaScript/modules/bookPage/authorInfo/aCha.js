
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/CD.jpg`,
        bookTitle: `CHARLES DICKENS`,
        bookInfo: [
            {P:`Charles John Huffam Dickens (/ˈdɪkɪnz/; 7 February 1812 – 9 June 1870) was an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era.[1] His works enjoyed unprecedented popularity during his lifetime and, by the 20th century, critics and scholars had recognised him as a literary genius. His novels and short stories are widely read today.[2][3]`},
            {P:`Born in Portsmouth, Dickens left school at the age of 12 to work in a boot-blacking factory when his father was incarcerated in a debtors' prison. After three years he returned to school, before he began his literary career as a journalist. Dickens edited a weekly journal for 20 years, wrote 15 novels, five novellas, hundreds of short stories and non-fiction articles, lectured and performed readings extensively, was an indefatigable letter writer, and campaigned vigorously for children's rights, for education, and for other social reforms.`},
            {P:`Dickens's literary success began with the 1836 serial publication of The Pickwick Papers, a publishing phenomenon—thanks largely to the introduction of the character Sam Weller in the fourth episode—that sparked Pickwick merchandise and spin-offs. Within a few years Dickens had become an international literary celebrity, famous for his humour, satire and keen observation of character and society. His novels, most of them published in monthly or weekly installments, pioneered the serial publication of narrative fiction, which became the dominant Victorian mode for novel publication.[4][5] Cliffhanger endings in his serial publications kept readers in suspense.[6] The instalment format allowed Dickens to evaluate his audience's reaction, and he often modified his plot and character development based on such feedback.[5] For example, when his wife's chiropodist expressed distress at the way Miss Mowcher in David Copperfield seemed to reflect her own disabilities, Dickens improved the character with positive features.[7] His plots were carefully constructed and he often wove elements from topical events into his narratives.[8] Masses of the illiterate poor would individually pay a halfpenny to have each new monthly episode read to them, opening up and inspiring a new class of readers.[9]`},
            ]
    }
]

bookPage(bookInfo);