const notificarBTN=document.querySelector('#notificar')
const verNotiBTN=document.querySelector('#verNotificacion')

notificarBTN.addEventListener('click',()=>{

    Notification
    .requestPermission()
    .then(resultado=>{
        console.log('el ressultado es:', resultado)
    })
})

verNotiBTN.addEventListener('click',()=>{
    if(Notification.permission==='granted'){
        const notiVentana= new  Notification('Aqui esta la notificacion',{
            icon:"img/edetecnica.png",
            body:'enviando notificacion'
        })

        notiVentana.onclick= function(){
            window.open('https://google.com')
        }
        
    }
})

 