
import { bookPage } from "../bookPageTemplate.js"

const bookInfo = [
    {
        bookCover: `../../authorPages/Authors/ST.jpg`,
        bookTitle: `SUN TZU`,
        bookInfo: [
            {P:`Sun Tzu (/suːn ˈdzuː, suːn ˈsuː/ soon DZOO, soon SOO;[1][2] traditional Chinese: 孫子; simplified Chinese: 孙子; pinyin: Sūnzǐ) was a Chinese military general, strategist, philosopher, and writer who lived during the Eastern Zhou period of 771 to 256 BCE. Sun Tzu is traditionally credited as the author of The Art of War, an influential work of military strategy that has affected both Western and East Asian philosophy and military thinking. Sun Tzu is revered in Chinese and East Asian culture as a legendary historical and military figure. His birth name was Sun Wu (traditional Chinese: 孫武; simplified Chinese: 孙武) and he was known outside of his family by his courtesy name Changqing (Chinese: 長卿).[citation needed] The name Sun Tzu by which he is more popularly known is an honorific which means "Master Sun".`},
            {P:`Sun Tzu's historicity is uncertain. The Han dynasty historian Sima Qian and other traditional Chinese historians placed him as a minister to King Helü of Wu and dated his lifetime to 544–496 BCE. Modern scholars accepting his historicity place the extant text of The Art of War in the later Warring States period of 475 to 221 BCE – based on its style of composition and its descriptions of warfare.[3] Traditional accounts state that the general's descendant Sun Bin wrote a treatise on military tactics, also titled The Art of War. Since both Sun Wu and Sun Bin were referred to as "Sun Tzu" in classical Chinese texts, some historians believed them identical, prior to the rediscovery of Sun Bin's treatise in 1972.`},
            {P:`Sun Tzu's work has been praised and employed in East Asian warfare since its composition. During the twentieth century, The Art of War grew in popularity and saw practical use in the Western world as well. It remains influential in many contemporary competitive endeavors across the modern world beyond military strategy and warfare, including espionage,[4] culture, politics, business, and sports.`},
            ]
    }
]

bookPage(bookInfo);