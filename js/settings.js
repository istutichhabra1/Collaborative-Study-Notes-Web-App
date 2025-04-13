
document.getElementById("toggleDark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

document.getElementById("clearAll").addEventListener("click", () => {
  if (confirm("Clear all notes from local storage?")) {
    localStorage.clear();
  }
});
