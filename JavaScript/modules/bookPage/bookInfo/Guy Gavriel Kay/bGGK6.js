
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/The Wandering Fire.jpg`,
        bookTitle: `THE WANDERING FIRE`,
        bookInfo: [
            {P:`In the second novel in Guy Gavriel Kay's critically acclaimed Fionavar Tapestry, five men and women from our world must play their parts in a colossal war, as the first of all worlds confronts an ancient evil...`},
            {P:`After a thousand years of imprisonment the Unraveller has broken free and frozen Fionavar in the ice of eternal winter. His terrible vengeance has begun to take its toll on mortals and demi-gods, mages and priestesses, dwarves and the Children of Light.`},
            {P:`The five brought from Earth across the tapestry of worlds must act to wake the allies Fionavar desperately needs. But no one can know if these figures out of legend have power enough to shatter the icy grip of death upon the land--or if they even want to...`},
            ]
    }
]

bookPage(bookInfo);