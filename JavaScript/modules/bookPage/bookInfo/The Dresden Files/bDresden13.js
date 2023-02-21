
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/df13.jpg`,
        bookTitle: `Ghost Story`,
        bookInfo: [{
            P:`When we last left the mighty wizard detective Harry Dresden, he wasn't doing well. In fact, he had been murdered by an unknown assassin.`},
            {P:`But being dead doesn't stop him when his friends are in danger. Except now he has no body, and no magic to help him. And there are also several dark spirits roaming the Chicago shadows who owe Harry some payback of their own.`},
            {P:`To save his friends—and his own soul—Harry will have to pull off the ultimate trick without any magic...`},
            ]
    }
]

bookPage(bookInfo);