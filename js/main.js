let action = document.getElementById('active');
let menu = document.getElementById('menu');

action.addEventListener('click' , ()=>{
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
})

menu.addEventListener('click' , ()=>{
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
})