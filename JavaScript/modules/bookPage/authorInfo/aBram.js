
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/BS.jpg`,
        bookTitle: `BRAM STOKER`,
        bookInfo: [
            {P:`Abraham Stoker (8 November 1847 – 20 April 1912) was an Irish author who is celebrated for his 1897 Gothic horror novel Dracula. During his lifetime, he was better known as the personal assistant of actor Sir Henry Irving and business manager of the Lyceum Theatre, which Irving owned. In his early years, Stoker worked as a theatre critic for an Irish newspaper, and wrote stories as well as commentaries. He also enjoyed travelling, particularly to Cruden Bay where he set two of his novels. During another visit to the English coastal town of Whitby, Stoker drew inspiration for writing Dracula. He died on 20 April 1912 due to locomotor ataxia and was cremated in north London. Since his death, his magnum opus Dracula has become one of the most well-known works in English literature, and the novel has been adapted for numerous films, short stories, and plays.[1]`},

            ]
    }
]

bookPage(bookInfo);