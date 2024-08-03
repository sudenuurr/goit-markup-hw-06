console.log("hello world");

/**
 * 1.Hamburger menüyü açmak için butonu seç
 * 2.Hamburger menüyü seç
 * 3.Hamburger menüyü kapatıcak olan butonu seç
 *
 * 4.hamburger menüyü açıcak olan butonun açmasını sağla
 * 5.hamburger menüyü kapatıcak olan butonun kapama işlemini yapmasını sağla
 *
 */

//1.
const hamburgerOpenButton = document.getElementById(
  "hamburger-menu-open-button"
);
//2.
const hamburgerMenu = document.getElementById("hamburger-menu");
//3.
const hamburgerCloseButton = document.getElementById(
  "hamburger-menu-close-button"
);
//butona tıklandığında
hamburgerOpenButton.addEventListener("click", function () {
  hamburgerMenu.classList.add("is-open");
});
hamburgerCloseButton.addEventListener("click", function () {
  hamburgerMenu.classList.remove("is-open");
});
