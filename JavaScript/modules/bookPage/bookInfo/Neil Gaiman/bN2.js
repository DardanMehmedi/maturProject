
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/N2.jpg`,
        bookTitle: `NORSE MYTHOLOGY`,
        bookInfo: [
            {P:`Neil Gaiman, long inspired by ancient mythology in creating the fantastical realms of his fiction, presents a bravura rendition of the Norse gods and their world from their origin though their upheaval in Ragnarok.`},
            {P:`In Norse Mythology, Gaiman stays true to the myths in envisioning the major Norse pantheon: Odin, the highest of the high, wise, daring, and cunning; Thor, Odin’s son, incredibly strong yet not the wisest of gods; and Loki—son of a giant—blood brother to Odin and a trickster and unsurpassable manipulator.`},
            {P:`Gaiman fashions these primeval stories into a novelistic arc that begins with the genesis of the legendary nine worlds and delves into the exploits of deities, dwarfs, and giants. Through Gaiman’s deft and witty prose, these gods emerge with their fiercely competitive natures, their susceptibility to being duped and to duping others, and their tendency to let passion ignite their actions, making these long-ago myths breathe pungent life again.`},
            ]
    }
]

bookPage(bookInfo);