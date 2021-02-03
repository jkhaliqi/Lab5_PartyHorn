// main.js

// TODO


var sound = document.getElementById('party-horn-form');
//sound. loook into events that can change this into playng the sound
sound.addEventListener("submit",playSound);
function playSound(){
    var audio = document.getElementById("horn-sound");
    var volume = document.getElementById("volume-number");
    audio.volume = 0.5; //extrct volume entered from user on the form
    alert(audio.volume);
    audio.play();
    alert(audio.volume);
}
