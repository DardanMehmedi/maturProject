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

    console.log(`hyni`, cTitels);
    console.log(`hyni`, fButton); 

  btnFiction.addEventListener(`click`, () => {
    console.log(`yni fiction`)
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
  
  btnNonFiction.addEventListener(`click`, () => {
    console.log(`yni nfiction`)
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
  
  btnC.addEventListener(`click`, () => {
    console.log(`yni cfiction`)
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

  btnRefresh.addEventListener(`click`, () => {
    console.log(`yni reset`)
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