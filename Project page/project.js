var duck = document.querySelector('.duck');

let move = 20;

var img = document.querySelector("#eend");
var mywidth = img.clientWidth;
let x = screen.width - mywidth;
let y = screen.height;



window.addEventListener("load", () => {
    duck.style.position = "absolute";
    duck.style.left = 0;
    duck.style.top = '200vh'//(200*(screen.height/100))+'px';
});

document.addEventListener('keydown', function(event) {
    console.log(mywidth);
    if(event.key === 'a' ){
        if(parseInt(duck.style.left)  >= 0 ){
            duck.style.left = parseInt(duck.style.left) - move + "px";
        }
            
    }

    if(event.key === 'd' ){
        if(parseInt(duck.style.left) < x ){
            duck.style.left = parseInt(duck.style.left) + move + "px";
        }
    }

    if(event.key === 'w' ){
        if(parseInt(duck.style.top) >= 2*y ){
            duck.style.top = parseInt(duck.style.top) - move + "px";
        }

    }

    if(event.key === 's' ){
        duck.style.top = parseInt(duck.style.top) + move + "px";
        
    }  

})