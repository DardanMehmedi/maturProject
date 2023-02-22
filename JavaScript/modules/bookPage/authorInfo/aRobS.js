
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/RLS.jpg`,
        bookTitle: `ROBERT LOUIS STEVENSON`,
        bookInfo: [
            {P:`Robert Louis Stevenson (born Robert Lewis Balfour Stevenson; 13 November 1850 – 3 December 1894) was a Scottish novelist, essayist, poet and travel writer. He is best known for works such as Treasure Island, Strange Case of Dr Jekyll and Mr Hyde, Kidnapped and A Child's Garden of Verses.`},
            {P:`Born and educated in Edinburgh, Stevenson suffered from serious bronchial trouble for much of his life, but continued to write prolifically and travel widely in defiance of his poor health. As a young man, he mixed in London literary circles, receiving encouragement from Andrew Lang, Edmund Gosse,[1] Leslie Stephen and W. E. Henley, the last of whom may have provided the model for Long John Silver in Treasure Island. In 1890, he settled in Samoa where, alarmed at increasing European and American influence in the South Sea islands, his writing turned away from romance and adventure fiction toward a darker realism. He died of a stroke in his island home in 1894 at age 44.`},
            {P:`A celebrity in his lifetime, Stevenson's critical reputation has fluctuated since his death, though today his works are held in general acclaim. In 2018, he was ranked, just behind Charles Dickens, as the 26th-most-translated author in the world.`},
            ]
    }
]

bookPage(bookInfo);