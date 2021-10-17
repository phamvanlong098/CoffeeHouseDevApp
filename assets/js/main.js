const sliderOwl = () => {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
  });
};
if ($(".owl-carousel")) {
  sliderOwl();
}

// Menu Mobile
const openMenu = document.getElementById("header-toggle");
const closeMenu = document.getElementById("overlay");
const menuEle = document.getElementById("header-menu");
openMenu.addEventListener("click", function () {
  menuEle.classList.add("active");
  closeMenu.classList.add("active");
});
closeMenu.addEventListener("click", function () {
  menuEle.classList.remove("active");
  closeMenu.classList.remove("active");
});
