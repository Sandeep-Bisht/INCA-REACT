// header
let nav = document.querySelector(".header-wrapper");
console.log(nav, 'header wrapper')
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
            nav.classList.remove("header-scrolled");
    }
}

// counter

var counter = document.querySelector(".counter");
let count = 1

setInterval( () => {
if (count < 4) {
    count++;
    counter.innertext = count;
}
} , 10000 );


// ---------Timer js----------------------------------

var dest = new Date("nov 3, 2022 10:00:00").getTime();

var x = setInterval(function () {

var now = new Date().getTime();

var diff = dest - now;

var days = Math.floor(diff / (1000* 60*60*24));

var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

var seconds = Math.floor((diff % (1000 * 60)) / 1000);

document.getElementById("day").innerHTML = days  ;
document.getElementById("hours").innerHTML = hours ;
document.getElementById("minutes").innerHTML = minutes ;
document.getElementById("seconds").innerHTML = seconds ;
}, 1000);
console.log('included');