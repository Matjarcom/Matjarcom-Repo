'use strict'
// create variables
var girltoys = document.getElementById('girltoys');
var boystoys = document.getElementById('boystoys');
var learningtoy = document.getElementById('learningtoys');
var crystalball = document.getElementById('crystalballs');
var voicetoys = document.getElementById('voicetoys');
var userClickCounter = 0;
var girltoysIndex;
var boystoysIndex;
var learningtoyIndex;
var crystalballIndex;
var voiceToysIndex;
var previousgirltoysIndex = -1;
var previousboystoysIndex = -1;
var previouslearningtoyIndex = -1;
var previousCrystalballIndex = -1;
var previousVoiceToysIndex = -1;
var showgirlsproductsButton = document.getElementById('gsort');
var showboysproductsButton = document.getElementById('bsort');
var showlearningtoysButton = document.getElementById('lsort');
var showcrystalballsButton = document.getElementById('cbsort');
var showvoicetoysButton = document.getElementById('vsort');
var divimages = document.getElementById('imagediv');


// create constructors

function Products(name, source, price) {
    this.name = name;
    this.source = source;
    this.price = price;
    // Products.prototype.allGirlProducts.push(this);
    // Products.prototype.allBoyesProducts.push(this);
    // Products.prototype.learningToyes.push(this);
    // Products.prototype.crystalBalles.push(this);
    // Products.prototype.voiceToyes.push(this);
   
}
Products.prototype.allGirlProducts = [];
var girltoy1 = new Products('Pink-Horse', 'img/girltoy1.png','25jd');
var girltoy2 = new Products('pink-doll', 'img/girltoy2.png','10 JD');
var girltoy3 = new Products('kitchen-collection','img/girltoy3.png','15JD');
var girltoy4 = new Products('small-kitchen-collection','img/girltoy4.png','5JD');
var girltoy5 = new Products('huge-kitchen-collection','img/girltoy5.png','25JD');
Products.prototype.allGirlProducts.push(girltoy1);
console.log(Products.prototype.allGirlProducts);
// Products.prototype.allBoyesProducts = [];
// var boytoy1 = new Products('green-car', 'img/greencar.png', '5 JD');
// var boytoy2 = new Products('yellow-car', 'img/yellowcar.png','5 JD');
// var boytoy3 = new Products('small-motorbike','img/boytoy3.png','20 JD');
// var boytoy4 = new Products('small-motobike-with-hand','img/boytoy4.png','30 JD');
// var boytoy5 = new Products('trans-yoyo','img/boytoy5.png','3 JD');

// Products.prototype.learningToyes = [];
// var learntoy1 = new Products('Correct-Path', 'img/learning-toy1.png','10 JD');
// var learntoy2 = new Products('Alphapitical-Elephant', 'img/learning-toy2.png', '10JD');
// var learntoy3 = new Products('Alphapitical-lion','img/learningtoy3.png','10 JD');
// var learntoy4 = new Products('wood-intellegence','img/learningtoy4.png','15 JD');
// var learntoy5 = new Products('numbers-game','img/learningtoy5','15 JD');


// Products.prototype.crystalBalles = [];
// var crystalball1 = new Products('tree-crystal-balls', 'img/crystal-ball1.png','10 JD');
// var crystalball2 = new Products('gift-crystal-ball', 'img/crystal-ball2.png','10 JD');
// var crystalball3 = new Products('snow-tree-ball','img/crystalball3.png', '10 JD');
// var crystalball4 = new Products('snow-ball','img/crystalball4.png','10 JD');



// Products.prototype.voiceToyes = [];

// var voicetoy1 = new Products('drum', 'img/voice-toy1.png','10 JD');
// var voicetoy2 = new Products('guitar', 'img/voice-toy2.png','15 JD');
// var voicetoy3 = new Products('telephon', 'img/voicetoy3.png','10 JD');
// var voicetoy4 = new Products('chrocodile','img/voicetoy4.png','10 JD');
// var voicetoy5 = new Products('children-piano','img/voicetoy5.png','10 JD');



