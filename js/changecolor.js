
const theme = document.querySelector(':root')
const btns = document.querySelectorAll('#color')

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const color = e.currentTarget.classList;

        if(color.contains('color-yellow')){
            theme.style.setProperty('--color-yellow', '#fbd739')
            theme.style.setProperty('--colorBg-yellow', '#fcf5d6')
        }else if(color.contains('color-green')){
            theme.style.setProperty('--color-yellow', '#b0df30')
            theme.style.setProperty('--colorBg-yellow', '#EDFDC2')
        }else if(color.contains('color-blue')){
            theme.style.setProperty('--color-yellow', '#58C2FB')
            theme.style.setProperty('--colorBg-yellow', '#C2E5F8')
        }else{
            theme.style.setProperty('--color-yellow', '#FC9F2E')
            theme.style.setProperty('--colorBg-yellow', '#FCECD9')
        }
    })
})