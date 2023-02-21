
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/df12.jpg`,
        bookTitle: `Changes`,
        bookInfo: [{
            P:`Long ago, Susan Rodriguez was Harry Dresden's lover-until she was attacked by his enemies, leaving her torn between her own humanity and the bloodlust of the vampiric Red Court. Susan then disappeared to South America, where she could fight both her savage gift and those who cursed her with it.`},
            {P:`Now Arianna Ortega, Duchess of the Red Court, has discovered a secret Susan has long kept, and she plans to use it-against Harry. To prevail this time, he may have no choice but to embrace the raging fury of his own untapped dark power. Because Harry's not fighting to save the world...`},
            {P:`Harry Dresden is the best at what he does. Well, technically, he's the only at what he does. So when the Chicago P.D. has a case that transcends mortal creativity or capability, they come to him for answers. For the "everyday" world is actually full of strange and magical things—and most don't play well with humans. That's where Harry comes in. Takes a wizard to catch a—well, whatever. There's just one problem. Business, to put it mildly, stinks.`},
            {P:`He's fighting to save his child.`},
           ]
    }
]

bookPage(bookInfo);