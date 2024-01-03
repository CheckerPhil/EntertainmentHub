// JavaScript-Funktion zum Umschalten des Dark-Modus
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// JavaScript-Funktion zum Umschalten des Dark-Modus mit dem Slider
function toggleDarkModeWithSlider() {
    const checkbox = document.getElementById("dark-mode-checkbox");
    checkbox.checked = !checkbox.checked;
    toggleDarkMode();
    updateSliderColor();
}

// JavaScript-Funktion zur Aktualisierung der Slider-Farbe basierend auf dem Dark-Modus-Zustand
function updateSliderColor() {
    const slider = document.querySelector('.slider');
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        document.querySelector('.switch-label').style.color = '#fff'
        slider.style.backgroundColor = '#333';
    } else {
        slider.style.backgroundColor = '#ccc';
        document.querySelector('.switch-label').style.color = '#333'
    }
}
