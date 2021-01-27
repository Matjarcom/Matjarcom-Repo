
"use strict"; 


//take the link id 
var pantclick=document.getElementById('pantClick');
var shirtclick=document.getElementById('shirtClick');
var bookclick=document.getElementById('bookClick');
var toyclick=document.getElementById('toyClick');


//Array for every product renderd by the constructor
var listedProduct = [];



pantclick.addEventListener('click',paintRend);
function paintRend(){creatPants();}
shirtclick.addEventListener('click',shirtRend);
function shirtRend(){creatShirt();}
bookclick.addEventListener('click',bookRend);
function bookRend(){createBook();}
toyclick.addEventListener('click',toyRend);
function toyRend(){createToys();}

var sRG=JSON.parse(localStorage.getItem('SRG'));
var emt=localStorage.getItem('emtt');
var savedata=JSON.parse(localStorage.getItem('render'));
if(savedata){
    renderItems(savedata);
}

else if(sRG){
renderItems(sRG);
localStorage.removeItem('SRG');
}
else if(emt){
    var bodymain=document.getElementById('main');
    var h1=document.createElement('h1');
    h1.textContent=emt;
    if(window.location.pathname==='/Products.html'){   bodymain.appendChild(h1); localStorage.removeItem('emtt')}
  



}
else {
    if(window.location.pathname==='/Products.html'){
        creatPants();
        creatShirt();
        createToys(); 
        createBook(); 
    }
    
    //localStorage.clear();
   
}








//create constructor 
function products(name,img,type,price,custumColor,voice,information){
    //Properties for each items
    this.cName=name;
    this.cimage=img;
    this.cType=type;
    this.cPrice=price;
    this.cColor=custumColor;
    this.cVoice=voice;
    this.cIformation=information;
    // console.log(products.prototype.listedProduct);
    if(this.cType==='pants'){products.prototype.pantsArray.push(this);}
    if(this.cType==='shirts'){products.prototype.shirtArray.push(this);}
    if(this.cType==='toys'){products.prototype.toysArray.push(this);}
    if(this.cType==='book'){products.prototype.bookArray.push(this);}
    if(this.cType==='custum'){products.prototype.custumArray.push(this);}
    listedProduct.push(this);
    
}
// products.prototype.listedProduct=[];
//to create pants items
function  creatPants(){

products.prototype.pantsArray=[];
    new products('jeans','img/pants/pants1.png','pants',19.99,false,false,'best baby pants');
    new products('Gray jeans','img/pants/pants2.png','pants',15,false,false,'beatiful pants jeans');
    new products('pob pants','img/pants/pants3.png','pants',15.99,false,false,'best baby pants pob');
    new products('red pants','img/pants/pants4.png','pants',9.99,false,false,'best baby red pants');
    new products('normal pants','img/pants/pants5.png','pants',10,false,false,'small light gray pants');
    new products('Gray pants','img/pants/pants6.png','pants',12.99,false,false,'small dark gray pants');
    new products('imoji pants','img/pants/pants7.png','pants',14.99,false,false,' pant with prented imoji ');
    new products('Shark Pants','img/pants/pants8.png','pants',16,false,false,'pant with shark like style');
    new products('Yellow pants','img/pants/pants9.png','pants',17,false,false,'yelllo pants with gray lines');
    if(window.location.pathname==='/Products.html'){ renderItems(products.prototype.pantsArray);}
   
    localStorage.setItem('render',JSON.stringify(products.prototype.pantsArray));
}
//to create shirt items
function  creatShirt(){
    products.prototype.shirtArray=[];
    new products('africa','img/shirts/shirt1.png','shirts',5,false,false,'shirt with Africa map as a logo');
    new products('big brother','img/shirts/shirt2.png','shirts',15,false,false,'shirt that you can give as a gift for your big brother');
    new products('body bulding','img/shirts/shirt3.png','shirts',15.99,false,false,'shirt with body building logo');
    new products('orange bodysuit','img/shirts/shirt4.png','shirts',9.99,false,false,'Bodysuit used for child from 0-2 months');
    new products('Unicorn boudysuit','img/shirts/shirt5.png','shirts',10,false,false,'Bodysuit with unicorn logo');
    new products('Green bodysuit','img/shirts/shirt6.png','shirts',12.99,false,false,'Bodysuit with positive words for your baby');
    new products('Baby bodysuit','img/shirts/shirt7.png','shirts',14.99,false,false,'small gray bodysuit');
    new products('Daddy shirt','img/shirts/shirt8.png','shirts',16,false,false,'White shirt with black prented text');
    new products('Yellow shirt','img/shirts/shirt9.png','shirts',17,false,false,'Yellow shirt with cartoon character image on it');
    if(window.location.pathname==='/Products.html'){renderItems(products.prototype.shirtArray);}
    
    localStorage.setItem('render',JSON.stringify(products.prototype.shirtArray));
}
//to create toys items
function  createToys(){
    products.prototype.toysArray=[];

    new products('Singer of letters','img/toys/toy1.png','toys',19.99,false,false,'small animal toy that sing the letters songs');
    new products('bear','img/toys/toy2.png','toys',15,false,false,'Brown wool Bear');
    new products('blue car','img/toys/toy3.png','toys',15.99,false,false,'small blue car with remote control');
    new products('wool crocodile','img/toys/toy4.png','toys',9.99,false,false,'green wool and big crocodile');
    new products('Singer beetle','img/toys/toy5.png','toys',10,false,false,'wood beetle with voice');
    new products('mickey mouse','img/toys/toy6.png','toys',12.99,false,false,'mickey mouse');
    new products('The piano game','img/pianog.png','toys',14.99,false,false,'piano for children');
    new products('red car','img/boytoy4.png','toys',16,false,false,'Baaby red car');
    new products('Bulldozer','img/toys/toy9.png','toys',17,false,false,'sand bulldozer for kids');

    if(window.location.pathname==='/Products.html'){  renderItems(products.prototype.toysArray);}

    localStorage.setItem('render',JSON.stringify(products.prototype.toysArray));
}
//to create book items
function  createBook(){
    products.prototype.bookArray=[];



    new products('Ginger the Girrafe','bookimg/ginger.jpg','book',5.99,false,false,' Ginger the giraffe uses her long neck to save the other animals from the blazing forest fire.');
    new products('I found a Frog','bookimg/frog.jpg','book',6,false,false,'Something magical was happening in the fish bowl  and he wasn’t  quite ready for what lay in store.');
    new products('Hide and seek','bookimg/hide.jpg','book',8.99,false,false,' Adventure of Sally and friends in this book. The fun never ends when Sally’s around!');
    new products('Doing my chores','img/doing.jpg','book',9.99,false,false,'Little girl makes chores fun and easy to do.A fantastic addition to your little one’s free bed time story collection.');
    new products('Abe the service dog','bookimg/abe.jpg','book',10,false,false,'Abe was a real Service Dog who dedicated his life assisting BJ,service Dogs are smart, well trained, well behaved, dedicated, and committed to ensuring their master is safe.');
    new products('Tooth fairy','bookimg/tooth.jpg','book',10.99,false,false,'A wonderful story that weaves its magic in the child’s imagination, in oral health and hygiene.');
    new products('Captin FAantastic','bookimg/captin.png','book',10.99,false,false,'Read on to find out why Winston deserves a big cuddle and a juicy big bone. A big ‘Woof!’ to this wonderful free children’s story book.');
    new products('The case of the missing smile','bookimg/missing.jpg','book',7,false,false,' Read this imaginative story of a little girl and how she learnt to smile again in this great free children’s fairy story.');
    new products('hammy the hamster','bookimg/hammy.jpg','book',8,false,false,'Join Hammy in his South American home as you read this free story book for kids on your next read aloud day');

   
    if(window.location.pathname==='/Products.html'){  renderItems(products.prototype.bookArray);}

    localStorage.setItem('render',JSON.stringify(products.prototype.bookArray));
}
// to create custum shirt and cup items

