let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    slides.forEach(slide => slide.style.transform = `translateX(-${slideIndex * 100}%)`);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

showSlide(slideIndex);

