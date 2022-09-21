
const hamburguer = document.getElementById('hamburguer')
const list = document.querySelector('.header__lista')

hamburguer.addEventListener('click', ()=>{
    list.classList.toggle('open')
    hamburguer.classList.toggle('open')

    if(hamburguer.classList.contains('open')){
        hamburguer.setAttribute('name', 'close-outline')
    }else{
        hamburguer.setAttribute('name', 'menu-outline')
    }
})

// console.log(hamburguer);
// console.log(hamburguer.getAttribute('name'));
