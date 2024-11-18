console.log (window)

//window.confirm(`Queres seguir realizando otra operacion`)

function saludar (){
    document.write(`<p>Hola!!!</p>`)
}
function saludarPersona (nombre){
    document.write(`<p>Hola ${nombre} 😁 </p>`)
}



//setTimeout(saludar, 3000)
setTimeout(()=> document.write(`<p>Hola 😁 </p>`), 4000)
setTimeout(()=> saludarPersona(`Tomas`), 2000)