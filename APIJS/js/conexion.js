window.addEventListener('online',actualizarStatus)
window.addEventListener('offline',actualizarStatus)

//console.log(navigator.onLine)

function actualizarStatus(){
    if(navigator.onLine==true){
        console.log('tienes conexion')
    }
}