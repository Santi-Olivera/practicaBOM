console.log (window)

//window.confirm(`Queres seguir realizando otra operacion`)

function saludar (){
    document.write(`<p>Hola!!!</p>`)
}
function saludarPersona (nombre){
    document.write(`<p>Hola ${nombre} 😁 </p>`)
}


function saludarMundo(){
    document.write(`<p>Hola mundo 🌍</p>`)
    if (contador === 10) {
        //Detener el setInterval
        clearInterval(idInterval)
    }
    contador++; // contador= contador + 1
}



//setTimeout(saludar, 3000)
setTimeout(()=> document.write(`<p>Hola 😁 </p>`), 4000)
setTimeout(()=> saludarPersona(`Tomas`), 2000)


//setinterval: ejecuta una funcion cada cierto tiempo en milisengundos
let contador=1;
const idInterval= setInterval(saludarMundo, 2000)
