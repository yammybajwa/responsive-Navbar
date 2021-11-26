const btn = document.querySelector(".nav-toggle")
const link = document.querySelector(".links")
btn.addEventListener("click", function() {
    link.classList.toggle("show-links");
});