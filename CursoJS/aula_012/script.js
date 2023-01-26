// variáveis
function carregar () {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora  =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12){
        imagem.src = 'assets/amanhecer.png'
        document.body.style.background = '#e3bd1f'
    }
    else if (hora >=12 && hora < 18){
        imagem.src = 'assets/entardecer.png'
        document.body.style.background = '#e1761b'
    }
    else{
        imagem.src = 'assets/anoitecer.png'
        document.body.style.background = '#2c4564'
    }
}