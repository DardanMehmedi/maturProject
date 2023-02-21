
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/df5.jpg`,
        bookTitle: `Death Masks`,
        bookInfo: [{
            P:`Harry Dresden, Chicago's only practicing professional wizard, should be happy that business is pretty good for a change. But now he's getting more than he bargained for:`},
            {P:`A duel with the Red Court of Vampires' champion, who must kill Harry to end the war between vampires and wizards...`},
            {P:`Professional hit men using Harry for target practice...`},
            {P:`The missing Shroud of Turin...`},
            {P:`A handless and headless corpse the Chicago police need identified...`},
            {P:`Not to mention the return of Harry's ex-girlfriend Susan, who's still struggling with her semi-vampiric nature. And who seems to have a new man in her life.`},
            {P:`Some days, it just doesn't pay to get out of bed. No matter how much you're charging.`
        }]
    }
]

bookPage(bookInfo);