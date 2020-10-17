let index;

window.addEventListener("load", function (): void {

    document.querySelector("#Sound1").addEventListener("mousedown", function(): void {playSample("kick.mp3"); });
    document.querySelector("#Sound2").addEventListener("mousedown", function(): void {playSample("hihat.mp3"); });
    document.querySelector("#Sound3").addEventListener("mousedown", function(): void {playSample("snare.mp3"); });
    document.querySelector("#Sound4").addEventListener("mousedown", function(): void {playSample("A.mp3"); });
    document.querySelector("#Sound5").addEventListener("mousedown", function(): void {playSample("C.mp3"); });
    document.querySelector("#Sound6").addEventListener("mousedown", function(): void {playSample("F.mp3"); });
    document.querySelector("#Sound7").addEventListener("mousedown", function(): void {playSample("G.mp3"); });
    document.querySelector("#Sound8").addEventListener("mousedown", function(): void {playSample("laugh-1.mp3"); });
    document.querySelector("#Sound9").addEventListener("mousedown", function(): void {playSample("laugh-2.mp3"); });

});
//sounds array = array mit den sounds
//rsound = leeres array in dem die sounds abgespeichert werden
for (let index: number = 0; index < 5; index++) {
    rsound.push(sounds[Math.floor(Math.random() * 5)]); }

if ('click easy') {
    insgesamt 5 Töne im Array
}
else if ('click mittel') {
    insgesamt 10 Töne in Array 
}
else if ('click schwer') {
    insg 15 Töne 
}
else if ('click extrem ') {
    insge 20 Töne 
}