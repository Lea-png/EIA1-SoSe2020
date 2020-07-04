"use strict";
var allSounds = ['snare.mp3', 'laugh-2.mp3', 'laugh-1.mp3', 'kick.mp3', 'hihat.mp3', 'G.mp3', 'F.mp3', 'C.mp3', 'A.mp3'];
document.querySelector("#button1").addEventListener("click", function () { playSample(0); });
document.querySelector("#button2").addEventListener("click", function () { playSample(1); });
document.querySelector("#button3").addEventListener("click", function () { playSample(2); });
document.querySelector("#button4").addEventListener("click", function () { playSample(3); });
document.querySelector("#button5").addEventListener("click", function () { playSample(4); });
document.querySelector("#button6").addEventListener("click", function () { playSample(5); });
document.querySelector("#button7").addEventListener("click", function () { playSample(6); });
document.querySelector("#button8").addEventListener("click", function () { playSample(7); });
document.querySelector("#button9").addEventListener("click", function () { playSample(8); });
function playSample(sound) {
    if (isRecording) {
        givenBeat.push(sound);
    }
    let audios = new Audio(sound);
    audios.play();
}
function stop() {
    var play = document.querySelector("#playbutton");
    if (play.getAttribute("class") == "fas fa-play") {
        play.setAttribute("class", "fas fa-stop");
        startBeat();
    }
    else {
        play.setAttribute("class", "fas fa-play");
        stopBeat();
    }
}
let beatIntervalId;
var givenBeat = ["hihat.mp3", "kick.mp3", "snare.mp3"];
let isRecording = false;
function startBeat() {
    var counter = 0;
    beatIntervalId = setInterval(function () {
        playSample(givenBeat[counter]);
        counter += 1;
        if (counter >= givenBeat.length) {
            counter = 0;
        }
    }, 500);
}
function stopBeat() {
    clearInterval(beatIntervalId);
}
function deleteBeat() {
    givenBeat = [];
}
function createBeat() {
    if (isRecording == false) {
        isRecording = true;
        document.getElementById("#micbutton");
    }
    else {
        isRecording = false;
    }
}
function isRec() {
    var play = document.querySelector("#recbutton");
    if (play.getAttribute("id") == "micbutton") {
        play.setAttribute("id", "recbutton");
        createBeat();
    }
    else {
        play.setAttribute("id", "micbutton");
        stopBeat();
    }
}
//# sourceMappingURL=aufg8.js.map