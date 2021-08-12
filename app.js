const catImage = document.getElementById('cat');
const catSound = document.getElementById('cat-sound');

const dogImage = document.getElementById('dog');
const dogSound = document.getElementById('dog-sound');

const horseImage = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');

const titleArea = document.getElementById('title-area');

catImage.addEventListener('click', () => {
    catSound.play();
    titleArea.textContent = 'cat';
});

dogImage.addEventListener('click', () => {
    dogSound.play();
});

horseImage.addEventListener('click', () => {
    horseSound.play();
});
