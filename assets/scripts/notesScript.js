function copyCode(button) {
        const code = button.previousElementSibling.innerText;
        navigator.clipboard.writeText(code).then(() => {
            alert('Code copied to clipboard!');
        });
    }

    function toggleTheme() {
        const body = document.body;
        const themeToggleBtn = document.getElementById('theme-toggle');
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme'); // Toggle between light and dark
        if (body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = 'Light Theme';
        } else {
            themeToggleBtn.textContent = 'Dark Theme';
        }
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    }

    // Check the saved theme in localStorage
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            document.getElementById('theme-toggle').textContent = 'Light Theme';
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            document.getElementById('theme-toggle').textContent = 'Dark Theme';
        }
    });
