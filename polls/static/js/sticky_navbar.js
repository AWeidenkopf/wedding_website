document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if(window.scrollY > 880){
      document.getElementById('navbar').classList.add('navbar_fixed_top')
    } else {
      document.getElementById('navbar').classList.remove('navbar_fixed_top')
    }
  })
})