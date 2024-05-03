function ProximoParrafo(){
    let puntero1 = document.getElementById('parrafos')
    let puntero2 = puntero1.firstElementChild
    while (puntero2 != null) {
        alert(puntero2.firstChild.nodeValue)
        puntero2 = puntero2.nextElementSibling
    }
}