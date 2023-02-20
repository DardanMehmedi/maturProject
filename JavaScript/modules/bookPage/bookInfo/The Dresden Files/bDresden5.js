
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/df1.jpg`,
        bookTitle: `Storm Front`,
        bookInfo: [{
            P:`Harry Dresden, Chicago's only practicing professional wizard, should be happy that business is pretty good for a change. But now he's getting more than he bargained for:`},
            {P:`A duel with the Red Court of Vampires' champion, who must kill Harry to end the war between vampires and wizards...`},
            {P:`Harry Dresden is the best at what he does. Well, technically, he's the only at what he does. So when the Chicago P.D. has a case that transcends mortal creativity or capability, they come to him for answers. For the "everyday" world is actually full of strange and magical things—and most don't play well with humans. That's where Harry comes in. Takes a wizard to catch a—well, whatever. There's just one problem. Business, to put it mildly, stinks.`},
            {P:`So when the police bring him in to consult on a grisly double murder committed with black magic, Harry's seeing dollar signs. But where there's black magic, there's a black mage behind it. And now that mage knows Harry's name. And that's when things start to get interesting.`},
            {P:`Magic - it can get a guy killed.`
        }]
    }
]

bookPage(bookInfo);