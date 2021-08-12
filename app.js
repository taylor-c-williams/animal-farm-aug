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
        titleArea.textContent = '';
    }, 2000);
}

catImage.addEventListener('click', ()=> {
    playSoundAndChangeText(catSound, 'cat');
});
dogImage.addEventListener('click', ()=> {
    playSoundAndChangeText(dogSound, 'dog');
});
horseImage.addEventListener('click', ()=> {
    playSoundAndChangeText(horseSound, 'horse');
});

// catImage.addEventListener('click', () => {
//     catSound.play();
//     titleArea.textContent = 'cat';
// });

// dogImage.addEventListener('click', () => {
//     dogSound.play();
//     titleArea.textContent = 'dog';
// });

// horseImage.addEventListener('click', () => {
//     horseSound.play();
//     titleArea.textContent = 'horse';
// });

document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
        playSoundAndChangeText(horseSound, 'horse');
    }
    if (event.key === 'd') {
        playSoundAndChangeText(dogSound, 'dog');  
    }
    if (event.key === 'c') {
        playSoundAndChangeText(catSound, 'cat');
    }
});