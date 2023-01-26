var numero = document.getElementById('form')
var tabela = document.getElementById('tab')
var resultado = document.getElementById("resultado")
valores = []

function isNumero(numero){
    if (Number(numero) >= 1 && Number(numero) <=100){
        return true
    }
    else{
        return false
    }
}


function inLista(numero, lista){
    if (lista.indexOf(Number(numero)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){  
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        tab.appendChild(item)
    }
    else{
        alert('Por favor, digite um valor entre 1 e 100 e que ainda não foi incluído')
    }
    numero.value = ''
    numero.focus()

}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }
    else{
        maior = valores[0]
        menor = valores[0]
        soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }   
        media = soma/valores.length

        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo, temos ${valores.length} números cadastrados. </p>`
        resultado.innerHTML += `<p> O maior valor é ${maior} </p>`
        resultado.innerHTML += `<p> O menor valor é ${menor} </p>`
        resultado.innerHTML += `<p> A soma dos valores é ${soma} </p>`
        resultado.innerHTML += `<p> A média dos valores é ${media.toFixed(2)} </p>`


    }
}