showgirlsproductsButton.addEventListener('click', showgirlsproducts);
showboysproductsButton.addEventListener('click', showBoysProducts);
showlearningtoysButton.addEventListener('click', showlearningtoys);
showcrystalballsButton.addEventListener('click', showcrystalballs);
showvoicetoysButton.addEventListener('click', showvoicetoys);
divimages.addEventListener('click', handelUserClick);
// preventimage- repetition 
var forbiddenImagesIndex = [];
function renderRandomImages() {
    forbiddenImagesIndex = [previousgirltoysIndex, previousboystoysIndex, previouslearningtoyIndex, previousCrystalballIndex, previousVoiceToysIndex];

    do {
        girltoysIndex = randomGrirlIndex();
    }

    while (forbiddenImagesIndex.includes(girltoysIndex));
    previousgirltoysIndex = girltoysIndex;
    forbiddenImagesIndex.push(girltoysIndex);

    do {
        boystoysIndex = randomBoysIndex();

    }
    while (forbiddenImagesIndex.includes(boystoysIndex));
    previousboystoysInd = boystoysIndex;
    forbiddenImagesIndex.push(boystoysIndex);


    do {
        learningtoyIndex = randomLearningToysIndex();

    } while (forbiddenImagesIndex.includes(learningtoyIndex));
    previouslearningtoyIndex = learningtoyIndex;
    forbiddenImagesIndex.push(learningtoyIndex);

    do {
        crystalballIndex = randomCrystalBallIndex();
    } while (forbiddenImagesIndex.includes(crystalballIndex));
    previousCrystalballIndex = crystalballIndex;
    forbiddenImagesIndex.push(crystalballIndex);

    do {
        voiceToysIndex = randomVoiceToysIndex();
    } while (forbiddenImagesIndex.includes(voiceToysIndex));
    previousVoiceToysIndex = voiceToysIndex;
    forbiddenImagesIndex.push(voiceToysIndex);

    girltoys.src = Products.prototype.allGirlProducts[girltoysIndex].source;
    Products.prototype.allGirlProducts[girltoysIndex].name;
    Products.prototype.allGirlProducts[girltoysIndex].price;
    boystoys.src = Products.prototype.allBoyesProducts[boystoysIndex].source;
    Products.prototype.allBoyesProducts[boystoysIndex].name;
    Products.prototype.allBoyesProducts[boystoysIndex].price;
    learningtoy.src = Products.prototype.learningToyes[learningtoyIndex].source;
    Products.prototype.learningToyes[learningtoyIndex].name;
    Products.prototype.learningToyes[learningtoyIndex].price;


}
// generate random images 
renderRandomImages();

function randomGrirlIndex() {
    return Math.floor(Math.random() * (Products.prototype.allGirlProducts.length));

}
function randomBoysIndex() {
    return Math.floor(Math.random() * (Products.prototype.allBoyesProducts.length));

}
function randomLearningToysIndex() {
    return Math.floor(Math.random() * (Products.prototype.learningToyes.length));

}
function randomCrystalBallIndex() {
    return Math.floor(Math.random() * (Products.prototype.crystalBalles.length));

}
function randomVoiceToysIndex() {
    return Math.floor(Math.random() * (Products.prototype.voiceToyes.length));

}

divimages.addEventListener('click', handelUserClick);

function handelUserClick(event) {
    if (event.target.id === 'girltoys') {
        randomGrirlIndex();
    }
    else if (event.target.id === 'boystoys') {
        randomBoysIndex();

    }
    else if (event.target.id === 'learningtoy') {
        randomLearningToysIndex();

    }
    else if (event.target.id === 'crystalballs') {
        randomCrystalBallIndex();
    }
    else {
        randomVoiceToysIndex();
    }

}

//  calls functions 
showgirlsproducts();
showBoysProducts();
showlearningtoys();
showcrystalballs();
showvoicetoys();

//  create function to show the girls products 
function showgirlsproducts(event) {

    event.preventDefault();
    var girlProductResult;
    for (var i = 0; i < Products.prototype.allGirlProducts.length; i++) {
        girlProductResult = document.createElement('li');
        girlProductResult.textContent = Products.prototype.allGirlProducts[i].source + Products.prototype.allGirlProducts[i].name + Products.prototype.allGirlProducts[i].price
        showgirlsproductsButton.appendChild(girlProductResult);

    }
}
// create function to show the boys products 
    function showBoysProducts(event) {

        event.preventDefault();
        var boysProductResult;
        for (var i = 0; i < Products.prototype.allBoyesProducts.length; i++) {
            boysProductResult = document.createElement('li');
            boysProductResult.textContent = Products.prototype.allBoyesProducts[i].source + Products.prototype.allBoyesProducts[i].name + Products.prototype.allBoyesProducts[i].price
            showboysproductsButton.appendChild(boysProductResult);
        }
    }
// create function to show the learning toyes 
    function showlearningtoys() {
        event.preventDefault();
        var learningToysResult;
        for (var i = 0; i < Products.prototype.learningToyes.length; i++) {
            learningToysResult = document.createElement('li');
            learningToysResult.textContent = Products.prototype.learningToyes[i].source + Products.prototype.learningToyes[i].name + Products.prototype.learningToyes[i].price
            showlearningtoysButton.appendChild(learningToysResult);

        }}

//  create function to show the crystal balls
        function showcrystalballs() {
            event.preventDefault();
            var crystalBalllsResult;
            for (var i = 0; i < Products.prototype.crystalBalles.length; i++) {
                crystalBalllsResult = document.createElement('li');
                crystalBalllsResult.textContent = Products.prototype.learningToyes[i].source + Products.prototype.learningToyes[i].name + Products.prototype.learningToyes[i].price
                showcrystalballsButton.appendChild(crystalBalllsResult);
            }
        }
//  create function to show the voice toys
            function showvoicetoys() {
                event.preventDefault();

                var voiceToysResults;
                for (var i = 0; i < Products.prototype.voiceToyes.length; i++) {
                    voiceToysResults = document.createElement('li');
                    voiceToysResults.textContent = Products.prototype.voiceToyes[i].source + Products.prototype.voiceToyes[i].name + Products.prototype.voiceToyes[i].price
                    showvoicetoysButton.appendChild(voiceToysResults);
                }
            }