// ------------toggle icon navbar----------
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// -------scroll sections active link======

let sections=document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
// ------------stciky navbar----------

let header =  document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


// ---------remove toggle icon when clock----

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

//slideshow

var counter=1;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter++;
if(counter >2)
{
    counter=1;
}
},5000)


// ------------scroll reveal----------
ScrollReveal({
     reset: true,
     distance : '80px',
     duration : 2000,
     delay : 200
    });

    ScrollReveal().reveal('.home-content, .heading, .subtitle, .credentials .title', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .slider, .Portfolio-box, .contact-right img, .about-col-1 img', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1,.contact-left p,.contact-left p i,.contact-left p span,.social-icons', { origin: 'left'});
    ScrollReveal().reveal('.about-col-2', { origin: 'right'});




