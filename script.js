const messages = [
    "Você é a razão do meu sorriso! ❤️",
    "Cada momento com você é especial",
    "Você ilumina meus dias",
    "Meu amor por você cresce a cada dia",
    "Você é meu presente da vida",
    "Juntos somos mais fortes",
    "Você me faz querer ser melhor",
    "Nosso amor é único",
    "Você é minha inspiração diária",
    "Te amo mais que tudo!"
];

// Substitua estes URLs pelas URLs das suas fotos
const photos = [
    "https://photos.app.goo.gl/TXkSkiyJ7dxwvui96",
    "https://photos.app.goo.gl/RJtNM3nP31GugAfM8",
    "https://photos.app.goo.gl/mqTarSiTMC1DKcUx5",
    "https://photos.app.goo.gl/5kNdAdqUiqU7521c6",
    "https://photos.app.goo.gl/FKCar78iwiSD2P2v5",
    "https://photos.app.goo.gl/7crbF3tSgiCGqNJEA",
    "https://photos.app.goo.gl/ArqEpZQi4EY7inVY9",
    "https://photos.app.goo.gl/yUY52d6CwCYaKXZp6",
    "https://photos.app.goo.gl/p8MuekqLHk9i7Ai16",
    "https://photos.app.goo.gl/JTMj7pb1VBXUWbXZA",
    "https://photos.app.goo.gl/wuy4tULCq8J1yxqV7",
    "https://photos.app.goo.gl/JZQTFuiMeQBjP6th8",
    "https://photos.app.goo.gl/S9gGEYU2KPYdkMgB9",
    "https://photos.app.goo.gl/X7evo2QJcTCSSW5a9",
    "https://photos.app.goo.gl/u6h1EdVbzQXUmr2o7",
    "https://photos.app.goo.gl/BLDBpU7g1psgJjLKA",
    "https://photos.app.goo.gl/kqiycF8zeaCgxsaDA",
    "https://photos.app.goo.gl/ntAG7UmJxhzUZcdk6",
    "https://photos.app.goo.gl/WKKz6A9ouC1pbNbY8",
    "https://photos.app.goo.gl/4cJEDRNZ3vySx9Ds5",
    "https://photos.app.goo.gl/8YVFN1MtFLyKngj98",
    "https://photos.app.goo.gl/Erj7VJLm5mtJbYZ57",
    "https://photos.app.goo.gl/K8L5APDSfU41cnjb6",
    "https://photos.app.goo.gl/UrP56UNJhwL1EVFZ6",
    "https://photos.app.goo.gl/XJbiaFgsCTpmiUZg9",
    "https://photos.app.goo.gl/2bAjHZahtisr9unt6",
    "https://photos.app.goo.gl/KtPV9X8oiuQT4ecYA",
    "https://photos.app.goo.gl/AymtANXuB521NGN79",
    "https://photos.app.goo.gl/MYcWMQPgEh58YcK6A",
    "https://photos.app.goo.gl/rPqmNzkrRaGxPzjp7",
    "https://photos.app.goo.gl/67b5xiywubT8ku327",
    "https://photos.app.goo.gl/eLVWyU9gmGZNyVQ78",
    "https://photos.app.goo.gl/T35io3FiLUDXZYoV8",
    "https://photos.app.goo.gl/Bn7bfR5Fy9zB1WSf7",
    "https://photos.app.goo.gl/CxMBEPwTTrukojaCA",
    "https://photos.app.goo.gl/gCu3jCxsKxiZ8skB6",
    "https://photos.app.goo.gl/YMbLNS4WbZnNvB3i9",
    "https://photos.app.goo.gl/zqizzA954HVr4n846",
    "https://photos.app.goo.gl/jLcqNLbCWFeJksAE9",
    "https://photos.app.goo.gl/Uao2aczfHVqMaxCJ8"
];

let currentLevel = 0;
let progress = 0;

function updateContent() {
    const currentImage = document.getElementById('currentImage');
    const message = document.getElementById('message');
    const progressBar = document.getElementById('loveProgress');
    const progressText = document.getElementById('progressText');
    
    currentImage.src = photos[currentLevel];
    message.textContent = messages[currentLevel];
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
    
    if (progress === 100) {
        showGallery();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    document.getElementById('hearts-container').appendChild(heart);
    
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

function createSad() {
    const sad = document.createElement('div');
    sad.className = 'sad';
    sad.innerHTML = '😢';
    sad.style.left = Math.random() * 100 + 'vw';
    document.getElementById('sad-container').appendChild(sad);
    
    sad.addEventListener('animationend', () => {
        sad.remove();
    });
}

function showGallery() {
    document.getElementById('content').style.display = 'none';
    const gallery = document.getElementById('gallery');
    gallery.classList.remove('hidden');
    
    const photoGallery = document.getElementById('photoGallery');
    photoGallery.innerHTML = '';
    
    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo;
        img.className = 'gallery-image';
        img.addEventListener('click', () => showModal(photo));
        photoGallery.appendChild(img);
    });
}

function showModal(photoUrl) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    const img = document.createElement('img');
    img.src = photoUrl;
    modal.appendChild(img);
    
    modal.addEventListener('click', () => {
        modal.remove();
    });
    
    document.body.appendChild(modal);
}

document.getElementById('wholeHeart').addEventListener('click', () => {
    if (progress < 100) {
        progress += 10;
        currentLevel = Math.min(Math.floor(progress / 10), messages.length - 1);
        updateContent();
        
        for (let i = 0; i < Math.ceil(progress / 10); i++) {
            setTimeout(() => createHeart(), i * 100);
        }
    }
});

document.getElementById('brokenHeart').addEventListener('click', () => {
    if (currentLevel > 0) {
        currentLevel--;
        progress -= 10;
        updateContent();
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createSad(), i * 100);
        }
    }
});

// Inicializar o conteúdo
updateContent();