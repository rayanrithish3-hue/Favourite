const heart=document.getElementById("heart");

const music=document.getElementById("bgmusic");

let started=false;

heart.addEventListener("click",()=>{

if(started) return;

started=true;

music.play();

heart.style.filter="drop-shadow(0 0 40px #ff8cff)";

if(navigator.vibrate){

navigator.vibrate(80);

}

});