// function  createCustum(){
//     products.prototype.custumArray=[];
//     new products('jeans','img/pants/pants1.png','custum',19.99,false,false,'best baby pants');
//     new products('Gray jeans','img/pants/pants2.png','custum',15,false,false,'beatiful pants jeans');
//     renderItems(products.prototype.custumArray);
//     localStorage.setItem('render',JSON.stringify(products.prototype.custumArray));
    
// }

// console.log('listedProduct');




////////////////////
//render the items
function renderItems(rendArrray,event){

   
 
    var bodymain=document.getElementById('main');
    var cunterJ=0;
       var j =0;
       
    //    listedProduct.push(rendArrray);
       //nested loop for show three items every row
    for(var i =0;i<Math.ceil(rendArrray.length/3) ;i++){
            var rowDiv = document.createElement('div');
            rowDiv.className='maindiv';
            cunterJ+=3;

            for( j ;j<cunterJ;j++){
                    var cardDiv=document.createElement('div');
                cardDiv.className='card';
                rowDiv.appendChild(cardDiv);
                var imgbox=document.createElement('div');
                imgbox.className='imgbox'
                cardDiv.appendChild(imgbox);
                var contentbox=document.createElement('div')
                contentbox.className='contentbox';
                cardDiv.appendChild(contentbox);

                var imG=document.createElement('img');
                imG.src=rendArrray[j].cimage;
                imgbox.appendChild(imG);
                var H3=document.createElement('h3');
                var H2=document.createElement('h2');
                var blink=document.createElement('a');
                blink.className='buy';
                blink.textContent='Buy Now';
                blink.href='singlrProduct.html';
                H3.textContent=rendArrray[j].cName;
                H2.className='price';
                H2.textContent='$'+rendArrray[j].cPrice;
                contentbox.appendChild(H3);
                contentbox.appendChild(H2);
                contentbox.appendChild(blink);
               //if(window.)
                bodymain.appendChild(rowDiv);
                
            }
            

     
       //................ Add Event Listener to take the product from Buy Now Button
       var buyNowButtonProduct = document.getElementsByClassName("buy");

       for (let x = 0; x < buyNowButtonProduct.length; x++) {
           console.log('this is buyNowButtonProduct.length ',buyNowButtonProduct);
           console.log('this is listedProduct.length ',listedProduct.length);
         buyNowButtonProduct[x].addEventListener("click", updatingCart);
        
         function updatingCart(event) {
            localStorage.removeItem('SRG');
            localStorage.removeItem('render');
            
             if (listedProduct.length === buyNowButtonProduct.length ) {
               // set the Product inside a local storage
               localStorage.setItem(
                 "singleProductObj",
                 JSON.stringify(listedProduct[x])
               ); 
               console.log('in if'); 
             }else{
               localStorage.setItem(
                   "singleProductObj",
                   JSON.stringify(rendArrray[x])
                 ); 
       
             }
           
         }
       }

    }

}



 