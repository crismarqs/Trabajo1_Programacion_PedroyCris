document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const frame = document.querySelector('.carousel-frame');

    let currentIndex = 0;
    const totalImages = 7;
    const imageWidth = 500;

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    function updateCarousel() {
        const translateValue = -currentIndex * imageWidth;
        frame.style.transform = `translateX(${translateValue}px)`;
    }
});
