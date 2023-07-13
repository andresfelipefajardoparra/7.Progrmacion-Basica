function aleatorio(minima, maxima) {
    return Math.floor(Math.random() * (maxima - minima + 1) + minima)
}
// 1 es piedra, 2 es papel, 3 es tijera 
let jugador = 0
// para agregar while, entonces ponemos pc en cero
let Pc = 0
// ganar o perder le suman uno 
let triunfos = 0
let = perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    //pc este es el valor que optiene 
    Pc = aleatorio(1, 3)


    jugador = prompt("Elige: 1 para piedra. 2 para papel, 3 para tijera")
    //alert("Elegiste " + jugador)
    if (jugador == 1) {
        alert("Elegiste 🪨")
    } else if (jugador == 2) {
        alert("Elegiste 🗞️")
    } else if (jugador == 3) {
        alert("Elegiste ✂️")
    } else {
        alert("Elegiste Perder, jajajajaja")
    }
    if (Pc == 1) {
        alert("PC elige 🪨")
    } else if (Pc == 2) {
        alert("PC elige 🗞️")
    } else if (Pc == 3) {
        alert("PC elige ✂️")
    }
    //COMBATE 
    if (Pc == jugador) {
        alert("Empate")
    } else if (jugador == 1 && Pc == 3) {
        alert("Ganaste")
        // le sumo un triunfo , cada vez que gane
        triunfos = triunfos + 1
    } else if (jugador == 2 && Pc == 1) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else if (jugador == 3 && Pc == 2) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else {
        alert("Perdedor jajajaja")
        // sumo a la maquina 
        perdidas = perdidas + 1
    }
}

// quiero saber cuantas veces gane y perdi 
alert("Ganaste " + triunfos + " veces. Perdiste" + perdidas + "veces.")
