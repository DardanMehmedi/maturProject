
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/BarO.jpg`,
        bookTitle: `BARACK OBAMA`,
        bookInfo: [
            {P:`Barack Hussein Obama II (/bəˈrɑːk huːˈseɪn oʊˈbɑːmə/ (listen) bə-RAHK hoo-SAYN oh-BAH-mə;[1] born August 4, 1961) is an American retired politician who served as the 44th president of the United States from 2009 to 2017. Obama, a member of the Democratic Party, was the first African-American president of the United States.[2] He previously served as a U.S. senator from Illinois from 2005 to 2008 and as an Illinois state senator from 1997 to 2004, and previously worked as a civil rights lawyer before entering politics.`},
            {P:`Obama was born in Honolulu, Hawaii. After graduating from Columbia University in 1983, he worked as a community organizer in Chicago. In 1988, he enrolled in Harvard Law School, where he was the first black president of the Harvard Law Review. After graduating, he became a civil rights attorney and an academic, teaching constitutional law at the University of Chicago Law School from 1992 to 2004. Turning to elective politics, he represented the 13th district in the Illinois Senate from 1997 until 2004, when he ran for the U.S. Senate. Obama received national attention in 2004 with his March Senate primary win, his well-received keynote address at the July Democratic National Convention, and his landslide November election to the Senate. In 2008, after a close primary campaign against Hillary Clinton, he was nominated by the Democratic Party for president and chose Joe Biden as his running mate. Obama was elected over Republican nominee John McCain in the presidential election and was inaugurated on January 20, 2009. Nine months later, he was named the 2009 Nobel Peace Prize laureate, a decision that drew a mixture of praise and criticism.`},
            {P:`Obama's first-term actions addressed the global financial crisis and included a major stimulus package, a partial extension of George W. Bush's tax cuts, legislation to reform health care, a major financial regulation reform bill, and the end of a major US military presence in Iraq. Obama also appointed Supreme Court justices Sonia Sotomayor and Elena Kagan, the former being the first Hispanic American on the Supreme Court. He ordered the counterterrorism raid which killed Osama bin Laden and downplayed Bush's counterinsurgency model, expanding air strikes and making extensive use of special forces while encouraging greater reliance on host-government militaries.`},
            ]
    }
]

bookPage(bookInfo);