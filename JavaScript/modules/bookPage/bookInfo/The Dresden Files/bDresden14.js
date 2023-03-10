
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/df14.jpg`,
        bookTitle: `Cold Days`,
        bookInfo: [{
            P:`You can't keep a good wizard down - even when he wants to stay that way.`},
            {P:`For years, Harry Dresden has been Chicago's only professional wizard, but a bargain made in desperation with the Queen of Air and Darkness has forced him into a new job: professional killer.`},
            {P:`Mab, the mother of wicked faeries, has restored the mostly-dead wizard to health, and dispatches him upon his first mission - to bring death to an immortal. Even as he grapples with the impossible task, Dresden learns of a looming danger to Demonreach, the living island hidden upon Lake Michigan, a place whose true purpose and dark potential have the potential to destroy billions and to land Dresden in the deepest trouble he has ever known - even deeper than being dead. How messed up is that?`},
            {P:`Beset by his new enemies and hounded by the old, Dresden has only twenty four hours to reconnect with his old allies, prevent a cataclysm and do the impossible - all while the power he bargained to get - but never meant to keep - lays siege to his very soul.`},
            {P:`Magic - it can get a guy killed.`
        }]
    }
]

bookPage(bookInfo);