
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/df8.jpg`,
        bookTitle: `Proven Guilty`,
        bookInfo: [{
            P:`There's no love lost between Harry Dresden, the only wizard in the Chicago phone book, and the White Council of Wizards, who find him brash and undisciplined. But war with the vampires has thinned their ranks, so the Council has drafted Harry as a Warden and assigned him to look into rumors of black magic in the Windy City.`},
            {P:`As Harry adjusts to his new role, another problem arrives in the form of the tattooed and pierced daughter of an old friend, all grown-up and already in trouble. Her boyfriend is the only suspect in what looks like a supernatural assault straight out of a horror film. Malevolent entities that feed on fear are loose in Chicago, but it's all in a day's work for a wizard, his faithful dog, and a talking skull named Bob....`},
            ]
    }
]

bookPage(bookInfo);