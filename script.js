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
    "https://exemplo.com/foto1.jpg",
    "https://exemplo.com/foto2.jpg",
    "https://exemplo.com/foto3.jpg",
    "https://exemplo.com/foto4.jpg",
    "https://exemplo.com/foto5.jpg",
    "https://exemplo.com/foto6.jpg",
    "https://exemplo.com/foto7.jpg",
    "https://exemplo.com/foto8.jpg",
    "https://exemplo.com/foto9.jpg",
    "https://exemplo.com/foto10.jpg"
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