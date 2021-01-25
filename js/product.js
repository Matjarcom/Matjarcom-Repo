
"use strict"; 

//take the link id 
var pantclick=document.getElementById('pantClick');
var shirtclick=document.getElementById('shirtClick');
var bookclick=document.getElementById('bookClick');
var toyclick=document.getElementById('toyClick');
var customclick=document.getElementById('customClick');



pantclick.addEventListener('click',paintRend);
function paintRend(){creatPants();}
shirtclick.addEventListener('click',shirtRend);
function shirtRend(){creatShirt();}
bookclick.addEventListener('click',bookRend);
function bookRend(){createBook();}
toyclick.addEventListener('click',toyRend);
function toyRend(){createToys();}
var savedata=JSON.parse(localStorage.getItem('render'));
if(savedata){
    renderItems(savedata);
    localStorage.clear();
}
else{
    
    creatPants();
    creatShirt();
    createBook();
    createToys();   
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
    if(this.cType==='pants'){products.prototype.pantsArray.push(this);}
    if(this.cType==='shirts'){products.prototype.shirtArray.push(this);}
    if(this.cType==='toys'){products.prototype.toysArray.push(this);}
    if(this.cType==='book'){products.prototype.bookArray.push(this);}
    if(this.cType==='custum'){products.prototype.custumArray.push(this);}

}

//to create pants items
function  creatPants(){

products.prototype.pantsArray=[];
    new products('jeans','img/pants/pants1.png','pants',19.99,false,false,'best baby pants');
    new products('Gray jeans','img/pants/pants2.png','pants',15,false,false,'beatiful pants jeans');
    new products('pob pants','img/pants/pants3.png','pants',15.99,false,false,'best baby pants pob');
    new products('red pants','img/pants/pants4.png','pants',9.99,false,false,'best baby red pants');
    new products('normal pants','img/pants/pants5.png','pants',10,false,false,'best baby red pants');
    new products('Gray pants','img/pants/pants6.png','pants',12.99,false,false,'best baby red pants');
    new products('imoji pants','img/pants/pants7.png','pants',14.99,false,false,'best baby red pants');
    new products('Shark Pants','img/pants/pants8.png','pants',16,false,false,'best baby red pants');
    new products('Yellow pants','img/pants/pants9.png','pants',17,false,false,'best baby red pants');
    renderItems(products.prototype.pantsArray);
    localStorage.setItem('render',JSON.stringify(products.prototype.pantsArray));
}
//to create shirt items
function  creatShirt(){
    products.prototype.shirtArray=[];
    new products('africa','img/shirts/shirt1.png','shirts',5,false,false,'africa');
    new products('big brother','img/shirts/shirt2.png','shirts',15,false,false,'big brother is dog');
    new products('body bulding','img/shirts/shirt3.png','shirts',15.99,false,false,'best baby pants pob');
    new products('orange','img/shirts/shirt4.png','shirts',9.99,false,false,'best baby red pants');
    new products('Unicorn ','img/shirts/shirt5.png','shirts',10,false,false,'best baby red pants');
    new products('Green','img/shirts/shirt6.png','shirts',12.99,false,false,'best baby red pants');
    new products('Feliz','img/shirts/shirt7.png','shirts',14.99,false,false,'best baby red pants');
    new products('Daddy','img/shirts/shirt8.png','shirts',16,false,false,'best baby red pants');
    new products('Yellow','img/shirts/shirt9.png','shirts',17,false,false,'best baby red pants');
    renderItems(products.prototype.shirtArray);
    localStorage.setItem('render',JSON.stringify(products.prototype.shirtArray));
}
//to create toys items
function  createToys(){
    products.prototype.toysArray=[];
    new products('jeans','img/toys/toy1.png','toys',19.99,false,false,'best baby pants');
    new products('Gray jeans','img/toys/toy2.png','toys',15,false,false,'beatiful pants jeans');
    new products('pob pants','img/toys/toy3.png','toys',15.99,false,false,'best baby pants pob');
    new products('red pants','img/toys/toy4.png','toys',9.99,false,false,'best baby red pants');
    new products('normal pants','img/toys/toy5.png','toys',10,false,false,'best baby red pants');
    new products('Gray pants','img/toys/toy6.png','toys',12.99,false,false,'best baby red pants');
    new products('imoji pants','img/toys/toy7.png','toys',14.99,false,false,'best baby red pants');
    new products('Shark Pants','img/toys/toy8.png','toys',16,false,false,'best baby red pants');
    new products('Yellow pants','img/toys/toy9.png','toys',17,false,false,'best baby red pants');
    renderItems(products.prototype.toysArray);
    localStorage.setItem('render',JSON.stringify(products.prototype.toysArray));
  
}
//to create book items
function  createBook(){
    products.prototype.bookArray=[];

    new products('The children','img/books/book1.jpg','book',19.99,false,false,'best baby pants');
    new products('ice age','img/books/book2.png','book',15,false,false,'beatiful pants jeans');
    new products('moshi','img/books/book3.jpg','book',15.99,false,false,'best baby pants pob');
    new products('High five','img/books/book4.jpg','book',9.99,false,false,'best baby red pants');
    new products('Kiddies','img/books/book5.jpg','book',10,false,false,'best baby red pants');
    new products('BOX','img/books/book6.jpg','book',12.99,false,false,'best baby red pants');
    new products('Time to shine','img/books/book7.jpg','book',14.99,false,false,'best baby red pants');
    new products('Disney','img/books/book8.jpg','book',16,false,false,'best baby red pants');
    new products('Jump on in ','img/books/book9.png','book',17,false,false,'best baby red pants');
    renderItems(products.prototype.bookArray);
    localStorage.setItem('render',JSON.stringify(products.prototype.bookArray));
}
//to create custum shirt and cup items
function  createCustum(){
    products.prototype.custumArray=[];
    new products('jeans','img/pants/pants1.png','custum',19.99,false,false,'best baby pants');
    new products('Gray jeans','img/pants/pants2.png','custum',15,false,false,'beatiful pants jeans');
    renderItems(products.prototype.custumArray);
    localStorage.setItem('render',JSON.stringify(products.prototype.custumArray));
    
}



//render the items
function renderItems(rendArrray,event){

   //
 
    var bodymain=document.getElementById('main');
    var cunterJ=0;
       var j =0;
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
                blink.href='#';
                H3.textContent=rendArrray[j].cName;
                H2.className='price';
                H2.textContent='$'+rendArrray[j].cPrice;
                contentbox.appendChild(H3);
                contentbox.appendChild(H2);
                contentbox.appendChild(blink);
                bodymain.appendChild(rowDiv);
            }


    }


}
