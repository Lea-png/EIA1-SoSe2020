///Hilfe von https://github.com/beaucarnes/simon-game/blob/master/js/index.js & Mitstudierende
//Funktioniert nicht 

let good; // Gibt gemacht Fehler an 
let compTurn; // Gibt an wer dran is (Spieler oder Com)
let intervalId;
let ton = true; // Ton abspielen oder nicht
let on = false; // Spiel an oder nicht
let win; // Gewonnen oder nich
let buttonsounds = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "kick.mp3", "winner.mp3", "loser.mp3"]; // Ein Array mit allen Sounds

//Schwierigkeitsstufen//
let easychosen;
let advancedchosen;
let hardchosen;
let extremechosen;
const sound1 = document.querySelector("#sound1");
const sound2 = document.querySelector("#sound2");
const sound3 = document.querySelector("#sound3");
const sound4 = document.querySelector("#sound4");
const sound5 = document.querySelector("#sound5");
const reloadbutton = document.querySelector("#reload");
const progressbar = document.querySelector(".progress-bar");
const turnCounter = document.querySelector("#turn");
const instructions = document.querySelector("#instruction");

const diffEasy = document.querySelector("#difficultyeasy");
const diffAdvanced = document.querySelector("#difficultyadvanced");
const diffHard = document.querySelector("#difficultyhard");
const diffExtreme = document.querySelector("#difficultyextreme");
//Schwierigkeitsfunktionen
var i;
// Leicht
diffEasy.addEventListener("click", function () {
    console.log("buttonEASYclicked"); //Konsolenausgabe zur kontrolle
    diffEasy.style.boxShadow = "3px 3px 15px 3px white"; //gewählte Schwierigkeit wird durch einen boxschatten markiert
    on = true; // Das Spiel läuft
    easychosen = true;
    advancedchosen = false;
    hardchosen = false;
    extremechosen = false;
    playeasy();
});
function playeasy() {
    win = false; // Alle variablen werden erstmal zurückgesetzt falls von vorherigen Runden noch die Reihenfolge gespeichert ist etc.
    compOrder = []; // Array in dem die willkürliche Reihenfolge gespeichert wird ist leer
    playerOrder = [];
    flash = 0; // Noch kein Button hat aufgeleuchtet
    intervalId = 0;
    turn = 1; //Erste Runde
    turnCounter.innerHTML = "1"; // Der counter stellt sich auf 1, da erste Runde
    good = true; // der Spieler hat noch nichts falsches gedrückt
    for (i = 0; i < 5; i++) { // 5 Zahlen werden erstellt
        compOrder.push(Math.floor(Math.random() * 5) + 1); // erstellt eine willkürliche Zahl zwischen eins und fünf und pusht diese Reihenfolge dann in das dafür vorgesehene Array
    }
    console.log(compOrder); // Kontrolle über Konsolenausgabe, funktioniert yeyyy
    compTurn = true; // der Computer startet und beginnt den Ton zu spielen
    intervalId = setInterval(gameTurn, 800); //die Funktion wird alle 800millisekunden aufgerufen: Der computer spielt einen Ton alle 800ms
}

//Extreme//
diffExtreme.addEventListener("click", function () {
    console.log("buttonExtremeclicked"); //funktioniert
    diffExtreme.style.boxShadow = "3px 3px 15px 3px white";
    on = true; // Das Spiel ist am laufen
    easychosen = false;
    advancedchosen = false;
    hardchosen = false;
    extremechosen = true;
    playextreme();
});
function playextreme() {
    win = false; // Alle variablen werden erstmal zurückgesetzt falls von vorherigen Runden noch die Reihenfolge gespeichert ist etc.
    compOrder = []; // Array in dem die willkürliche Reihenfolge gespeichert wird ist leer
    playerOrder = [];
    flash = 0; // Noch kein Button hat aufgeleuchtet
    intervalId = 0;
    turn = 1; //Erste Runde
    turnCounter.innerHTML = "1"; // Der counter stellt sich auf 1, da erste Runde
    good = true; // der Spieler hat noch nichts falsches gedrückt
    for (i = 0; i < 35; i++) { //35 Zahlen werden generiert
        compOrder.push(Math.floor(Math.random() * 5) + 1); // erstellt eine willkürliche Zahl zwischen eins und fünf und pusht diese Reihenfolge dann in das dafür vorgesehene Array
    }
    compTurn = true; // der Computer startet und beginnt den Ton zu spielen
    intervalId = setInterval(gameTurn, 800); //die Funktion wird alle 800millisekunden aufgerufen: Der computer spielt einen Ton alle 800ms
}

