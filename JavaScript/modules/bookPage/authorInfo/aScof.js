
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/SF.jpg`,
        bookTitle: `F. SCOTT FITZGERALD`,
        bookInfo: [
            {P:`Francis Scott Key Fitzgerald (September 24, 1896 – December 21, 1940) was an American novelist, essayist, and short story writer. He is best known for his novels depicting the flamboyance and excess of the Jazz Age—a term he popularized in his short story collection Tales of the Jazz Age. During his lifetime, he published four novels, four story collections, and 164 short stories. Although he achieved temporary popular success and fortune in the 1920s, Fitzgerald received critical acclaim only after his death and is now widely regarded as one of the greatest American writers of the 20th century.`},
            {P:`Born into a middle-class family in Saint Paul, Minnesota, Fitzgerald was raised primarily in New York state. He attended Princeton University where he befriended future literary critic Edmund Wilson. Owing to a failed romantic relationship with Chicago socialite Ginevra King, he dropped out in 1917 to join the United States Army during World War I. While stationed in Alabama, he met Zelda Sayre, a Southern debutante who belonged to Montgomery's exclusive country-club set. Although she initially rejected Fitzgerald's marriage proposal due to his lack of financial prospects, Zelda agreed to marry him after he published the commercially successful This Side of Paradise (1920). The novel became a cultural sensation and cemented his reputation as one of the eminent writers of the decade.`},
            {P:`His second novel, The Beautiful and Damned (1922), propelled him further into the cultural elite. To maintain his affluent lifestyle, he wrote numerous stories for popular magazines such as The Saturday Evening Post, Collier's Weekly, and Esquire. During this period, Fitzgerald frequented Europe, where he befriended modernist writers and artists of the "Lost Generation" expatriate community, including Ernest Hemingway. His third novel, The Great Gatsby (1925), received generally favorable reviews but was a commercial failure, selling fewer than 23,000 copies in its first year. Despite its lackluster debut, The Great Gatsby is now hailed by some literary critics as the "Great American Novel". Following the deterioration of his wife's mental health and her placement in a mental institute for schizophrenia, Fitzgerald completed his final novel, Tender Is the Night (1934).`},
            {P:`Struggling financially because of the declining popularity of his works amid the Great Depression, Fitzgerald moved to Hollywood where he embarked upon an unsuccessful career as a screenwriter. While living in Hollywood, he cohabited with columnist Sheilah Graham, his final companion before his death. After a long struggle with alcoholism, he attained sobriety only to die of a heart attack in 1940, at 44. His friend Edmund Wilson edited and published an unfinished fifth novel, The Last Tycoon (1941), after Fitzgerald's death.`},
            ]
    }
]

bookPage(bookInfo);