
const header = document.querySelector('header')

window.addEventListener('scroll', ()=>{
    header.classList.toggle('stiky', window.scrollY > 80)
})
