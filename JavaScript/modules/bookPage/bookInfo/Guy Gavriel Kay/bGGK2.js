
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/Children of Earth and Sky.jpg`,
        bookTitle: `CHILDREN OF EARTH AND SKY`,
        bookInfo: [
            {P:`The bestselling author of the groundbreaking novels Under Heaven and River of Stars, Guy Gavriel Kay is back with a new book, set in a world inspired by the conflicts and dramas of Renaissance Europe. Against this tumultuous backdrop the lives of men and women unfold on the borderlands—where empires and faiths collide.`},
            {P:`From the small coastal town of Senjan, notorious for its pirates, a young woman sets out to find vengeance for her lost family. That same spring, from the wealthy city-state of Seressa, famous for its canals and lagoon, come two very different people: a young artist traveling to the dangerous east to paint the grand khalif at his request—and possibly to do more—and a fiercely intelligent, angry woman, posing as a doctor’s wife, but sent by Seressa as a spy.`},
            {P:`The trading ship that carries them is commanded by the accomplished younger son of a merchant family, ambivalent about the life he’s been born to live. And farther east a boy trains to become a soldier in the elite infantry of the khalif—to win glory in the war everyone knows is coming.`},
            {P:`As these lives entwine, their fates—and those of many others—will hang in the balance, when the khalif sends out his massive army to take the great fortress that is the gateway to the western world...`},
            ]
    }
]

bookPage(bookInfo);