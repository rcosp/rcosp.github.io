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