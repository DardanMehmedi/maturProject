function sidebar (authorInfo,filterArray) {
    const sideBar = document.getElementById('sidebar')
    const filterContainer = document.createElement('div')
    filterContainer.classList.add('filterContainer')
    for(let i=0; i<filterArray.length;i++){
        const button = document.createElement('button')
        button.id = filterArray[i].id
        button.innerHTML = filterArray[i].text
        button.classList.add('button')
        if(i=== 0){
          button.classList.add('focused')  
        }
        filterContainer.append(button)
        sideBar.append(filterContainer)
    }

    const hr = document.createElement('hr')
    hr.classList.add('break')
    sideBar.append(hr)

    for(let i=0 ; i<authorInfo.length;i++){
        const authorLinks = document.createElement('a')
        authorLinks.innerHTML = authorInfo[i].name
        authorLinks.href = authorInfo[i].href
        authorLinks.classList.add(authorInfo[i].class) 
        authorLinks.classList.add(`authorLinks`) 
        sideBar.append(authorLinks)
    }

}

function changeAuthors(){
    let cTitels = document.getElementsByClassName(`ClassicAuthors`);
    let nFTitels = document.getElementsByClassName(`NonFictionAuthors`);
    let fTitels = document.getElementsByClassName(`FictionAuthors`);

    let btnFiction = document.getElementById(`fButton`);
    let btnNonFiction = document.getElementById(`nFButton`);
    let btnC = document.getElementById(`cButton`);
    let btnRefresh = document.getElementById(`rest`)

  btnFiction.addEventListener(`click`, (e) => {
    btnFiction.classList.add('focused')
    btnNonFiction.classList.remove('focused')
    btnC.classList.remove('focused')
    btnRefresh.classList.remove('focused')
    e.stopPropagation()
    for (var i = 0; i < cTitels.length; i++) {
      cTitels[i].style.display = "none";
    }
  
    for (var i = 0; i < nFTitels.length; i++) {
      nFTitels[i].style.display = "none";
    }
  
    for (var i = 0; i < fTitels.length; i++) {
      fTitels[i].style.display = "inline-block";
    } 

  });
  
  btnNonFiction.addEventListener(`click`, (e) => {
    btnNonFiction.classList.add('focused')
    btnFiction.classList.remove('focused')
    btnC.classList.remove('focused')
    btnRefresh.classList.remove('focused')
    e.stopPropagation()
    for (var i = 0; i < cTitels.length; i++) {
      cTitels[i].style.display = "none";
    }
  
    for (var i = 0; i < nFTitels.length; i++) {
      nFTitels[i].style.display = "inline-block";
    }
  
    for (var i = 0; i < fTitels.length; i++) {
      fTitels[i].style.display = "none";
    }

  });
  
  btnC.addEventListener(`click`, (e) => {
    btnC.classList.add('focused')
    btnNonFiction.classList.remove('focused')
    btnFiction.classList.remove('focused')
    btnRefresh.classList.remove('focused')
    e.stopPropagation()
    for (var i = 0; i < cTitels.length; i++) {
      cTitels[i].style.display = "inline-block";
    }
  
    for (var i = 0; i < nFTitels.length; i++) {
      nFTitels[i].style.display = "none";
    }
  
    for (var i = 0; i < fTitels.length; i++) {
      fTitels[i].style.display = "none";
    }

  });

  btnRefresh.addEventListener(`click`, (e) => {
    btnRefresh.classList.add('focused')
    btnNonFiction.classList.remove('focused')
    btnC.classList.remove('focused')
    btnFiction.classList.remove('focused')
    e.stopPropagation()
    for (var i = 0; i < cTitels.length; i++) {
      cTitels[i].style.display = "inline-block";
    }
  
    for (var i = 0; i < nFTitels.length; i++) {
      nFTitels[i].style.display = "inline-block";
    }
  
    for (var i = 0; i < fTitels.length; i++) {
      fTitels[i].style.display = "inline-block";
    }

  });

  }
  
export {changeAuthors};
export {sidebar};