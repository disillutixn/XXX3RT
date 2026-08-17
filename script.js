const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeIcon.textContent = "☾";
  themeText.textContent = "Light";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const light = document.body.classList.contains("light");

  themeIcon.textContent = light ? "☾" : "☼";
  themeText.textContent = light ? "Light" : "Dark";
  localStorage.setItem("theme", light ? "light" : "dark");
});
