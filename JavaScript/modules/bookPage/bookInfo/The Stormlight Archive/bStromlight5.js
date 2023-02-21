
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/strm4.1.jpg`,
        bookTitle: `Dawnshard`,
        bookInfo: [{
            P:`From Brandon Sanderson author of the #1 New York Times bestselling Stormlight Archive and its fourth massive installment, Rhythm of War—comes a new hefty novella, Dawnshard. Taking place between Oathbringer and Rhythm of War, this tale (like Edgedancer before it) gives often-overshadowed characters their own chance to shine.`},
            {P:`When a ghost ship is discovered, its crew presumed dead after trying to reach the storm-shrouded island Akinah, Navani Kholin must send an expedition to make sure the island hasn't fallen into enemy hands. Knights Radiant who fly too near find their Stormlight suddenly drained, so the voyage must be by sea.`},
            {P:`Shipowner Rysn Ftori lost the use of her legs but gained the companionship of Chiri-Chiri, a Stormlight-ingesting winged larkin, a species once thought extinct. Now Rysn's pet is ill, and any hope for Chiri-Chiri’s recovery can be found only at the ancestral home of the larkin: Akinah. With the help of Lopen, the formerly one-armed Windrunner, Rysn must accept Navani's quest and sail into the perilous storm from which no one has returned alive. If the crew cannot uncover the secrets of the hidden island city before the wrath of its ancient guardians falls upon them, the fate of Roshar and the entire Cosmere hangs in the balance.`},
            ]
    }
]

bookPage(bookInfo);