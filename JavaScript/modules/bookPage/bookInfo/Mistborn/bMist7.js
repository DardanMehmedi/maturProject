
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/mist6.jpg`,
        bookTitle: `THE BANDS OF MOURNING`,
        bookInfo: [
            {P:`Three hundred years after the events of the Mistborn trilogy, Scadrial is now on the verge of modernity, with railroads to supplement the canals, electric lighting in the streets and the homes of the wealthy, and the first steel-framed skyscrapers racing for the clouds.
            `},
            {P:`The Bands of Mourning are the mythical metal minds owned by the Lord Ruler, said to grant anyone who wears them the powers that the Lord Ruler had at his command. Hardly anyone thinks they really exist. A kandra researcher has returned to Elendel with images that seem to depict the Bands, as well as writings in a language that no one can read. Waxillium Ladrian is recruited to travel south to the city of New Seran to investigate. Along the way he discovers hints that point to the true goals of his uncle Edwarn and the shadowy organization known as The Set.`},
        ]
    }
]

bookPage(bookInfo);