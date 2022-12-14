const icon = document.querySelector(".fa-bars");
const list = document.querySelector(".navListMobile");

icon.addEventListener("click", function () {
    list.classList.toggle("listVisible");
    icon.classList.toggle("icon")
})