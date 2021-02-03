// main.js

// TODO

//document.getElementById("sound-image").src="./assets/media/images/car.svg";

var form = document.getElementById("party-horn-form");
form.addEventListener("click",changeImage);
function changeImage() {
    document.getElementById("sound-image").src="./assets/media/images/car.svg";
    document.getElementById("sound-image").src="./assets/media/images/air-horn.svg";

    //change the image accroding to the radio button it is on
}


var partySound = document.getElementById("party-horn-form");
//sound. loook into events that can change this into playng the sound
partySound.addEventListener("submit",playSound);

function playSound(){
    var audio = document.getElementById("horn-sound");
    var volume = document.getElementById("volume-number");
    audio.volume = 0.5; //extrct volume entered from user on the form
    alert(audio.volume);
    audio.play();
    alert(audio.volume);
}