//Funktion damit Sounds gespielt werden
function s1button() {
    if (ton) {
        let sound = new Audio(buttonsounds[0]);
        sound.play();
    }
  
}
function s2button() {
    if (ton) {
        let sound = new Audio(buttonsounds[1]);
        sound.play();
    }

}
function s3button() {
    if (ton) {
        let sound = new Audio(buttonsounds[2]);
        sound.play();
    }
 
}
function s4button() {
    if (ton) {
        let sound = new Audio(buttonsounds[3]);
        sound.play();
    }

}
function s5() {
    if (ton) {
        let sound = new Audio(buttonsounds[4]);
        sound.play();
    }

}

function gameTurn() {
    on = false; // der Spieler kann keine Buttons drücken
    if (flash == turn) { //Wenn ide Anzahl der gespielten töne mit der Runde übereinstimmt. Ist der Computer fertig und der Spieler ist an der reihe 
        clearInterval(intervalId); // Abspielen der Samples stoppt
        compTurn = false; // der computer ist nichtmehr an der reihe
        instructions.innerHTML = "REPEAT THE SOUNDS!";
        on = true; //jetzt kann der spieler drücken
    }
    if (compTurn) { // wenn der computer noch nicht fertig ist
        instructions.innerHTML = "WATCH AND LISTEN CAREFULLY!";
        setTimeout(function () {
            if (compOrder[flash] == 1)
                topleftbutton(); //Wenn die erste Stelle im Array eins entspricht, wird funktion one ausgeführt
            if (compOrder[flash] == 2)
                toprightbutton(); // Wenn die erste Stelle im Array zwei entspricht,...usw
            if (compOrder[flash] == 3)
                bottomleftbutton();
            if (compOrder[flash] == 4)
                bottomrightbutton();
            if (compOrder[flash] == 5)
                innerbutton();
    });

//Fuktionierende Knöpfe
sound1.addEventListener("click", function () {
    if (on) { //Spiel muss an sein
        playerOrder.push(1); // Gespielter Ton wird in das Array gepusht
        check(); //Vergleichfunktion
        s1button(); 
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
}); 
sound2.addEventListener("click", function () {
    if (on) {
        playerOrder.push(2);
        check();
        s2button();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
sound3.addEventListener("click", function () {
    if (on) {
        playerOrder.push(3);
        check();
        s3button();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
sound4.addEventListener("click", function () {
    if (on) {
        playerOrder.push(4);
        check();
        s4button();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
sound5.addEventListener("click", function () {
    if (on) {
        playerOrder.push(5);
        check();
        s5();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
// Gedrückte Tasten werden mit den gespeicherten Tönen im Array verglichen
function check() {
    if (playerOrder[playerOrder.length - 1] !== compOrder[playerOrder.length - 1]) 
        good = false; 
    if (playerOrder.length == 5 && good && easychosen) { 
        winGame(); 
    }
    if (playerOrder.length == 15 && good && advancedchosen) {
        winGame(); 
    }
    if (playerOrder.length == 25 && good && hardchosen) {
        winGame();
    }
    if (playerOrder.length == 35 && good && extremechosen) {
        winGame(); 
    }
    if (good == false) { //Bei Fehler verliert man 
        looseGame(); 
        ton = false; /
    }
    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);

        
        //Fortschritt
        if (turn == 2 && easychosen) {
            progressbar.style.width = "20%";
        }
        if (turn == 3 && easychosen) {
            progressbar.style.width = "40%";
        }
        if (turn == 4 && easychosen) {
            progressbar.style.width = "60%";
        }
        if (turn == 5 && easychosen) {
            progressbar.style.width = "80%";
        }
    }
}
// Bei verlorenen Spiel
function looseGame() {
    let sound = new Audio(buttonsounds[6]); //loser Sound
    sound.play();
    instructions.innerHTML = "SORRY, YOU LOST!"; // Nachricht
    turnCounter.innerHTML = "FAIL!"; // Counter zeigt Niederlage an
    setTimeout(() => {
        clearColor();
    }, 800);
    on = false;
    win = false;
}

// Bei gewonnen
function winGame() {
    progressbar.style.width = "100%";
    let sound = new Audio(buttonsounds[5]); //WinnerSound wird abgespielt
    sound.play();
    instructions.innerHTML = "CONGRATS, YOU WON!"; //Gewinnernachricht
    turnCounter.innerHTML = "WIN!"; // Gewinnernachricht
    on = false; //Knöpfe nicht mehr drückbar
    win = true; // Spiel gewonnen
}

// Neu Laden
reloadbutton.addEventListener("click", function () {
    window.location.reload(); // Quelle: https://stackoverflow.com/questions/43985752/how-to-reload-page-the-whole-page-in-angular-2//
});

//# sourceMappingURL=endaufgabescript.js.map