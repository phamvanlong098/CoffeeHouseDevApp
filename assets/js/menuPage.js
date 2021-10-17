// Menu Mobile
const openMenu = document.getElementById('header-toggle')
const closeMenu = document.getElementById('overlay')
const menuEle = document.getElementById('header-menu')
openMenu.addEventListener('click', function(){
  menuEle.classList.add('active');
  closeMenu.classList.add('active');
})
closeMenu.addEventListener('click', function(){
  menuEle.classList.remove('active');
  closeMenu.classList.remove('active');
})
// List Menu Click Event

const menuLinkEl =document.querySelectorAll('.listMenu__list li a');
menuLinkEl.forEach(item => {
  
  item.addEventListener('click',(e)=>{
    document.querySelector('.listMenu__list li a.active').classList.remove('active');
    item.classList.add('active');
  })
})
// Scroll Event
window.addEventListener('scroll',()=>{
  let menuSectionEl = document.querySelectorAll('.listMenu__content section');
  menuSectionEl.forEach((item,index) => {
    let rect = item.getBoundingClientRect().y;
    if(rect < window.innerHeight - 150){
      menuLinkEl.forEach(item => item.classList.remove('active'))
      menuLinkEl[index].classList.add('active');
    }
  })
})