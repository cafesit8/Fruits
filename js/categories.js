const categories = document.querySelectorAll("#section2__btn");
const sections = document.querySelectorAll("#sections");

const addActive = (categori) => {
  categories.forEach((categori) => {
    categori.classList.remove("active");
  });
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  categories[categori].classList.add("active");
  sections[categori].classList.add("active");
};
categories.forEach((categori, id) => {
  categori.addEventListener("click", () => {
    addActive(id);
  });
});
