
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/NaoK.jpg`,
        bookTitle: `NAOMI KLEIN`,
        bookInfo: [
            {P:`Naomi A. Klein (born May 8, 1970) is a Canadian author, social activist, and filmmaker known for her political analyses, support of ecofeminism, organized labour, left-wing politics and criticism of corporate globalization,[1] fascism, ecofascism[2] and capitalism.[3] As of 2021 she is Associate Professor, and Professor of Climate Justice at the University of British Columbia, co-directing a Centre for Climate Justice.`},
            {P:`Klein first became known internationally for her alter-globalization book No Logo (1999). The Take (2004), a documentary film about Argentina's occupied factories, written by her and directed by her husband Avi Lewis, further increased her profile, while The Shock Doctrine (2007), a critical analysis of the history of neoliberal economics, solidified her standing as a prominent activist on the international stage. The Shock Doctrine was adapted into a six-minute companion film by Alfonso and Jonás Cuarón,[5] as well as a feature-length documentary by Michael Winterbottom.[6] Klein's This Changes Everything: Capitalism vs. the Climate (2014) was a New York Times non-fiction bestseller and the winner of the Hilary Weston Writers' Trust Prize for Nonfiction.`},
            {P:`In 2016, Klein was awarded the Sydney Peace Prize for her activism on climate justice.[8] Klein frequently appears on global and national lists of top influential thinkers, including the 2014 Thought Leaders ranking compiled by the Gottlieb Duttweiler Institute,[9] Prospect magazine's world thinkers 2014 poll,[10] and Maclean's 2014 Power List.[11] She was formerly a member of the board of directors of the climate activist group 350.org.`},
            ]
    }
]

bookPage(bookInfo);