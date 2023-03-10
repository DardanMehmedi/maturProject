
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/GV0.jpg`,
        bookTitle: `THE LANGUAGE OF THORNS`,
        bookInfo: [
            {P:`Love speaks in flowers. Truth requires thorns.`},
            {P:`Travel to a world of dark bargains struck by moonlight, of haunted towns and hungry woods, of talking beasts and gingerbread golems, where a young mermaid's voice can summon deadly storms and where a river might do a lovestruck boy's bidding but only for a terrible price.
            `},
            {P:`Inspired by myth, fairy tale, and folklore, #1 New York Times—bestselling author Leigh Bardugo has crafted a deliciously atmospheric collection of short stories filled with betrayals, revenge, sacrifice, and love.`},
            {P:`Perfect for new readers and dedicated fans, these tales will transport you to lands both familiar and strange—to a fully realized world of dangerous magic that millions have visited through the novels of the Grishaverse.
            `},
            {P:`This collection of six stories includes three brand-new tales, all of them lavishly illustrated with art that changes with each turn of the page, culminating in six stunning full-spread illustrations as rich in detail as the stories themselves.
            `},
            ]
    }
]

bookPage(bookInfo);