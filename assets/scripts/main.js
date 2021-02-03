// main.js

// TODO
let honk = document.getElementById("honk-btn");
//click changes volume
let number = document.getElementById("volume-number");
let slide = document.getElementById("volume-slider");
let volumeImg = document.getElementById("volume-image");
number.addEventListener("input", changeNumber);
function changeNumber() {
    slide.value = number.value;
    if(slide.value <= 100){
        volumeImg.src="./assets/media/icons/volume-level-3.svg";
        honk.removeAttribute("disabled");
    }
    if(slide.value <= 66){
        volumeImg.src="./assets/media/icons/volume-level-2.svg";
        honk.removeAttribute("disabled");
    }
    if(slide.value <= 33){
        volumeImg.src="./assets/media/icons/volume-level-1.svg";
        honk.removeAttribute("disabled");
    }
    if(slide.value <= 0){
        volumeImg.src="./assets/media/icons/volume-level-0.svg";
        honk.setAttribute("disabled", "");
    }
}

//slide changes volume
slide.addEventListener("input", slideNumber) 
function slideNumber() {
    number.value = slide.value;
    if(number.value <= 100) {
        volumeImg.src="./assets/media/icons/volume-level-3.svg";
        honk.removeAttribute("disabled");
    }
    if(number.value <= 66) {
        volumeImg.src="./assets/media/icons/volume-level-2.svg";
        honk.removeAttribute("disabled");
    }
    if(number.value <= 33) {
        volumeImg.src="./assets/media/icons/volume-level-1.svg";
        honk.removeAttribute("disabled");
    }
    if(number.value <= 0) {
        volumeImg.src="./assets/media/icons/volume-level-0.svg";
        honk.setAttribute("disabled", "");
    }

}

//Change the picture and the audio that is played
let radioHorn = document.getElementById("radio-air-horn");
let carHorn = document.getElementById("radio-car-horn");
let partyHorn = document.getElementById("radio-party-horn");
let picture = document.getElementById("sound-image");
let hornSound = document.getElementById("horn-sound");

//change picture to radio horn when clicked
radioHorn.addEventListener("click",radioPic);
function radioPic() {
    picture.src="./assets/media/images/air-horn.svg";
    hornSound.src="./assets/media/audio/air-horn.mp3";
}

//change picture to car horn when clicked
carHorn.addEventListener("click", carPic);
function carPic() {
    picture.src="./assets/media/images/car.svg";
    hornSound.src="./assets/media/audio/car-horn.mp3"
}

//change picture to party horn when clicked
partyHorn.addEventListener("click", party);
function party() {
    picture.src="./assets/media/images/party-horn.svg"
    hornSound.src="./assets/media/audio/party-horn.mp3"
}

//Get the sound to play
honk.addEventListener("click", playSound);
function playSound(evt) {
    evt.preventDefault();
    let sound = document.getElementById("horn-sound");
    let volume = document.getElementById("volume-number");
    sound.volume = volume.value/100;
    sound.play();
}


