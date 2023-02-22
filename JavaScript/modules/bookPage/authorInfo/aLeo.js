
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/LT.webp`,
        bookTitle: `LEO TOLSTOY`,
        bookInfo: [
            {P:`Count Lev Nikolayevich Tolstoy[note 1] (/ˈtoʊlstɔɪ, ˈtɒl-/;[2] Russian: Лев Николаевич Толстой,[note 2] IPA: [ˈlʲef nʲɪkɐˈla(j)ɪvʲɪtɕ tɐlˈstoj] (listen); 9 September [O.S. 28 August] 1828 – 20 November [O.S. 7 November] 1910), usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time.[3] He received nominations for the Nobel Prize in Literature every year from 1902 to 1906 and for the Nobel Peace Prize in 1901, 1902, and 1909; the fact that he never won is a major controversy.`},
            {P:`Born to an aristocratic Russian family in 1828,[3] Tolstoy's notable works include the novels War and Peace (1869) and Anna Karenina (1878),[8] often cited as pinnacles of realist fiction.[3] He first achieved literary acclaim in his twenties with his semi-autobiographical trilogy, Childhood, Boyhood, and Youth (1852–1856), and Sevastopol Sketches (1855), based upon his experiences in the Crimean War. His fiction includes dozens of short stories such as "After the Ball" (1911), and several novellas such as The Death of Ivan Ilyich (1886), Family Happiness (1859) and Hadji Murad (1912). He also wrote plays and philosophical essays.`},
            {P:`In the 1870s, Tolstoy experienced a profound moral crisis, followed by what he regarded as an equally profound spiritual awakening, as outlined in his non-fiction work A Confession (1882). His literal interpretation of the ethical teachings of Jesus, centering on the Sermon on the Mount, caused him to become a fervent Christian anarchist and pacifist.[3] His ideas on nonviolent resistance, expressed in such works as The Kingdom of God Is Within You (1894), had a profound impact on such pivotal 20th-century figures as Mahatma Gandhi[9] and Martin Luther King Jr.[10] He also became a dedicated advocate of Georgism, the economic philosophy of Henry George, which he incorporated into his writing, particularly Resurrection (1899).`},
            ]
    }
]

bookPage(bookInfo);