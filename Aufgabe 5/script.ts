    

var eur08: number = 4965.7;
var eur: number = 4209.3;

var afr08: number = 1028;
var afr: number = 1235.5;

var samer08: number = 1132.6;
var samer: number = 1261.5;

var asia08: number = 12954.7;
var asia: number = 16274.1;

var namer08: number = 6600.4;
var namer: number = 6035.6;

var aus08: number = 1993;
var aus: number = 2100.5;


var gesamt: number = eur + afr + samer + namer + asia + aus;


var proz1: number = gesamt * 0.01;
var eurorel: number = eur / proz1;
var afrrel: number = afr / proz1;
var asiarel: number = asia / proz1;
var ausrel: number = aus / proz1;
var samerrel: number = samer / proz1;
var namerrel: number = namer / proz1;

var eurov: number = eur08 * 0.01;
var eurov2: number = eur08 - eur;
var eurov3: number = eurov2 / eurov;

var afrv: number = afr08 * 0.01;
var afrv2: number = afr08 - afr;
var afrv3: number = afrv2 / afrv;

var samerv: number = samer08 * 0.01;
var samerv2: number =  samer08 - samer;
var samerv3: number = samerv2 / samerv;

var asiav: number = asia08 * 0.01;
var asiav2: number = asia08 - asia;
var asiav3: number = asiav2 / asiav;

var namerv: number = namer08 * 0.01;
var namerv2: number = namer08 - namer;
var namerv3: number = namerv2 / namerv;

var ausv: number =  aus08 * 0.01;
var ausv2: number = aus08 - aus;
var ausv3: number = ausv2 / ausv;


console.log("Die Emission von Europa ist : "  + eur + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit :  " + eurorel + "%" );
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + eurov3 + "% verändert "  );
console.log("2018 im Vergleich zu 2008 sind das " + eurov2 + "kg C02" );


console.log("Die Emission von Asien ist : "  + asia + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit :  " + asiarel + "%" );
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asiav3 + "% verändert "  );
console.log("2018 im Vergleich zu 2008 sind das " + asiav2 + "kg C02" );


console.log("Die Emission von Afrika ist : "  + afr + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit :  " + afrrel + "%" );
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afrv3 + "% verändert "  );
console.log("2018 im Vergleich zu 2008 sind das " + afrv2 + "kg C02" );


console.log("Die Emission von Südamerika ist : "  + samer + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit :  " + samerrel + "%" );
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + samerv3 + "% verändert "  );
console.log("2018 im Vergleich zu 2008 sind das " + samerv2 + "kg C02" );

console.log("Die Emission von Nordmerika ist : "  + namer + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit :  " + namerrel + "%" );
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + namerv3 + "% verändert "  );
console.log("2018 im Vergleich zu 2008 sind das " + namerv2 + "kg C02" );

console.log("Die Emission von Australien ist : "  + aus + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit :  " + ausrel + "%" );
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + ausv3 + "% verändert "  );
console.log("2018 im Vergleich zu 2008 sind das " + ausv2 + "kg C02" );
