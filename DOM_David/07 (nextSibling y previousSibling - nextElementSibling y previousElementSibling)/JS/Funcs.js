function ProximoParrafo(){
    let puntero = document.getElementById("parrafo1")
    while(puntero != null){
        if(puntero.nodeType == Node.ELEMENT_NODE){
            alert(puntero.childNodes[0].nodeValue)
        }
        puntero = puntero.nextSibling
    }
}