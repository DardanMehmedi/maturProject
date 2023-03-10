
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/SACD.jpg`,
        bookTitle: `SIR ARTHUR CONAN DOYLE`,
        bookInfo: [
            {P:`Sir Arthur Ignatius Conan Doyle KStJ DL (22 May 1859 – 7 July 1930) was a British writer and physician. He created the character Sherlock Holmes in 1887 for A Study in Scarlet, the first of four novels and fifty-six short stories about Holmes and Dr. Watson. The Sherlock Holmes stories are milestones in the field of crime fiction.`},
            {P:`Doyle was a prolific writer; other than Holmes stories, his works include fantasy and science fiction stories about Professor Challenger, and humorous stories about the Napoleonic soldier Brigadier Gerard, as well as plays, romances, poetry, non-fiction, and historical novels. One of Doyle's early short stories, "J. Habakuk Jephson's Statement" (1884), helped to popularise the mystery of the Mary Celeste.`},
            {P:`Doyle is often referred to as "Sir Arthur Conan Doyle" or "Conan Doyle", implying that "Conan" is part of a compound surname rather than a middle name. His baptism entry in the register of St Mary's Cathedral, Edinburgh, gives "Arthur Ignatius Conan" as his given names and "Doyle" as his surname. It also names Michael Conan as his godfather.[1] The catalogues of the British Library and the Library of Congress treat "Doyle" alone as his surname.`},
            {P:`Steven Doyle, publisher of The Baker Street Journal, wrote: "Conan was Arthur's middle name. Shortly after he graduated from high school he began using Conan as a sort of surname. But technically his last name is simply 'Doyle'."[3] When knighted, he was gazetted as Doyle, not under the compound Conan Doyle.`},
            ]
    }
]

bookPage(bookInfo);