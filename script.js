const openNav = document.querySelector('.open'),
      closeNav = document.querySelector('.close'),
      navListItem = document.querySelectorAll('.main-nav-list-item span')
      nav = document.querySelector('header .navigation')
      headerBody = document.querySelector('.header-body')


//Toggle Nav
openNav.addEventListener('click', () => {
    closeNav.classList.remove('disappear')
    openNav.classList.add('disappear')
    nav.classList.add('show-nav')
    headerBody.style.transform = 'translate(-150rem, -50%)'
})

closeNav.addEventListener('click', () => {
    closeNav.classList.add('disappear')
    openNav.classList.remove('disappear')
    nav.classList.remove('show-nav')
    headerBody.style.transform = 'translate(-50%, -50%)'
})

//Header Nav
navListItem.forEach(item => {

    item.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelectorAll('.sub-nav-item').forEach(el => {
         if(el !== e.target.parentElement.parentElement.lastElementChild){el.classList.add('disappear')
         el.parentElement.firstElementChild.lastElementChild.lastElementChild.classList.remove('rotate')
        }})
        item.firstElementChild.classList.toggle('rotate')
        let subNav = item.parentElement.parentElement.lastElementChild
        subNav.classList.toggle('disappear')
    })
});