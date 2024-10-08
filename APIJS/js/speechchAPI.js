const microfono =document.querySelector('#microfono')
const salida= document.querySelector('#salida')


microfono.addEventListener('click',ejecutarSpeechAPI)

function ejecutarSpeechAPI(){
    const speechrecognition =webkitSpeechRecognition
    const recognition= new speechrecognition()

    /*
frases 
-arrancar ,ejecutar reconocimientos
-comenzar y escuchar
-usuario termine de hablar 
-mostrar el usuario (texto)
*/

recognition.start()
recognition.onstart=function(){
    //comience a escuchar
    salida.classList.add('mostrar')
}
salida.textContent='Escuchando...'

recognition.onspeechend= function(){
    salida.textContent='Se dejo de escuchar'
    recognition.stop()
}

recognition.onresult=function(e){
    console.log(e.results)
}

}


