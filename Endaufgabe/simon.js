//Die Datei ist nicht vollständig und richtig funktionstüchtig
//Unter anderem, weil ich ein großes Problem damit hatte die Sounds auf die Knöpfe zu bekommen
//Hier stehen nur meine Ansätze drinnen 

"use strict";
//Deklarationen
//Button mit Sounds
const Sound1 = document.querySelector("#Sound1");
const Sound2 = document.querySelector("#Sound2");
const Sound3 = document.querySelector("#Sound3");
const Sound4 = document.querySelector("#Sound4");
const Sound5 = document.querySelector("#Sound5");
const start = document.querySelector("#start");

var sequence = []; // Gespeicherte Töne nach Reihenfolge, zum wiedergeben 
var player = []; //Speichert geklickte Töne vom Spieler
var sounds = ["A.mp3", "F.mp3", "G.mp3", "H.mp3", "kick.mp3"]; //ein array mit allen sounds
let good;
let compTurn;
let win;

var playerzähler = 0; //Zähler für gespielte Töne (Spieler)
var rzähler = 0; //Zähler für gespielte Töne (Computer)

Math.random(); //Hier wird eine zufällige Audiospur ausgesucht 
Math.floor(Math.random() * 5);
for (let index = 0; index < 5; index++) { 
    sequence.push(sounds[Math.floor(Math.random() * 5)]); } //"SOunds" gibt das Array an, in dem die Samples sind, aus denen ausgesucht wird

//Sounds werden den Button zugeordnet
//Ich hab verschiedene Methoden ausprobiert, leider hat nichts wirklich funktioniert
//Bei kleinen Änderungen im Script hatten die Button plötzlich keinen Ton mehr :(
window.addEventListener("load", function () {
    document.querySelector("#Sound1").addEventListener("mousedown", function () { spielButton("Sound1", sounds[0]); }); //Beispiele meiner verschiedenen Ansätze
    document.querySelector("#Sound2").addEventListener("click", function () { spielButton("Sound2", songs[1]); });
    document.querySelector("#Sound3").addEventListener("mousedown", function () { playSample("F.mp3"); }); //beim Klicken wird die Funktion 'PlaySample' durchgeführt mit dem dazugehörigen Sample
    document.querySelector("#Sound4").addEventListener("click", function () { playSample("G.mp3"); });
    document.querySelector("#Sound5").addEventListener("mousedown", function () { playSample("kick.mp3"); });

function playSample(mp3) { //Soll die Audiodatei abspielen, wenn der Button gedrückt wird. Ist im Event Listener darüber angegeben 
    var sound = new Audio("assets/" + mp3);
    sound.play();
}

function spielButton(buttonname, samplename) {
    buttonname = "#" + buttonname;
    var pressedButton = new Audio(samplename); //der ton des Buttons der vom SPieler geklickt wird wird gespielt
    pressedButton.play();
}
    document.getElementById("start").addEventListener("click", function () {
        new Audio(sequence[0]).play();
    
 //Versuch: Schwierigkeitslevel wird oben angezeigt, ändert sich automatisch mit den Runden
//Je nachdem wie hoch der Counter beim Index ist wird der Text im HTML-Dokument geändert
//Damit kann der Spieler direkt gucken wie weit er kommt und am Ende wird ihm sein Level + Runden ausgegeben
if (index > 5 && index < 10) {
    schwierigkeit.innerHTML = "LEICHT"; }
else if (index > 10 && index < 15) {
    schwierigkeit.innerHTML = "NORMAL";}
else if (index > 15 && index < 20) {
    schwierigkeit.innerHTML = "MITTEL";}
else if (index > 20 && index < 25) {
    schwierigkeit.innerHTML = "SCHWER";}
else if (index > 25) {
    schwierigkeit.innerHTML = "EXTREM";}

    start.addEventListener('click', (event) => {
        if (start.checked == true) {
          start = true;
          turnCounter.innerHTML = "-";
        } else {
          start = false;
          turnCounter.innerHTML = "";
          clearColor();
          clearInterval(intervalId);
           good = true;
      for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
      }
      compTurn = true;
        }
      });


      function check() { //vergleicht die Länge der Töne vom Spieler-Array mit der vom Computer
        if (player[player.length - 1] !== order[sequence.length - 1])
          good = false;
        }
      
        if (good == false) { 
          flashColor();
          turnCounter.innerHTML = "NO!";
          setTimeout(() => {
            turnCounter.innerHTML = turn;
            clearColor();
      
            if (strict) {
              play();
            } else {
              compTurn = true;
              flash = 0;
              playerOrder = [];
              good = true;
              intervalId = setInterval(gameTurn, 800);
            }
          }, 800);
        
      
        if (turn == playerOrder.length && good && !win) {
          turn++;
          playerOrder = [];
          compTurn = true;
          flash = 0;
          turnCounter.innerHTML = turn;
          intervalId = setInterval(gameTurn, 800);
        }
      
      }
      
      function win() {
        flashColor();
        turnCounter.innerHTML = "WIN!";
        on = false;
        win = true;
      }
      

     

    //Spieler Runde: Nach der Abfolge, die im Array "Sequence" gespeichert wurde, ist der Spieler dran
    //Muss die richtigen Knöpfe drücken
    //Gedrückte Knöpfe werden ebenfalls in einem Array gespeichert
    //Die Arrays werden miteinander verglichen


//Wenn ein Ton abgespielt wird leutet der dazugehörige Button
//Funktion: alle leuchten auf
        function flashColor() {
            Sound1.style.backgroundColor = "rgb(255, 204, 251)";
            Sound2.style.backgroundColor = "rgb(215, 252, 255)";
            Sound3.style.backgroundColor = "rgb(186, 255, 215)";
            Sound4.style.backgroundColor = "rgb(255, 237, 198)";
            Sound5.style.backgroundColor = "rgb(218, 185, 255)";
        }

//# sourceMappingURL=endgame.js.map