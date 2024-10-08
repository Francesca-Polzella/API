const abrirBTN=document.querySelector('#abrir-pantalla-completa')
const cerrarBTN=document.querySelector('#salir-pantalla-completa')

abrirBTN.addEventListener('click',pantallaCompleta)
cerrarBTN.addEventListener('click',salirPantalla)

function pantallaCompleta(){
    document.documentElement.requestFullscreen()

}

function salirPantalla(){
    document.exitFullscreen()
}
