
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/king1.jpg`,
        bookTitle: `The Gunslinger`,
        bookInfo: [
            {P:`In the first book of this series, Stephen King introduces readers to one of his most enigmatic heroes, Roland of Gilead, The Last Gunslinger.`},
            {P:`He is a haunting figure, a loner on a spellbinding journey into good and evil. In his desolate world, which frighteningly mirrors our own, Roland pursues The Man in Black, encounters an alluring woman named Alice, and begins a friendship with the Kid from Earth called Jake. Both grippingly realistic and eerily dreamlike, The Gunslinger leaves readers eagerly awaiting the next chapter.`},
            ]
    }
]

bookPage(bookInfo);