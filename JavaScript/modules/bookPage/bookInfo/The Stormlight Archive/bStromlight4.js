
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/strm3.jpg`,
        bookTitle: `Oathbringer`,
        bookLinks: [
            {P:`GoodReads`},
            {P:`BookDepository`},
            {P:`Audible`},
        ],
        bookInfo: [
            {P:`In Oathbringer, the third volume of the New York Times bestselling Stormlight Archive, humanity faces a new Desolation with the return of the Voidbringers, a foe with numbers as great as their thirst for vengeance. `},
            {P:`Dalinar Kholin's Alethi armies won a fleeting victory at a terrible cost: The enemy Parshendi summoned the violent Everstorm, which now sweeps the world with destruction, and in its passing awakens the once peaceful and subservient parshmen to the horror of their millennia-long enslavement by humans. While on a desperate flight to warn his family of the threat, Kaladin Stormblessed must come to grips with the fact that the newly kindled anger of the parshmen may be wholly justified. `},
            {P:`Nestled in the mountains high above the storms, in the tower city of Urithiru, Shallan Davar investigates the wonders of the ancient stronghold of the Knights Radiant and unearths dark secrets lurking in its depths. And Dalinar realizes that his holy mission to unite his homeland of Alethkar was too narrow in scope. Unless all the nations of Roshar can put aside Dalinar's blood-soaked past and stand together--and unless Dalinar himself can confront that past--even the restoration of the Knights Radiant will not prevent the end of civilization.`},
            ]
    }
]

bookPage(bookInfo);