
function navbar (menuList) {
    const navbar  = document.getElementById('navbar')
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menuContainer')
    
    for(let i = 0; i< menuList.length;i++){
        const menu = document.createElement('menu')
        menu.classList.add('menu')
        menu.innerHTML = menuList[i].title
        if(menuList[i].title === 'Authors'){
            const appendDiv = document.getElementById('append')
            appendDiv.classList.add('displayHideMenu')
            let authorDropdown = document.createElement('div')
            authorDropdown.classList.add('sidebar')
            authorDropdown.id = 'sidebar'
            appendDiv.append(authorDropdown)
            menu.addEventListener(`click`, (e)=>{
                e.stopPropagation()
                if(appendDiv.classList.contains(`displayHideMenu`)){
                    appendDiv.classList.remove(`displayHideMenu`)
                }else{
                    appendDiv.classList.add(`displayHideMenu`)
                }

            })

            document.addEventListener(`click`, ()=>{
                if(!appendDiv.classList.contains(`displayHideMenu`)){
                    appendDiv.classList.add(`displayHideMenu`)
                }
            })
        }

        if(menuList[i].items.length){ 
            let liDiv = document.createElement(`div`)
            liDiv.classList.add(`displayHideMenu`)
            menu.addEventListener(`click`, (e)=>{
                e.stopPropagation()
                if(liDiv.classList.contains(`displayHideMenu`)){
                    liDiv.classList.remove(`displayHideMenu`)
                }else{
                    liDiv.classList.add(`displayHideMenu`)
                }

            })
            document.addEventListener(`click`, ()=>{
                if(!liDiv.classList.contains(`displayHideMenu`)){
                    liDiv.classList.add(`displayHideMenu`)
                }
            })
            liDiv.classList.add(`hoverMenu`)
            for(let j = 0 ;j<menuList[i].items.length;j++){
                const menuItem = document.createElement('li')
                const menuLink = document.createElement('a') 
                menuItem.classList.add('menuItem') 
                menuLink.append(menuItem)
                menuLink.href = menuList[i].items[j].href
                menuItem.innerHTML = menuList[i].items[j].title

                liDiv.append(menuLink) 
            }
            menu.append(liDiv)
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
    themeButton.id = 'themeButton'

    searchDiv.append(icon)
    searchDiv.append(searchBar)
    searchDiv.append(searchButton)
    searchDiv.append(themeButton)

    navbar.append(searchDiv)
}

export {navbar};