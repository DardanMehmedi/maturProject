
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/mist2.jpg`,
        bookTitle: `THE WELL OF ASCENSION`,
        bookInfo: [
            {P:`The impossible has been accomplished. The Lord Ruler—the man who claimed to be god incarnate and brutally ruled the world for a thousand years—has been vanquished. But Kelsier, the hero who masterminded that triumph, is dead too, and now the awesome task of building a new world has been left to his young protégé, Vin, the former street urchin who is now the most powerful Mistborn in the land, and to the idealistic young nobleman she loves.`},
            {P:`As Kelsier's protégé and slayer of the Lord Ruler she is now venerated by a budding new religion, a distinction that makes her intensely uncomfortable. Even more worrying, the mists have begun behaving strangely since the Lord Ruler died, and seem to harbor a strange vaporous entity that haunts her.`},
            {P:`Stopping assassins may keep Vin's Mistborn skills sharp, but it's the least of her problems. Luthadel, the largest city of the former empire, doesn't run itself, and Vin and the other members of Kelsier's crew, who lead the revolution, must learn a whole new set of practical and political skills to help. It certainly won't get easier with three armies - one of them composed of ferocious giants - now vying to conquer the city, and no sign of the Lord Ruler's hidden cache of atium, the rarest and most powerful allomantic metal.`},
            {P:`As the siege of Luthadel tightens, an ancient legend seems to offer a glimmer of hope. But even if it really exists, no one knows where to find the Well of Ascension or what manner of power it bestows.`},
        ]
    }
]

bookPage(bookInfo);