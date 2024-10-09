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
      //console.log(e.results)
      var transcript = e. results [0][0].transcript
      var confidence = e.results[0][0].confidence

      const sppech = document.createElement('p')
      sppech.innerHTML= `Lo que se grabo: ${transcript}`

      const confianza =document.createElement('p')
      confianza.innerHTML= `Confianza ${parseInt(confidence*100)}%`

      salida.appendChild(sppech)
      salida.appendChild(confianza)

    }

}


