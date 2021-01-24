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
    document.getElementById("tpic").style.filter = "hue-rotate(" + colorDegree + "deg)";
}

function colorchangeBack(){
    colorDegree = colorDegree - 10;
    document.getElementById("tpic").style.filter = "hue-rotate(" + colorDegree + "deg)";
}

function colorgreen(){
    document.getElementById("tpic").style.filter = "hue-rotate(120deg)";
}
function colorred(){
    document.getElementById("tpic").style.filter= "hue-rotate(0deg)";
}
function colorblue(){
    document.getElementById("tpic").style.filter= "hue-rotate(240deg)";
}
var Logos =["batman.png","smile.png","tiktok.png","code.png","smile.png","superman.png","adidaswithtext.png","cat.png","bmw_logo_PNG19714.png","light.png","nikecorrect.png","mercedes_PNG80187.png"];
var newlogo = 0;

function changeLogo(){
    if(newlogo <Logos.length){
        document.getElementById("piclogo").src = "assets/images/sticker/" + Logos[newlogo];
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
var Logos =["batman.png","smile.png","tiktok.png","code.png","smile.png","superman.png","adidaswithtext.png","cat.png","bmw_logo_PNG19714.png","light.png","nikecorrect.png","mercedes_PNG80187.png"];
var newlogo = 0;

function changeLoogo(){
    if(newlogo <Logos.length){
        document.getElementById("picloogo").src = "assets/images/sticker/" + Logos[newlogo];
        newlogo++;
    }
    else {
        newlogo = 0;
    }
}



