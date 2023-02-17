let fTitels = document.getElementsByClassName(`FictionAuthors`);
let nFTitels = document.getElementsByClassName(`NonFictionAuthors`);
let cTitels = document.getElementsByClassName(`ClassicAuthors`);
let txtColor = document.getElementsByClassName(`Authors`);
let sCroll = document.getElementsByClassName(`ulu`);
let cCroll = document.getElementsByClassName(`dull`);
let sideBar = document.getElementsByClassName(`dudu`);
let theme = localStorage.getItem(`theme`);

let btnFiction = document.getElementById(`fButton`);
let btnNonFiction = document.getElementById(`nFButton`);
let btnC = document.getElementById(`cButton`);
let btnRefresh = document.getElementById(`rest`);
let sleepBtn = document.getElementById(`switch`);

const nav = document.getElementsByClassName(`navbar`)[0];
const side = document.getElementsByClassName(`sidebar`)[0];

function changeTheme() {
  if (theme === `dark`) {
    document.body.classList.add("change");
    for (var i = 0; i < txtColor.length; i++) {
      txtColor[i].classList.add(`change`);
    }
    for (var i = 0; i < cCroll.length; i++) {
      cCroll[i].classList.add(`change`);
    }
    sideBar[0].classList.add(`change`);
  } else {
    document.body.classList.remove(`change`);
    for (var i = 0; i < txtColor.length; i++) {
      txtColor[i].classList.remove(`change`);
    }
    for (var i = 0; i < cCroll.length; i++) {
      cCroll[i].classList.remove(`change`);
    }
    sideBar[0].classList.remove(`change`);
  }
}

changeTheme();
sleepBtn.addEventListener(`click`, () => {
  localStorage.setItem(`theme`, theme === `dark` ? `light` : `dark`);
  theme = localStorage.getItem(`theme`);
  console.log(`theme`, theme);
  changeTheme();
});

btnFiction.addEventListener(`click`, () => {
  for (var i = 0; i < fTitels.length; i++) {
    fTitels[i].style.display = "inline-block";
    nFTitels[i].style.display = "none";
    cTitels[i].style.display = "none";
  }
});

btnNonFiction.addEventListener(`click`, () => {
  for (var i = 0; i < nFTitels.length; i++) {
    nFTitels[i].style.display = "inline-block";
    fTitels[i].style.display = "none";
    cTitels[i].style.display = "none";
  }
});

btnC.addEventListener(`click`, () => {
  for (var i = 0; i < cTitels.length; i++) {
    cTitels[i].style.display = "inline-block";
    nFTitels[i].style.display = "none";
    fTitels[i].style.display = "none";
  }
});

btnRefresh.addEventListener(`click`, () => {
  for (var i = 0; i < cTitels.length; i++) {
    cTitels[i].style.display = "inline-block";
  }

  for (var i = 0; i < fTitels.length; i++) {
    nFTitels[i].style.display = "inline-block";
  }

  for (var i = 0; i < nFTitels.length; i++) {
    fTitels[i].style.display = "inline-block";
  }
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
