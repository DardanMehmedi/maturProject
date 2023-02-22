
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/GV1.jpg`,
        bookTitle: `SHADOW AND BONE`,
        bookInfo: [
            {P:`Surrounded by enemies, the once-great nation of Ravka has been torn in two by the Shadow Fold, a swath of near impenetrable darkness crawling with monsters who feast on human flesh. Now its fate may rest on the shoulders of one lonely refugee.
            `},
            {P:`Alina Starkov has never been good at anything. But when her regiment is attacked on the Fold and her best friend is brutally injured, Alina reveals a dormant power that saves his life—a power that could be the key to setting her war-ravaged country free. Wrenched from everything she knows, Alina is whisked away to the royal court to be trained as a member of the Grisha, the magical elite led by the mysterious Darkling.`},
            {P:`Yet nothing in this lavish world is what it seems. With darkness looming and an entire kingdom depending on her untamed power, Alina will have to confront the secrets of the Grisha . . . and the secrets of her heart.`},
            ]
    }
]

bookPage(bookInfo);