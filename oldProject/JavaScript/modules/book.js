function bookList(books) {
  for (let i = 0; i < books.length; i++) {
    let cardDiv = document.createElement(`div`);
    cardDiv.classList.add(`bookCard`);

    let bookCoverDiv = document.createElement(`div`);

    let booklink = document.createElement(`a`);
    booklink.href = books[i].bookPage;
    bookCoverDiv.append(booklink);
    booklink.classList.add(`dull`);

    let image = document.createElement(`img`);
    image.classList.add(`coverM`);
    image.src = books[i].bookCover;
    booklink.append(image);
    cardDiv.append(bookCoverDiv);

    let bookNameDiv = document.createElement(`div`);
    bookNameDiv.classList.add(`bookinfo`);
    bookNameDiv.classList.add(`col-9`);

    let paragraph = document.createElement(`p`);
    let bookNamelink = document.createElement(`a`);
    paragraph.classList.add(`bookTitle`);
    bookNamelink.href = books[i].bookPage;
    paragraph.append(bookNamelink);
    bookNamelink.classList.add(`dull`);
    bookNamelink.append(books[i].bookTitle);
    bookNameDiv.append(paragraph);
    cardDiv.append(bookNameDiv);
    document.getElementsByClassName(`bookContainer`)[0].append(cardDiv);
  }
}

export { bookList };
