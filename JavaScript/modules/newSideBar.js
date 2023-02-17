function sidebar (authorInfo,filterArray) {
    const sideBar = document.getElementById('sidebar')
    const filterContainer = document.createElement('div')
    filterContainer.classList.add('filterContainer')
    for(let i=0; i<filterArray.length;i++){
        const button = document.createElement('button')
        button.id = filterArray[i].id
        button.innerHTML = filterArray[i].text
        button.classList.add('button')
        filterContainer.append(button)
        sideBar.append(filterContainer)
    }

    for(let i=0 ; i<authorInfo.length;i++){
        const authorLinks = document.createElement('a')
        authorLinks.innerHTML = authorInfo[i].name
        authorLinks.href = authorInfo[i].href
        authorLinks.classList.add('authorLinks') 
        sideBar.append(authorLinks)
    }

   
}

export {sidebar};