var carta1 = Math.floor((Math.random()*11)+1)
var carta2 = Math.floor((Math.random()*11)+1)
var carta3 = Math.floor((Math.random()*11)+1)
var carta4 = Math.floor((Math.random()*11)+1)
var num1 = carta1;
var num2 = carta2;
var num3 = carta3;
var num4 = carta4;
var total1 = num1 + num2;
var total2 = num3 + num4;
var otraCarta;

alert ("carta 1: " + num3 + " carta 2: " +  num4);
alert ("total: " + total2);
while(otraCarta != "no"){
otraCarta=prompt("¿quieres otra carta?");
if (otraCarta == "si"){
var cartaExtra = Math.floor((Math.random()*11)+1);
alert("tu carta es: " + cartaExtra);
total2= total2 + cartaExtra
alert(total2);
if (total2 >= 21){
otraCarta = "no";
}
}
}
if (total1 == 21){
alert("ganó la maquina");
}else if(total2 == 21){
alert("ganó el jugador 1")
}else if(total1 == total2){
alert ("empate");
}else if (total1 > 21){
alert("ganó el jugador 1")
}else if(total2 > 21){
alert("Lastima, su total es "+ total2 + "," + " suerte para la próxima");
}else if (total1 >  total2){
alert("el ganador es la maquina con:  " + total1);
}else if (total1 < total2){
alert("el ganador es el jugador 1 con: "  + total2);
}
alert ( "la maquina tenia " + total1 );
alert ("carta 1: " +  num1 + " carta 2: " +  num2);
