
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/LeiB.jpg`,
        bookTitle: `LEIGH BARDUGO`,
        bookInfo: [
            {P:`Leigh Bardugo (Hebrew: לי ברדוגו) is an Israeli-American fantasy author. She is best known for her young adult Grishaverse novels, which include the Shadow and Bone trilogy, the Six of Crows duology, and the King of Scars duology. She also received acclaim for her paranormal fantasy adult debut, Ninth House. The Shadow and Bone and Six of Crows series have been adapted into Shadow and Bone by Netflix and Ninth House will be adapted by Amazon Studios; Bardugo is an executive producer on both works.`},
            {P:`Bardugo was born in Jerusalem, Israel, in 1975 and grew up in Los Angeles, California, U.S.[1][2] where she was raised by her grandparents.[3] She is secular Jewish and of Moroccan Jewish descent on her father's side,[4] and of Ashkenazi Jewish (Russian-Jewish and Lithuanian-Jewish) descent on her mother's side.[5][6]

            She attended Yale University, graduating with a degree in English in the spring of 1997.[1][7] She was a member of the Wolf's Head secret society.[8] Before publishing her first novel, she worked in copywriting and journalism, as well as makeup and special effects.`},
            ]
    }
]

bookPage(bookInfo);