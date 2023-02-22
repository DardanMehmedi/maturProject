
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/JW.jpg`,
        bookTitle: `DR. JAMES WATSON`,
        bookInfo: [
            {P:`James Dewey Watson (born April 6, 1928) is an American molecular biologist, geneticist, and zoologist. In 1953, he co-authored with Francis Crick the academic paper proposing the double helix structure of the DNA molecule. Watson, Crick and Maurice Wilkins were awarded the 1962 Nobel Prize in Physiology or Medicine "for their discoveries concerning the molecular structure of nucleic acids and its significance for information transfer in living material". In subsequent years, it has been recognized that Watson and his colleagues did not properly attribute colleague Rosalind Franklin for her contributions to the discovery of the double helix structure.`},
            {P:`Watson earned degrees at the University of Chicago (BS, 1947) and Indiana University (PhD, 1950). Following a post-doctoral year at the University of Copenhagen with Herman Kalckar and Ole Maaløe, Watson worked at the University of Cambridge's Cavendish Laboratory in England, where he first met his future collaborator Francis Crick. From 1956 to 1976, Watson was on the faculty of the Harvard University Biology Department, promoting research in molecular biology.`},
            {P:`From 1968, Watson served as director of Cold Spring Harbor Laboratory (CSHL), greatly expanding its level of funding and research. At CSHL, he shifted his research emphasis to the study of cancer, along with making it a world-leading research center in molecular biology. In 1994, he started as president and served for 10 years. He was then appointed chancellor, serving until he resigned in 2007 after making comments claiming that there is a genetic link between intelligence and race. In 2019, following the broadcast of a documentary in which Watson reiterated these views on race and genetics, CSHL revoked his honorary titles and severed all ties with him.`},
            {P:`Watson has written many science books, including the textbook Molecular Biology of the Gene (1965) and his bestselling book The Double Helix (1968). Between 1988 and 1992, Watson was associated with the National Institutes of Health, helping to establish the Human Genome Project, which completed the task of mapping the human genome in 2003.`},
            ]
    }
]

bookPage(bookInfo);