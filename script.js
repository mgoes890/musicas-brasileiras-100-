// -------------------------------
// Alternância de Tema Claro/Escuro
// -------------------------------

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Função para aplicar tema
function applyTheme(theme) {
  body.classList.toggle("dark", theme === "dark");
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

// Carregar tema salvo ou padrão
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

// Evento de clique no botão
themeToggle.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
});
