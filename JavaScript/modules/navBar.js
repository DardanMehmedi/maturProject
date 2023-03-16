
function navbar (menuList) {
    const navbar  = document.getElementById('navbar')
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menuContainer')

    const homeButton = document.createElement('a')
    homeButton.classList.add('menu')
    homeButton.classList.add(`homeLink`)
    homeButton.innerHTML = menuList[0].title
    menuDiv.append(homeButton);
    homeButton.href = menuList[0].items[0].href
    const appendDiv = document.getElementById('append')

    
    for(let i = 1; i< menuList.length;i++){
        const menu = document.createElement('menu')
        menu.classList.add('menu')
        menu.innerHTML = menuList[i].title
        if(menuList[i].title === 'Authors'){
            let authorDropdown = document.createElement('div')
            authorDropdown.classList.add('sidebar')
            authorDropdown.classList.add('displayHideMenu')
            authorDropdown.id = 'sidebar'
            appendDiv.append(authorDropdown)
            menu.addEventListener(`click`, (e)=>{
                e.stopPropagation()
                if(authorDropdown.classList.contains(`displayHideMenu`)){
                    authorDropdown.classList.remove(`displayHideMenu`)
                    let genreDropdown = document.getElementsByClassName(`hoverMenu`)[0]
                    genreDropdown.classList.add(`displayHideMenu`)
                }else{
                    authorDropdown.classList.add(`displayHideMenu`)
                }

            })

            document.addEventListener(`click`, ()=>{
                if(!authorDropdown.classList.contains(`displayHideMenu`)){
                    authorDropdown.classList.add(`displayHideMenu`)
                }
            })
        }


        if(menuList[i].items.length){ 
            let liDiv = document.createElement(`div`)

            


            liDiv.classList.add(`hoverMenu`)
            liDiv.classList.add(`sideBar`)
            liDiv.classList.add(`displayHideMenu`)

            let hr = document.createElement(`hr`)
            hr.classList.add(`break`)

            liDiv.append(hr)
            menu.addEventListener(`click`, (e)=>{
                e.stopPropagation()
                if(liDiv.classList.contains(`displayHideMenu`)){
                    liDiv.classList.remove(`displayHideMenu`)
                    let authorDropdown = document.getElementById(`sidebar`)
                    authorDropdown.classList.add(`displayHideMenu`)
                }else{
                    liDiv.classList.add(`displayHideMenu`)
                }

            })
            document.addEventListener(`click`, ()=>{
                if(!liDiv.classList.contains(`displayHideMenu`)){
                    liDiv.classList.add(`displayHideMenu`)
                }
            })



            for(let j = 0 ;j<menuList[i].items.length;j++){
                const menuItem = document.createElement('li')
                const menuLink = document.createElement('a') 
                
                menuLink.classList.add(`authorLinks`)
                menuItem.classList.add('menuItem') 
                menuLink.append(menuItem)
                menuLink.href = menuList[i].items[j].href
                menuItem.innerHTML = menuList[i].items[j].title

                liDiv.append(menuLink) 
            }
            appendDiv.append(liDiv)
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
    searchBar.id = (`search`)
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