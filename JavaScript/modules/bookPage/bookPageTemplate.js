
let bookDiv = document.createElement(`div`);
let bookCover = document.createElement(`img`);
let bookTitle = document.createElement(`p`);
let bookLinks = document.createElement(`a`);
let customContainer = document.getElementsByClassName(`customContainer`)[0]


bookDiv.classList.add(`flexKit`);
customContainer.append(bookDiv);
bookDiv.append(bookCover);
bookDiv.append(bookTitle);


function bookPage(bookInfo){
    bookCover.classList.add(`border`)
    bookTitle.classList.add(`TitleStyle`)
    let textDiv = document.createElement(`div`)
    bookDiv.append(textDiv)
    textDiv.classList.add(`textFlex`)
    textDiv.append(bookTitle)
    bookCover.src = bookInfo[0].bookCover
    bookTitle.innerHTML = bookInfo[0].bookTitle
    
        for(let i = 0; i < bookInfo[0].bookInfo.length; i++){
            let bookInfos = document.createElement(`h5`);
            bookDiv.append(bookInfos)
            textDiv.append(bookInfos)
            bookInfos.classList.add(`infoStyle`)
            bookInfos.append(bookInfo[0].bookInfo[i].P)
        }
    }

    

export {bookPage}


