// main.js

// TODO

//click changes volume
let number = document.getElementById("volume-number");
let slide = document.getElementById("volume-slider");
let volumeImg = document.getElementById("volume-image");
number.addEventListener("input", changeNumber);
function changeNumber() {
    slide.value = number.value;
    if(slide.value <= 100){
        volumeImg.src="./assets/media/icons/volume-level-3.svg";
    }
    if(slide.value <= 66){
        volumeImg.src="./assets/media/icons/volume-level-2.svg";
    }
    if(slide.value <= 33){
        volumeImg.src="./assets/media/icons/volume-level-1.svg";
    }
    if(slide.value <= 0){
        volumeImg.src="./assets/media/icons/volume-level-0.svg";
    }
}

//slide changes volume
slide.addEventListener("input", slideNumber) 
function slideNumber() {
    number.value = slide.value;
    if(number.value <= 100) {
        volumeImg.src="./assets/media/icons/volume-level-3.svg";
    }
    if(number.value <= 66) {
        volumeImg.src="./assets/media/icons/volume-level-2.svg";
    }
    if(number.value <= 33) {
        volumeImg.src="./assets/media/icons/volume-level-1.svg";
    }
    if(number.value <= 0) {
        volumeImg.src="./assets/media/icons/volume-level-0.svg";
    }

}

//Change the picture and the audio that is played
let radioHorn = document.getElementById("radio-air-horn");
let carHorn = document.getElementById("radio-car-horn");
let partyHorn = document.getElementById("radio-party-horn");
let picture = document.getElementById("sound-image");

//change picture to radio horn when clicked
radioHorn.addEventListener("click",radioPic);
function radioPic() {
    picture.src="./assets/media/images/air-horn.svg";
}

//change picture to car horn when clicked
carHorn.addEventListener("click", carPic);
function carPic() {
    picture.src="./assets/media/images/car.svg";
}

//change picture to party horn when clicked
partyHorn.addEventListener("click", party);
function party() {
    picture.src="./assets/media/images/party-horn.svg"
}







// var form = document.getElementById("party-horn-form");
// form.addEventListener("click",changeImage);
// function changeImage() {
//     document.getElementById("sound-image").src="./assets/media/images/car.svg";
//     document.getElementById("sound-image").src="./assets/media/images/air-horn.svg";

//     //change the image accroding to the radio button it is on
// }


var partySound = document.getElementById("party-horn-form");
//sound. loook into events that can change this into playng the sound
partySound.addEventListener("submit",playSound);

function playSound(){
    var audio = document.getElementById("horn-sound");
    var volume = document.getElementById("volume-number");
    audio.volume = 0.1; //extrct volume entered from user on the form
    alert(audio.volume);
    audio.play();
    alert(audio.volume);
}
