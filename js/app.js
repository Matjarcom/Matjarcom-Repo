'use strict ';



//////// this function for slide show in home page
var slideIndex = 0;
showSlides();
function showSlides() {
   
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex ].style.display = "block"; 
    slideIndex++;
    if(slideIndex == slides.length){
        slideIndex = 0;

    }
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}




///////////// function to display the contDown conter behaind the sales imgs in home 
    
        var countDownDate = new Date("Feb 31, 2021 12:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(countDown, 1000);
        function countDown() {
            // Get today's date and time
            var now = new Date().getTime();
                
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
                
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="demo"
            document.getElementById("days").innerHTML = days + "d " ;
            document.getElementById('hours').innerHTML = hours + "h ";
             document.getElementById('minutes').innerHTML= minutes + "m " ;
             document.getElementById('seconds').innerHTML= seconds + "s ";

                
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }




