function CambiarParrafos(){
    let objeto = document.getElementById("Bloque2")
    let lista = objeto.getElementsByTagName("p")
    for(let elemento of lista){
        elemento.firstChild.nodeValue = elemento.firstChild.nodeValue + "."
    }
}