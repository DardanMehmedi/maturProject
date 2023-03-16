
import { authorPage } from "../authorPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/BraS.jpg`,
        bookTitle: `BRANDON SANDERSON`,

        bookInfo: [
            {P:`Brandon Winn Sanderson (born December 19, 1975) is an American author of high fantasy and science fiction. He is best known for the Cosmere fictional universe, in which most of his fantasy novels, most notably the Mistborn series and The Stormlight Archive, are set. Outside of the Cosmere, he has written several young adult and juvenile series including The Reckoners, the Skyward series,[a] and the Alcatraz series. He is also known for finishing Robert Jordan's high fantasy series The Wheel of Time. Sanderson has created several graphic novel fantasy series, including White Sand and Dark One.`},
            {P:`He created Sanderson's Laws of Magic and popularized the idea of "hard magic" and "soft magic" systems. In 2008, Sanderson started a podcast with author Dan Wells and cartoonist Howard Tayler called Writing Excuses, involving topics about creating genre writing and webcomics. In 2016, the American media company DMG Entertainment licensed the movie rights to Sanderson's entire Cosmere universe, but the rights have since reverted back to Sanderson. Sanderson's March 2022 Kickstarter campaign became the most successful in history, finishing with 185,341 backers pledging $41,754,153.`},
        ]
    }
]

authorPage(bookInfo);