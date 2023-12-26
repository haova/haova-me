document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".haova .logo");
  const currentTheme = localStorage.getItem("currentTheme") || "light";

  const toggleTheme = (nextTheme) => {
    if (!nextTheme) {
      nextTheme = document.documentElement.classList.contains("dark")
        ? "light"
        : "dark";
    }

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("currentTheme", nextTheme);
  };

  toggleTheme(currentTheme);

  for (const btn of btns) {
    btn.addEventListener("click", () => {
      toggleTheme();
    });
  }
});
