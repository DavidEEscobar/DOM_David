function CambiarParrafos(){
    let lista = document.getElementsByTagName("p")
    for(let i = 0; i < lista.length; i++){
        lista[i].firstChild.nodeValue = lista[i].firstChild.nodeValue + "."
    }
}