function changeTheme(){
    const button  = document.getElementById('themeButton')
    button.addEventListener('click',() => {
        const container = document.getElementsByClassName('customContainer')[0]
        if(container.classList.contains('dark')){
            container.classList.remove('dark')
        }else{
            container.classList.add('dark')
        }
    })
}


changeTheme()