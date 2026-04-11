// ==================== Theme Switcher ====================

// Get the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

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