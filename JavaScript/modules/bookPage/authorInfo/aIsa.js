
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/IA.jpg`,
        bookTitle: `ISAAC ASIMOV`,
        bookInfo: [
            {P:`Isaac Asimov (/ˈæzɪmɒv/ AZ-ih-mov;[b] c.  January 2,[a] 1920 – April 6, 1992) was an American writer and professor of biochemistry at Boston University. During his lifetime, Asimov was considered one of the "Big Three" science fiction writers, along with Robert A. Heinlein and Arthur C. Clarke.[2] A prolific writer, he wrote or edited more than 500 books. He also wrote an estimated 90,000 letters and postcards.[c] Best known for his hard science fiction, Asimov also wrote mysteries and fantasy, as well as much nonfiction.`},
            {P:`Asimov's most famous work is the Foundation series,[3] the first three books of which won the one-time Hugo Award for "Best All-Time Series" in 1966.[4] His other major series are the Galactic Empire series and the Robot series. The Galactic Empire novels are set in the much earlier history of the same fictional universe as the Foundation series. Later, with Foundation and Earth (1986), he linked this distant future to the Robot stories, creating a unified "future history" for his stories.[5] He also wrote over 380 short stories, including the social science fiction novelette "Nightfall", which in 1964 was voted the best short science fiction story of all time by the Science Fiction Writers of America. Asimov wrote the Lucky Starr series of juvenile science-fiction novels using the pen name Paul French.[6]`},
            {P:`Most of his popular science books explain concepts in a historical way, going as far back as possible to a time when the science in question was at its simplest stage. Examples include Guide to Science, the three-volume Understanding Physics, and Asimov's Chronology of Science and Discovery. He wrote on numerous other scientific and non-scientific topics, such as chemistry, astronomy, mathematics, history, biblical exegesis, and literary criticism.`},
            {P:`He was president of the American Humanist Association.[7] Several entities have been named in his honor, including the asteroid (5020) Asimov,[8] a crater on Mars,[9][10] a Brooklyn elementary school,[11] Honda's humanoid robot ASIMO,[12] and four literary awards.`},
            ]
    }
]

bookPage(bookInfo);