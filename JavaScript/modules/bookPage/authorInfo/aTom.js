
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/TomW.jpg`,
        bookTitle: `TOM WOLFE`,
        bookInfo: [
            {P:`Thomas Kennerly Wolfe Jr. (March 2, 1930 – May 14, 2018)[a] was an American author and journalist widely known for his association with New Journalism, a style of news writing and journalism developed in the 1960s and 1970s that incorporated literary techniques.`},
            {P:`Wolfe began his career as a regional newspaper reporter in the 1950s, achieving national prominence in the 1960s following the publication of such best-selling books as The Electric Kool-Aid Acid Test (a highly experimental account of Ken Kesey and the Merry Pranksters) and two collections of articles and essays, Radical Chic & Mau-Mauing the Flak Catchers and The Kandy-Kolored Tangerine-Flake Streamline Baby. In 1979, he published the influential book The Right Stuff about the Mercury Seven astronauts, which was made into a 1983 film of the same name directed by Philip Kaufman.`},
            {P:`His first novel, The Bonfire of the Vanities, published in 1987, was met with critical acclaim and also became a commercial success. Its adaptation as a motion picture of the same name, directed by Brian De Palma, was a critical and commercial failure.`},
            ]
    }
]

bookPage(bookInfo);