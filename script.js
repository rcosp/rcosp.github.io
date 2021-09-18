
var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}

window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("abajo", window.scrollY > 0)
});

const typed = new Typed('.typed', {
    strings: ["Desarrollador", "Diseñador", "Programador"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

AOS.init({
    offset: 250,
    duration: 1000
});