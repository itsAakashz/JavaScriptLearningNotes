document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    let theme = localStorage.getItem('theme');
    if (theme === 'dark' || (theme === null && prefersDarkScheme)) {
        document.body.classList.add('dark-mode');
        themeIcon.src = "dark-mode-icon.png";
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.src = "light-mode-icon.png";
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.src = "dark-mode-icon.png";
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = "light-mode-icon.png";
            localStorage.setItem('theme', 'light');
        }
    });

    // Collapsible Sections
    var collapsibles = document.getElementsByClassName("collapsible");
    for (var i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});
