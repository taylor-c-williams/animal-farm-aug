const catImage = document.getElementById('cat');
const catSound = document.getElementById('cat-sound');

const dogImage = document.getElementById('dog');
const dogSound = document.getElementById('dog-sound');

const horseImage = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');

const titleArea = document.getElementById('title-area');

function playSoundAndChangeText(sound, animalName){
    sound.play();
    titleArea.textContent = animalName;
    setTimeout(() => {
        titleArea.textContent = 'Which Patrick Stewart is best?';
    }, 2000);
}

catImage.addEventListener('click', ()=> {
    playSoundAndChangeText(catSound, 'Cat-Patrick');
});
dogImage.addEventListener('click', ()=> {
    playSoundAndChangeText(dogSound, 'Dog-Patrick');
});
horseImage.addEventListener('click', ()=> {
    playSoundAndChangeText(horseSound, 'Horse-Patrick');
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
        playSoundAndChangeText(horseSound, 'Horse-Patrick');
    }
    if (event.key === 'd') {
        playSoundAndChangeText(dogSound, 'Dog-Patrick');  
    }
    if (event.key === 'c') {
        playSoundAndChangeText(catSound, 'Cat-Patrick');
    }
});