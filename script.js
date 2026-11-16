// Getting html elements
const menuToggle = document.getElementById('menu-toggle')
const navLinks = document.querySelector('.nav-links')
const navLinksA = document.querySelectorAll('.nav-links a')


// Making addEventListener
menuToggle.addEventListener('click',
  ()=>{
    navLinks.classList.toggle('active')
    
    
  }
)
navLinksA.forEach((navLinkA) =>{
  navLinkA.addEventListener('click',
    ()=>{
      navLinks.classList.remove('active')
    }
  )
})
