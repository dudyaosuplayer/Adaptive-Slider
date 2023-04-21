const images = document.querySelectorAll('img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width; 

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = images.length * width + 'px';
    images.forEach(img => {
        img.style.width = width + 'px';
        img.style.height = 'auto';
    })

    rollSlider();
}

init(); 
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
})

document.querySelector('.slider-prev').addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
})

function rollSlider() {
    sliderLine.style.transform = `translate(-${count * width}px)`
}
