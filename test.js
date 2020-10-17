"use strict";
//Deklarationen
var start = false;
var index = 1;
let instructions = document.querySelector("#schwierigkeit");

//Sounds werden den Button zugeordnet
window.addEventListener("load", function () {
    document.querySelector("#Sound1").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector("#Sound2").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector("#Sound3").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector("#Sound4").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector("#Sound5").addEventListener("mousedown", function () { playSample("kick.mp3"); });

   // document.querySelector("#start").addEventListener("click", play);
});

//Schwierigkeitslevel wird oben angezeigt, ändert sich automatisch mit den Runden
if (index > 5 && < 10) {
    instructions.innerHTML = "LEICHT"; }
else if (index > 10 && < 15) {
    instructions.innerHTML = "NORMAL";}
else if (index > 15 && < 20) {
    instructions.innerHTML = "MITTEL";}
else if (index > 20 && < 25) {
    instructions.innerHTML = "SCHWER";}
else if (index > 25) {
    instructions.innerHTML = "EXTREM";}

//sounds array = array mit den sounds
//rsound = leeres array in dem die sounds abgespeichert werden
//for (let index: number = 0; index < 5; index++) {
   // rsound.push(sounds[Math.floor(Math.random() * 5)]); }

//Wenn start geklick spielt random sound!


//Funktion beginnt das Spiel: Random Sound wird gespielt
//function play() {
    //Random Sound wird gespielt
    //Sound wird im Array gespeichert
}


function playSample(mp3) {
    var sound = new Audio("assets/" + mp3);
    sound.play();
    if (record == true) {
        sequence.push(mp3);
    }
}

//# sourceMappingURL=Drumpad2script.js.map 

//Alternative
    //Wenn Schwierigkeit gewählt, dann startet das Game = Random Sound wird gespielt
   // if click "easy" || "normale ||"
    //.-.-.-.-.-.-.-.-.-.-.
    // Schwierigkeiten Eigenschaften angegeben
//if ('click easy') {
    //insgesamt 5 Töne im Array}
//else if ('click mittel') {
   // insgesamt 10 Töne in Array }
//else if ('click schwer') {
    //insg 15 Töne }
//else if ('click extrem ') {
   // insge 20 Töne }