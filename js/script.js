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

// ==================== GitHub Profile ====================

// Only run GitHub code if the github-profile element exists on the page
const githubProfile = document.getElementById("github-profile");

if (githubProfile) {
    const username = "so-yeon-333";

    // Fetch and display GitHub profile
    async function loadProfile() {
        try {
            const response = await fetch("https://api.github.com/users/" + username);
            const data = await response.json();

            // Clear loading text
            githubProfile.textContent = "";

            // Create avatar image
            const avatar = document.createElement("img");
            avatar.src = data.avatar_url;
            avatar.alt = data.name + " profile picture";
            avatar.id = "github-avatar";
            githubProfile.appendChild(avatar);

            // Create info container
            const infoDiv = document.createElement("div");
            infoDiv.id = "github-info";

            // Name
            const name = document.createElement("h3");
            name.textContent = data.name;
            infoDiv.appendChild(name);

            // Bio
            const bio = document.createElement("p");
            bio.textContent = data.bio || "No bio available";
            infoDiv.appendChild(bio);

            // Stats: public repos, followers, following
            const stats = document.createElement("div");
            stats.id = "github-stats";

            const repos = document.createElement("span");
            repos.textContent = "📁 Repos: " + data.public_repos;
            stats.appendChild(repos);

            const followers = document.createElement("span");
            followers.textContent = "👥 Followers: " + data.followers;
            stats.appendChild(followers);

            const following = document.createElement("span");
            following.textContent = "➡️ Following: " + data.following;
            stats.appendChild(following);

            infoDiv.appendChild(stats);
            githubProfile.appendChild(infoDiv);

        } catch (error) {
            githubProfile.textContent = "Failed to load profile. Please try again later.";
        }
    }

    // Call the function
    loadProfile();
}