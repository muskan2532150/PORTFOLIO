navright =document.querySelector('.navright')
burger = document.querySelector('.burger')
closeBtn = document.querySelector('.close-btn')


burger.addEventListener('click', ()=>{
    navright.classList.toggle('click');
})

closeBtn.addEventListener('click', ()=>{
    navright.classList.toggle('click');
})