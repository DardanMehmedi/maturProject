
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/HO.jpg`,
        bookTitle: `HOMER`,
        bookInfo: [
            {P:`Homer (/ˈhoʊmər/; Ancient Greek: Ὅμηρος [hómɛːros], Hómēros) (born c. 8th century BC) was a Greek poet who is credited as the author of the Iliad and the Odyssey, two epic poems that are foundational works of ancient Greek literature. Homer is considered one of the most revered and influential authors in history.[2]`},
            {P:`Homer's Iliad centers on a quarrel between King Agamemnon and the warrior Achilles during the last year of the Trojan War. The Odyssey chronicles the ten-year journey of Odysseus, king of Ithaca, back to his home after the fall of Troy. The poems are in Homeric Greek, also known as Epic Greek, a literary language which shows a mixture of features of the Ionic and Aeolic dialects from different centuries; the predominant influence is Eastern Ionic.[3][4] Most researchers believe that the poems were originally transmitted orally.`},
            {P:`Homer's epic poems shaped aspects of ancient Greek culture and education, fostering ideals of heroism, glory, and honor.[6] To Plato, Homer was simply the one who "has taught Greece" (τὴν Ἑλλάδα πεπαίδευκεν, tēn Helláda pepaídeuken).[7][8] In Dante Alighieri's Divine Comedy, Virgil refers to Homer as "Poet sovereign", king of all poets;[9] in the preface to his translation of the Iliad, Alexander Pope acknowledges that Homer has always been considered the "greatest of poets".[10] From antiquity to the present day, Homeric epics have inspired many famous works of literature, music, art, and film.[11]`},
            {P:`The question of by whom, when, where and under what circumstances the Iliad and Odyssey were composed continues to be debated. It is generally accepted that the two works were written by different authors.[12] It is thought that the poems were composed at some point around the late eighth or early seventh century BC.[12] Many accounts of Homer's life circulated in classical antiquity; the most widespread account was that he was a blind bard from Ionia, a region of central coastal Anatolia in present-day Turkey. Modern scholars consider these accounts legendary.`},
            ]
    }
]

bookPage(bookInfo);