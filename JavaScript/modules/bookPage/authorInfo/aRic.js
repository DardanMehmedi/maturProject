
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/RicD.jpg`,
        bookTitle: `RICHARD DAWKINS`,
        bookInfo: [
            {P:`Clinton Richard Dawkins FRS FRSL (born 26 March 1941)[7] is a British evolutionary biologist and author. He is an emeritus fellow of New College, Oxford, and was Professor for Public Understanding of Science in the University of Oxford from 1995 to 2008. His 1976 book The Selfish Gene popularised the gene-centred view of evolution. Dawkins has won several academic and writing awards.`},
            {P:`In The Selfish Gene Dawkins says that life evolves by the differential survival of replicating entities. With his book The Extended Phenotype (1982), he introduced into evolutionary biology the influential concept that the phenotypic effects of a gene are not necessarily limited to an organism's body, but can stretch far into the environment; an example is when a beaver builds a dam. This book and The Selfish Gene also introduced the term meme.`},
            {P:`Dawkins is well known for his criticism of creationism and intelligent design as well as for being a vocal atheist.[9] Dawkins wrote The Blind Watchmaker in 1986, arguing against the watchmaker analogy, an argument for the existence of a supernatural creator based upon the complexity of living organisms. Instead, he describes evolutionary processes as analogous to a blind watchmaker, in that reproduction, mutation, and selection are unguided by any sentient designer. In 2006, Dawkins published The God Delusion, contending that a supernatural creator almost certainly does not exist and that religious faith is a delusion. He founded the Richard Dawkins Foundation for Reason and Science in 2006.`},
            ]
    }
]

bookPage(bookInfo);