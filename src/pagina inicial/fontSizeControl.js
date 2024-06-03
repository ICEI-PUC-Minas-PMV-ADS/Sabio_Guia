document.addEventListener('DOMContentLoaded', function() {
    const increaseFontBtn = document.getElementById('increaseFont');
    const decreaseFontBtn = document.getElementById('decreaseFont');
    const root = document.documentElement;

    increaseFontBtn.addEventListener('click', function() {
        const currentFontSize = parseFloat(window.getComputedStyle(root).getPropertyValue('font-size'));
        root.style.fontSize = (currentFontSize + 1) + 'px';
    });

    decreaseFontBtn.addEventListener('click', function() {
        const currentFontSize = parseFloat(window.getComputedStyle(root).getPropertyValue('font-size'));
        root.style.fontSize = (currentFontSize - 1) + 'px';
    });
});
