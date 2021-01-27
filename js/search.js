
"use strict"; 

function Products2(name,img,type,price,custumColor,voice,information){
   
    this.cName=name;
    this.cimage=img;
    this.cType=type;
    this.cPrice=price;
    this.cColor=custumColor;
    this.cVoice=voice;
    this.cIformation=information;
    if(this.cType==='pants'){Products2.prototype.pantsArray.push(this);}
    if(this.cType==='shirts'){Products2.prototype.shirtArray.push(this);}
    if(this.cType==='toys'){Products2.prototype.toysArray.push(this);}
    if(this.cType==='book'){Products2.prototype.bookArray.push(this);}
    if(this.cType==='custum'){Products2.prototype.custumArray.push(this);}

}
function  creatPants(){
  Products2.prototype.pantsArray=[];
  new Products2('jeans','img/pants/pants1.png','pants',19.99,false,false,'best baby pants');
  new Products2('Gray jeans','img/pants/pants2.png','pants',15,false,false,'beatiful pants jeans');
  new Products2('pob pants','img/pants/pants3.png','pants',15.99,false,false,'best baby pants pob');
  new Products2('red pants','img/pants/pants4.png','pants',9.99,false,false,'best baby red pants');
  new Products2('normal pants','img/pants/pants5.png','pants',10,false,false,'best baby red pants');
  new Products2('Gray pants','img/pants/pants6.png','pants',12.99,false,false,'best baby red pants');
  new Products2('imoji pants','img/pants/pants7.png','pants',14.99,false,false,'best baby red pants');
  new Products2('Shark Pants','img/pants/pants8.png','pants',16,false,false,'best baby red pants');
  new Products2('Yellow pants','img/pants/pants9.png','pants',17,false,false,'best baby red pants');

}
creatPants();


  
      function  creatShirt(){
        Products2.prototype.shirtArray=[];
        new Products2('africa','img/shirts/shirt1.png','shirts',5,false,false,'africa');
        new Products2('big brother','img/shirts/shirt2.png','shirts',15,false,false,'big brother is dog');
        new Products2('body bulding','img/shirts/shirt3.png','shirts',15.99,false,false,'best baby pants pob');
        new Products2('orange','img/shirts/shirt4.png','shirts',9.99,false,false,'best baby red pants');
        new Products2('Unicorn ','img/shirts/shirt5.png','shirts',10,false,false,'best baby red pants');
        new Products2('Green','img/shirts/shirt6.png','shirts',12.99,false,false,'best baby red pants');
        new Products2('Feliz','img/shirts/shirt7.png','shirts',14.99,false,false,'best baby red pants');
        new Products2('Daddy','img/shirts/shirt8.png','shirts',16,false,false,'best baby red pants');
        new Products2('Yellow','img/shirts/shirt9.png','shirts',17,false,false,'best baby red pants');
      }
      creatShirt();
      function  createToys(){
        Products2.prototype.toysArray=[];
        new Products2('Singer of letters','img/toys/toy1.png','toys',19.99,false,false,'small animal toy that sing the letters songs');
        new Products2('bear','img/toys/toy2.png','toys',15,false,false,'Brown wool Bear');
        new Products2('blue car','img/toys/toy3.png','toys',15.99,false,false,'small blue car with remote control');
        new Products2('wool crocodile','img/toys/toy4.png','toys',9.99,false,false,'green wool and big crocodile');
        new Products2('Singer beetle','img/toys/toy5.png','toys',10,false,false,'wood beetle with voice');
        new Products2('mickey mouse','img/toys/toy6.png','toys',12.99,false,false,'mickey mouse');
        new Products2('The piano game','img/toys/toy7.png','toys',14.99,false,false,'piano for children');
        new Products2('red car','img/toys/toy8.png','toys',16,false,false,'Baaby red car');
        new Products2('Bulldozer','img/toys/toy9.png','toys',17,false,false,'sand bulldozer for kids');
        
      
    }
    createToys();
  function  createBook(){
    Products2.prototype.bookArray=[];
    
        new Products2('Ginger the Girrafe','bookimg/ginger.jpg','book',5.99,false,false,'Read this warm tale of camaraderie and affection set in the wild and beautiful Savannah in our free illustrated kids book. Ginger the giraffe uses her long neck to save the other animals from the blazing forest fire. Follow them in their jungle paths as they all meet with yet another adventure');
        new Products2('I found a Frog','bookimg/frog.jpg','book',6,false,false,'Something magical was happening in the fish bowl  and he wasn’t  quite ready for what lay in store.  Read this captivating free illustrated book for kids that encourages them to explore and be awed by the many wonders of nature. ');
        new Products2('Hide and seek','bookimg/hide.jpg','book',8.99,false,false,'Was it just another game of hide and seek? No. It was not. First, she fell into a deep, dark hole in the ground and then they found a treasure. Did it end there? No! It did not. Read more about this thrilling adventure of Sally and friends in this free illustrated kids’ book. The fun never ends when Sally’s around!');
        new Products2('Doing my chores','bookimg/book4.jpg','book',9.99,false,false,'Love shines through this great illustrated kids’ book . Read how a little girl makes chores fun and easy to do. A fantastic addition to your little one’s free bed time story collection.');
        new Products2('Abe the service dog','bookimg/abe.jpg','book',10,false,false,'Abe was a real Service Dog who dedicated his life assisting BJ, a good family friend. Service Dogs are smart, well trained, well behaved, dedicated, and committed to ensuring their master is safe. This book is intended to bring an awareness of their importance to early readers.');
        new Products2('Tooth fairy','bookimg/tooth.jpg','book',10.99,false,false,'A wonderful story that weaves its magic in the child’s imagination, even while imparting an invaluable lesson in oral health and hygiene. This is a story that the children will return to time and again for a fun bedtime read.');
        new Products2('Captin FAantastic','bookimg/captin.png','book',10.99,false,false,'Dr. Zob’s evil plans had failed once again, thanks to his wonder dog, Winston. They were just were they had to be, with Princess Aura at her birthday party. Read on to find out why Winston deserves a big cuddle and a juicy big bone. A big ‘Woof!’ to this wonderful free children’s story book.');
        new Products2('The case of the missing smile','mookimg/jpg.jpg','book',7,false,false,'Detective Peterson is trying to find where Sally Sue lost her beautiful smile. And she finds it..right in her heart, hidden from sight. Read this imaginative story of a little girl and how she learnt to smile again in this great free children’s fairy story.');
        new Products2('hammy the hamster','bookimg/hammy.jpg','book',8,false,false,'He’s got swag. He wears a tux. He’s a hipster hamster who likes to live free. Join Hammy in his South American home as you read this free story book for kids on your next read aloud day');
       
    }
    createBook();
    var searchCounter=0;
    // Creare the search function 
    var form = document.getElementById('search-form')
  form.addEventListener('submit',searchForm);
  var input='';
 
  function searchForm(event){
      event.preventDefault();
      input = event.target.search.value;
      console.log(input);
      var searchArray=[0];
      console.log(Products2.prototype.pantsArray);
      if(input!==''){
       for(var i =0; i< Products2.prototype.pantsArray.length;i++){
            if(Products2.prototype.pantsArray[i].cName.toLocaleLowerCase().includes(input.toLocaleLowerCase())||Products2.prototype.pantsArray[i].cIformation.toLocaleLowerCase().includes(input.toLocaleLowerCase())){
              searchArray[searchCounter]=Products2.prototype.pantsArray[i];
              console.log(searchArray);
              searchCounter++;
            }
            else{
              console.log('not thing match in pantsArray');
            }
         }
         for(var i =0; i< Products2.prototype.shirtArray.length;i++){
            if(Products2.prototype.shirtArray[i].cName.toLocaleLowerCase().includes(input.toLocaleLowerCase())||Products2.prototype.shirtArray[i].cIformation.toLocaleLowerCase().includes(input.toLocaleLowerCase())){
              searchArray[searchCounter]=Products2.prototype.shirtArray[i];
              searchCounter++;
              console.log(searchArray);
           
            }
            else{
              console.log('not thing match in shirtArray');
            }   
         }
         for(var i =0; i< Products2.prototype.toysArray.length;i++){
            if(Products2.prototype.toysArray[i].cName.toLocaleLowerCase().includes(input.toLocaleLowerCase())||Products2.prototype.toysArray[i].cIformation.toLocaleLowerCase().includes(input.toLocaleLowerCase())){
              searchArray[searchCounter]=Products2.prototype.toysArray[i];
              searchCounter++;
              console.log(searchArray);
          
            }
            else{
              console.log('not thing match in toysArray');
            }   
         }
         for(var i =0; i< Products2.prototype.bookArray.length;i++){
            if(Products2.prototype.bookArray[i].cName.toLowerCase().includes(input.toLowerCase())||Products2.prototype.bookArray[i].cIformation.toLocaleLowerCase().includes(input.toLocaleLowerCase())){
              searchArray[searchCounter]=Products2.prototype.bookArray[i];
              searchCounter++;
              console.log(searchArray);
         
            }
            else{
              console.log('not thing match in bookArray');
            } 

         }
         debugger;
         localStorage.removeItem('render');
         if(searchArray[0]!==0){
          localStorage.setItem('SRG',JSON.stringify(searchArray));
          if(window.location.pathname==='/Products.html'){
            location.reload();
          }else{
            location.href='Products.html';
          }
         searchArray[0]=0;
         }
         else{
          
         var msg='There is no product that matches the search criteria!!.';
          msg.toLocaleUpperCase();
          localStorage.setItem('emtt',JSON.stringify(msg));
          localStorage.removeItem('SRG');
          if(window.location.pathname==='/Products.html'){
            location.reload();
          }else{
            location.href='Products.html';
          }
          
          


         }
        }
         
         
      }

    
      
  