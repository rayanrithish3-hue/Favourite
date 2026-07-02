const heart=document.getElementById("heart");

const music=document.getElementById("bgmusic");

let started=false;

heart.addEventListener("click",()=>{

if(started) return;

started=true;

music.play();

heart.style.filter=
"drop-shadow(0 0 15px #d7a8ff) drop-shadow(0 0 35px #b14cff) drop-shadow(0 0 55px #8f3dff)";

if(navigator.vibrate){

navigator.vibrate(80);

}

});
