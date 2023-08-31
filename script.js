const navTogglestn = document. querySelector(" [data-nav-toggle-btn]");
const header = document .queryselector ("[data-header]");
navToggleBtn. addEventListener("click", function () {
this.classList.toggle("active");
header.classList.toggle("active");
});


const goTopBtn = document.queryselector ("[data-go-top]");

window .addEventListener ("scroll", function () {
    window.scrollY > 500 ? goTopBtn.classList.add("active")
    :goTopBtn. classList.remove("active");
});