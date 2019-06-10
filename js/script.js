var link = document.querySelector(".search-button");
var form = document.querySelector(".search-form");
var date = form.querySelector("[name=date-checkin]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("form-close");
    date.focus();
});