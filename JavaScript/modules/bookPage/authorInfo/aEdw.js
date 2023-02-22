
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/ES.jpg`,
        bookTitle: `EDWARD W. SAID`,
        bookInfo: [
            {P:`Edward Wadie Said (/sɑːˈiːd/; Arabic: إدوارد وديع سعيد, romanized: Idwārd Wadīʿ Saʿīd, [wædiːʕ sæʕiːd]; 1 November 1935 – 24 September 2003) was a Palestinian-American professor of literature at Columbia University, a public intellectual, and a founder of the academic field of postcolonial studies.[3] Born in Mandatory Palestine, he was a citizen of the United States by way of his father, a U.S. Army veteran.`},
            {P:`Educated in the Western canon at British and American schools, Said applied his education and bi-cultural perspective to illuminating the gaps of cultural and political understanding between the Western world and the Eastern world, especially about the Israeli–Palestinian conflict in the Middle East; his principal influences were Antonio Gramsci, Frantz Fanon, Aimé Césaire, Michel Foucault, and Theodor Adorno.[4]`},
            {P:`As a cultural critic, Said is known for the book Orientalism (1978), a critique of the cultural representations that are the bases of Orientalism—how the Western world perceives the Orient.[5][6][7][8] Said's model of textual analysis transformed the academic discourse of researchers in literary theory, literary criticism, and Middle-Eastern studies—how academics examine, describe, and define the cultures being studied.[9][10] As a foundational text, Orientalism was controversial among scholars of Oriental Studies, philosophy, and literature.[11][4]`},
            ]
    }
]

bookPage(bookInfo);