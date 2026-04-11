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

// ==================== Project Filtering ====================

// Get all filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");

// Only run filtering code if filter buttons exist on the page
if (filterButtons.length > 0) {
    // Get all project articles
    const projects = document.querySelectorAll("#projects article");

    // Add click event listener to each filter button
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Get the filter value from data-filter attribute
            const filter = button.dataset.filter;

            // Remove current class from all buttons
            filterButtons.forEach(function (btn) {
                btn.classList.remove("current");
            });

            // Add current class to clicked button
            button.classList.add("current");

            // Show or hide projects based on filter
            projects.forEach(function (project) {
                if (filter === "all" || project.dataset.category === filter) {
                    project.style.display = "";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
}