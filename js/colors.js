
const btncolor = document.getElementById('btn-color')
const arrow = document.querySelector('.arrow')
const headercolors = document.querySelector('.header__colors')
const btns2 = document.querySelectorAll('#color')

btncolor.addEventListener('click', ()=>{
    btncolor.classList.toggle('active')
    arrow.classList.toggle('active')
    headercolors.classList.toggle('active')
})


const addClass =(btn)=>{

    btns2.forEach(btn=>{
        btn.classList.remove('active')
    })

    btns2[btn].classList.add('active')
}


btns2.forEach((btn, i)=>{
    btn.addEventListener('click',()=>{
        addClass(i)
    })
})