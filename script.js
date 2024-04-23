const slides = document.querySelectorAll(".slide");
let counter = 0;
const totalSlides = slides.length;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goback = () => {
    counter--;
    if (counter < 0) {
        counter = totalSlides - 1;
    }
    slideImage();
};

const gonext = () => {
    counter++;
    if (counter >= totalSlides) {
        counter = 0;
    }
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

let slideInterval = setInterval(gonext, 2000); // Automatic sliding every 2 seconds

// Stop automatic sliding on mouse hover
main.addEventListener("mouseover", () => {
    clearInterval(slideInterval);
});

// Resume automatic sliding on mouse leave
main.addEventListener("mouseleave", () => {
    slideInterval = setInterval(gonext, 2000);
});
