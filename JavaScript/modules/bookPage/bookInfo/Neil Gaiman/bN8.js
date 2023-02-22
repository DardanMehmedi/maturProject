
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/N8.jpg`,
        bookTitle: `GOOD OMENS`,
        bookInfo: [
            {P:`According to the Nice and Accurate Prophecies of Agnes Nutter - the world's only totally reliable guide to the future - the world will end on a Saturday. Next Saturday, in fact. Just after tea...`},
            {P:`People have been predicting the end of the world almost from its very beginning, so it’s only natural to be sceptical when a new date is set for Judgement Day. This time though, the armies of Good and Evil really do appear to be massing. The four Bikers of the Apocalypse are hitting the road. But both the angels and demons – well, one fast-living demon and a somewhat fussy angel – would quite like the Rapture not to happen.`},
            {P:`And someone seems to have misplaced the Antichrist…`},
            ]
    }
]

bookPage(bookInfo);