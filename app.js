const showFormBtn = document.querySelector("#showForm");
const showAndHideDiv = document.querySelector("#showAndHide");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");

showFormBtn.addEventListener("click", showForm);

function showForm() {
  showAndHideDiv.classList.toggle("hidden");
}
