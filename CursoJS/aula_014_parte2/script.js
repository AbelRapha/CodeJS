function calcular(){
    let numero = Number(document.getElementById('form').value)
    resultado = document.getElementById('seltab')

    for (let c = 0; c <=10; c++){
        let item =  document.createElement('option')
        item.text = `${numero} x ${c} = ${numero*c}`
        resultado.appendChild(item)
    }

}