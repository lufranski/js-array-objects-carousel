// Array Objects Carousel

// Dopo aver rimosso dall'html il markup statico creare un array di oggetti che servirà ad inserire il contenuto in html in modo dinamico
const contentArray = [
    
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morales', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.' 
    }, 
    
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.' 
    }, 
    
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos." 
    }, 
    
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city' 
    }, 
    
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
    }

];

// Inserire il contenuto in html
const carousel = document.getElementById('container');

contentArray.forEach((element, index) => {

    // Condizione per cui solo la prima immagine del carousel è visibile all'inizio

    if(index == 0){
        
        carousel.innerHTML += 
        `
            <div class="pic active"><img src=${element.image}><div class="label"><p>${element.title}</p><p>${element.text}</p></div>
        `;
        
    } else {

        carousel.innerHTML += 
        `
            <div class="pic"><img src=${element.image}><div class="label"><p>${element.title}</p><p>${element.text}</p></div>
        `;

    }


}
);

// Al click dell'utente sulle frecce si potrà navigare sul carousel
const botBtn = document.getElementById('bot');
const arrayPics = document.getElementsByClassName('pic');

let activePic = 0;

botBtn.addEventListener('click' , 
    function(){

        // Condizioni
        if (activePic < contentArray.length - 1) {

            // Togliere la classe active all'elemento 0
            arrayPics[activePic].classList.remove('active');
            
            // Incremento
            activePic++;

            // Aggiungo la classe active all'elemento successivo
            arrayPics[activePic].classList.add('active');

        }

    }
);

const topBtn = document.getElementById('top');

topBtn.addEventListener('click' , 
    function(){

        // Condizioni
        if (activePic > 0) {

            // Togliere la classe active all'elemento 0
            arrayPics[activePic].classList.remove('active');
            
            // Incremento
            activePic--;

            // Aggiungo la classe active all'elemento successivo
            arrayPics[activePic].classList.add('active');

        }

    }
);


// Ciclo infinito del carousel