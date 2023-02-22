
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/MS.jpg`,
        bookTitle: `MARY SHELLEY`,
        bookInfo: [
            {P:`Mary Wollstonecraft Shelley (UK: /ˈwʊlstənkrɑːft/; née Godwin; 30 August 1797 – 1 February 1851) was an English novelist who wrote the Gothic novel Frankenstein; or, The Modern Prometheus (1818), which is considered an early example of science fiction and one of her best-known works.[2] She also edited and promoted the works of her husband, the Romantic poet and philosopher Percy Bysshe Shelley. Her father was the political philosopher William Godwin and her mother was the philosopher and women's rights advocate Mary Wollstonecraft.

            Mary's mother died less than a fortnight after giving birth to her. She was raised by her father, who provided her with a rich if informal education, encouraging her to adhere to his own anarchist political theories. When she was four, her father married a neighbour, Mary Jane Clairmont, with whom Mary came to have a troubled relationship.[3][4]`},
            {P:`In 1814, Mary began a romance with one of her father's political followers, Percy Bysshe Shelley, who was already married. Together with her stepsister, Claire Clairmont, she and Percy left for France and travelled through Europe. Upon their return to England, Mary was pregnant with Percy's child. Over the next two years, she and Percy faced ostracism, constant debt and the death of their prematurely born daughter. They married in late 1816, after the suicide of Percy Shelley's first wife, Harriet.`},
            {P:`In 1816, the couple and Mary's stepsister famously spent a summer with Lord Byron and John William Polidori near Geneva, Switzerland, where Shelley conceived the idea for her novel Frankenstein. The Shelleys left Britain in 1818 for Italy, where their second and third children died before Shelley gave birth to her last and only surviving child, Percy Florence Shelley. In 1822, her husband drowned when his sailing boat sank during a storm near Viareggio. A year later, Shelley returned to England and from then on devoted herself to the upbringing of her son and a career as a professional author. The last decade of her life was dogged by illness, most likely caused by the brain tumour which killed her at age 53.

            `},
            {P:`Until the 1970s, Shelley was known mainly for her efforts to publish her husband's works and for her novel Frankenstein, which remains widely read and has inspired many theatrical and film adaptations. Recent scholarship has yielded a more comprehensive view of Shelley's achievements. Scholars have shown increasing interest in her literary output, particularly in her novels, which include the historical novels Valperga (1823) and Perkin Warbeck (1830), the apocalyptic novel The Last Man (1826) and her final two novels, Lodore (1835) and Falkner (1837). Studies of her lesser-known works, such as the travel book Rambles in Germany and Italy (1844) and the biographical articles for Dionysius Lardner's Cabinet Cyclopaedia (1829–1846), support the growing view that Shelley remained a political radical throughout her life. Shelley's works often argue that cooperation and sympathy, particularly as practised by women in the family, were the ways to reform civil society. This view was a direct challenge to the individualistic Romantic ethos promoted by Percy Shelley and the Enlightenment political theories articulated by her father, William Godwin.`},
            ]
    }
]

bookPage(bookInfo);