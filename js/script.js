// ==================== Theme Switcher ====================

// Get the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Check saved theme from localStorage on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
}

// Toggle theme on button click
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    // Update button icon
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});