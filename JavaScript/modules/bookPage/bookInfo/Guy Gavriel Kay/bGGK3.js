
import { bookPage } from "../../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../bookPages/All Covers/Lord of Emperors.jpg`,
        bookTitle: `LORD OF EMPERORS`,
        bookInfo: [
            {P:`Beckoned by the Emperor Valerius, Crispin, a renowned mosaicist, has arrived in the fabled city of Sarantium. Here he seeks to fulfill his artistic ambitions and his destiny high upon a dome that will become the emerror's magnificent sanctuary and legacy.`},
            {P:`But the beauty and solitude of his work cannot protect his from Sarantium's intrigue. Beneath him the city swirls with rumors of war and conspiracy, while otherworldly fires mysteriously flicker and disappear in the streets at night. Valerius is looking west to Crispin's homeland to reunite an Empire -- a plan that may have dire consequences for the loved ones Crispin left behind.`},
            {P:`In Sarantium, however, loyalty is always complex, for Crispin's fate has become entwined with that of Valerius and his Empress, as well as Queen Gisel, his own monarch exiled in Sarantium herself. And now another voyager -- this time from the east -- has arrived, a pysician determined to make his mark amid the shifting, treachearous currents of passion and violence that will determine the empire's fate.`},
            ]
    }
]

bookPage(bookInfo);