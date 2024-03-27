// Function to toggle between light mode and dark mode
function toggleDarkMode() {
    // Toggle dark mode class on the body element
    document.body.classList.toggle('dark-mode');

    // Check if dark mode is enabled
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Update the user's preference in localStorage
    localStorage.setItem('darkMode', isDarkMode);
}

// Function to initialize dark mode based on user preference
function initializeDarkMode() {
    // Check if user has a preference saved in localStorage
    const darkModePref = localStorage.getItem('darkMode');

    // If user has a preference saved, apply it
    if (darkModePref === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Call the initializeDarkMode function when the page loads
document.addEventListener('DOMContentLoaded', initializeDarkMode);
