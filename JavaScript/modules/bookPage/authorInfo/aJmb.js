
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/JMB.jpg`,
        bookTitle: `J.M. BARRIE`,
        bookInfo: [
            {P:`Sir James Matthew Barrie, 1st Baronet, OM (/ˈbæri/; 9 May 1860 – 19 June 1937) was a Scottish novelist and playwright, best remembered as the creator of Peter Pan. He was born and educated in Scotland and then moved to London, where he wrote several successful novels and plays. There he met the Llewelyn Davies boys, who inspired him to write about a baby boy who has magical adventures in Kensington Gardens (first included in Barrie's 1902 adult novel The Little White Bird), then to write Peter Pan, or The Boy Who Wouldn't Grow Up, a 1904 West End "fairy play" about an ageless boy and an ordinary girl named Wendy who have adventures in the fantasy setting of Neverland.`},
            {P:`Although he continued to write successfully, Peter Pan overshadowed his other work, and is credited with popularising the name Wendy.[1] Barrie unofficially adopted the Davies boys following the deaths of their parents. Barrie was made a baronet by George V on 14 June 1913,[2] and a member of the Order of Merit in the 1922 New Year Honours.[3] Before his death, he gave the rights to the Peter Pan works to Great Ormond Street Hospital for Children in London, which continues to benefit from them.`},

            ]
    }
]

bookPage(bookInfo);