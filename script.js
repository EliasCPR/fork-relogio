function carregar() {


    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('noite')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()


    msg.innerHTML = `Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos..`
    if (hora >= 0 && hora < 12) {   
       img.src = './imagens/manha.jpg'
       document.getElementById("corpo").style.background =  "url('./imagens/manha.jpg')"
    }   else if(hora >= 12 && hora < 18) {
        //BOA TARDE
        document.getElementById("corpo").style.background =  "url('./imagens/tarde.jpg')"
        img.src = './imagens/tarde.jpg'
    }   else{
        //BOA NOITE
        img.src = './imagens/noite.jpg'  
        document.getElementById("corpo").style.background =  "url('./imagens/noite.jpg')"  
    }


}


