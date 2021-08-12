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
    titleArea.textContent = 'dog';
});

horseImage.addEventListener('click',  () => {
    horseSound.play();
    titleArea.textContent = 'horse';
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'h') {
      horseSound.play();
      titleArea.textContent = 'horse';
    }
    if (event.key === 'd') {
      dogSound.play();
      titleArea.textContent = 'dog';
    }
    if (event.key === 'c') {
        catSound.play();
        titleArea.textContent = 'cat';
    }
  });