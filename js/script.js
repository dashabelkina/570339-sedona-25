var link = document.querySelector(".search-button");
var form = document.querySelector(".search-form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (form.classList.contains("formclose")) {
    form.classList.remove("formclose");
    form.classList.add("formopen");
    }
    else {
    form.classList.remove("formopen");
    form.classList.add("formclose");
    }
});