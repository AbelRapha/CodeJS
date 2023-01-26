// variáveis
function verificar () {
    var resultado = window.document.querySelector('div#resultado')
    var data_nascimento = window.document.getElementById('txtano')
    var data = new Date()
    var ano_atual = data.getFullYear()
    if (data_nascimento.value.length == 0 || Number(data_nascimento.value) > ano_atual){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }
    else {
        var idade = ano_atual - Number(data_nascimento.value)
        var sexo = window.document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'assets/homem_bebe.jpg')
            }
            else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'assets/homem_jovem.jpg')
            }
            else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'assets/homem_adulto.jpg')
            }
            else{
                // idoso
                img.setAttribute('src', 'assets/homem_idoso.jpg')
            }

        }
        else{
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'assets/mulher_bebe.jpg')
            }
            else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'assets/mulher_jovem.jpg')
            }
            else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'assets/mulher_adulta.jpg')
            }
            else{
                // idoso
                img.setAttribute('src', 'assets/mulher_idosa.jpg')
            }
        }

        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.append(img)
    }
        

}