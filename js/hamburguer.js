
const hamburguer = document.getElementById('hamburguer')
const list = document.querySelector('.header__lista')
const options = document.querySelectorAll('#option')

hamburguer.addEventListener('click', ()=>{
    list.classList.toggle('open')
    hamburguer.classList.toggle('open')

    if(hamburguer.classList.contains('open')){
        hamburguer.setAttribute('name', 'close-outline')
    }else{
        hamburguer.setAttribute('name', 'menu-outline')
    }
})

options.forEach(option =>{
    option.addEventListener('click', ()=>{
        list.classList.remove('open')
        hamburguer.classList.remove('open')
        hamburguer.setAttribute('name', 'menu-outline')
    })
})