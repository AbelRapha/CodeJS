function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] preencha todos os campos para que seja efetuado a contagem')
    }
    else{
        resultado = document.getElementById('resultado')
        resultado.innerHTML = 'contando...'
        
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f){
            if(p == 0){
                alert('Passo inválido')
            }
            else{ 
            for (let c = i; c <= f ; c+=p){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}`
        }
        }
        else{
            if(p == 0){
                alert('Passo inválido')
            }
            else{ 
            for (let c = i; c >= f ; c-=p){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}`
            }
        }
        
    }

}