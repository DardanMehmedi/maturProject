
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/king4.jpg`,
        bookTitle: `Wizard and Glass`,
        bookInfo: [
            {P:`Roland, Eddie, Susannah, Jake, and Jake’s pet bumbler survive Blaine the Mono’s final crash, only to find themselves stranded in an alternate version of Topeka, Kansas, one that has been ravaged by the superflu virus. While following the deserted I-70 toward a distant glass palace, they hear the atonal squalling of a thinny, a place where the fabric of existence has almost entirely worn away. While camping near the edge of the thinny, Roland tells his ka-tet a story about another thinny, one that he encountered when he was little more than a boy. Over the course of one long magical night, Roland transports us to the Mid-World of long-ago and a seaside town called Hambry, where Roland fell in love with a girl named Susan Delgado, and where he and his old tet-mates Alain and Cuthbert battled the forces of John Farson, the harrier who—with a little help from a seeing sphere called Maerlyn’s Grapefruit—ignited Mid-World’s final war.`},
            ]
    }
]

bookPage(bookInfo);