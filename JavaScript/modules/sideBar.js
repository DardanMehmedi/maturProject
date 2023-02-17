function sideBar(authorInfo, filterArray) {
  let sideBarContainer = document.createElement(`sideBarContainer`);
  sideBarContainer.classList.add(`dudu`);

  let filterContainer = document.createElement(`sideBarContainer`);
  filterContainer.classList.add(`pb-2`);
  filterContainer.classList.add(`back`);
  filterContainer.classList.add(`gigi`);

  sideBarContainer.append(filterContainer);

  for (let i = 0; i < filterArray.length; i++) {
    let listButton = document.createElement(`button`);
    listButton.classList.add(`snob`);
    listButton.append(filterArray[i].text);
    if (filterArray[i].id === `rest`) {
      listButton.classList.add(`kakur`);
      let span = document.createElement(`span`);
      span.classList.add(`material-symbols-outlined`);
      listButton.append(span);
      span.append(`autorenew`);
    }
    listButton.setAttribute(`id`, filterArray[i].id);
    filterContainer.append(listButton);
  }

  let parentAuthor = document.createElement(`div`);
  parentAuthor.classList.add(`flexo`);
  sideBarContainer.append(parentAuthor);

  let authorList = document.createElement(`ul`);
  authorList.classList.add(`ulu`);
  parentAuthor.append(authorList);

  for (let i = 0; i < authorInfo.length; i++) {
    let listItems = document.createElement(`li`);
    let authorLinks = document.createElement(`a`);

    authorList.append(listItems);
    listItems.classList.add(authorInfo[i].class);

    listItems.append(authorLinks);
    authorLinks.setAttribute(`href`, authorInfo[i].href);
    authorLinks.classList.add(`Authors`);
    authorLinks.append(authorInfo[i].name);
  }
  document.getElementsByClassName(`sideBar`)[0].append(sideBarContainer);
}

export { sideBar };
