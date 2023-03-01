document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.innerHeight < 700 && window.innerWidth < 400) {
      if (window.scrollY > 590) {
        document
          .getElementById("navbar_mobile")
          .classList.add("navbar_fixed_top");
      } else {
        document
          .getElementById("navbar_mobile")
          .classList.remove("navbar_fixed_top");
      }
    } else if (window.innerHeight < 900 && window.innerWidth < 400) {
      if (window.scrollY > 740) {
        document
          .getElementById("navbar_mobile")
          .classList.add("navbar_fixed_top");
      } else {
        document
          .getElementById("navbar_mobile")
          .classList.remove("navbar_fixed_top");
      }
    } else if (window.innerHeight > 900 && window.innerWidth < 900) {
      if (window.scrollY > 1040) {
        document
          .getElementById("navbar_mobile")
          .classList.add("navbar_fixed_top");
      } else {
        document
          .getElementById("navbar_mobile")
          .classList.remove("navbar_fixed_top");
      }
    } else {
      if (window.scrollY > 880) {
        document.getElementById("navbar").classList.add("navbar_fixed_top");
      } else {
        document.getElementById("navbar").classList.remove("navbar_fixed_top");
      }
    }
  });
});

// TODO ENSURE THAT THE CORRECT CLASS IS ADDED FOR SCREENS WITH HEIGHT GREATER THAN 900 AND 
// TODO WIDTH SMALLER THAN 900 (window.innerHeight seem not to work)