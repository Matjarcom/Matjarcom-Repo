// var Shirts = [
//     {
//         type: "tshirt",
//         brand: "nike",
//         sticker: "correct.png",
//     },
//     {
//         type: "tshirt",
//         brand: "nike",
//         sticker: "correct.png",
//     },
//     {
//         type: "tshirt",
//         brand: "nike",
//         sticker: "correct.png",
//     },
// ];
// change shirt color and logo
var colorDegree = 300;

function colorchangeNext(){
    colorDegree = colorDegree + 10;
    document.getElementById("item-upperbody").style.filter = "hue-rotate(" + colorDegree + "deg)";
}

function colorchangeBack(){
    colorDegree = colorDegree - 10;
    document.getElementById("item-upperbody").style.filter = "hue-rotate(" + colorDegree + "deg)";
}

function colorgreen(){
    document.getElementById("item-upperbody").style.filter = "hue-rotate(120deg)";
}
function colorred(){
    document.getElementById("item-upperbody").style.filter= "hue-rotate(0deg)";
}
function colorblue(){
    document.getElementById("item-upperbody").style.filter= "hue-rotate(240deg)";
}
function colorblack(){
    document.getElementById("item-upperbody").style.filter = "brightness(15%)";
}
function colorgray(){
    document.getElementById("item-upperbody").style.filter = "grayscale(100%)";
}
var Logos =["batman.png","smile.png","tiktok.png","code.png","smile.png","superman.png","adidaswithtext.png","cat.png","bmw_logo_PNG19714.png","light.png","nikecorrect.png","mercedes_PNG80187.png","EMPTY.png"];
var newlogo = 0;

function changeLogo(){
    
    document.getElementById('item-text').innerHTML = "";
    if(newlogo <Logos.length){
        document.getElementById("item-shirtlogo").src = "assets/images/sticker/" + Logos[newlogo];
        newlogo++;
    }
    else {
        newlogo = 0;
    }
}



//change mug color and logo
var colorDegree = 300;

function colorNext(){
    colorDegree = colorDegree + 10;
    document.getElementById("mugpic").style.filter = "hue-rotate(" + colorDegree + "deg)";
}

function colorBack(){
    colorDegree = colorDegree - 10;
    document.getElementById("mugpic").style.filter = "hue-rotate(" + colorDegree + "deg)";
}

function colorgreeen(){
    document.getElementById("mugpic").style.filter = "hue-rotate(120deg)";
}
function colorreed(){
    document.getElementById("mugpic").style.filter= "hue-rotate(0deg)";
}
function colorbluue(){
    document.getElementById("mugpic").style.filter= "hue-rotate(240deg)";
}
function colorblaack(){
    document.getElementById("mugpic").style.filter = "grayscale(1) brightness(0.25)";
}
function colorgraay(){
    document.getElementById("mugpic").style.filter = "grayscale(100%)";
}
var Logos =["batman.png","smile.png","tiktok.png","code.png","smile.png","superman.png","adidaswithtext.png","cat.png","bmw_logo_PNG19714.png","light.png","nikecorrect.png","mercedes_PNG80187.png"];
var newlogo = 0;

function changeLoogo(){
     document.getElementById('item-textm').innerHTML = "";
    if(newlogo <Logos.length){
        document.getElementById("item-muglogo").src = "assets/images/sticker/" + Logos[newlogo];
        newlogo++;
    }
    else {
        newlogo = 0;
    }
}
function changetext(){
    document.getElementById('item-shirtlogo').src = "assets/images/sticker/EMPTY.png";
    var userinput1 = prompt('enter your name here');
     document.getElementById('item-text').innerHTML = userinput1;
}
function changetexxt(){
    document.getElementById('item-muglogo').src = "assets/images/sticker/EMPTY.png";
    var userinput1 = prompt('enter your name here');
     document.getElementById('item-textm').innerHTML = userinput1;
}



