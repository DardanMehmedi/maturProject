function navbar (menuList) {
    const navbar  = document.getElementById('navbar')
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menuContainer')
    
    for(let i = 0; i< menuList.length;i++){
        const menu = document.createElement('menu')
        menu.classList.add('menu')
        menu.innerHTML = menuList[i].title
        if(menuList[i].items.length){
            for(let j = 0 ;j<menuList[i].items.length;j++){
                const menuItem = document.createElement('li')
                menuItem.classList.add('menuItem')
                menuItem.innerHTML = menuList[i].items[j].title
                menu.append(menuItem)
            }
        }
        menuDiv.append(menu)
    }
    navbar.append(menuDiv)

    const searchDiv = document.createElement('div')
    searchDiv.classList.add('searchContainer')
    const icon = document.createElement('img')
    icon.classList.add('icon')
    const searchBar = document.createElement('input')
    searchBar.classList.add('searchBar')
    const searchButton = document.createElement('button')
    searchButton.classList.add('searchButton')
    searchButton.innerHTML = 'Search'
    const themeButton = document.createElement('button')
    themeButton.classList.add('themeButton')

    searchDiv.append(icon)
    searchDiv.append(searchBar)
    searchDiv.append(searchButton)
    searchDiv.append(themeButton)

    navbar.append(searchDiv)
}

export {navbar};