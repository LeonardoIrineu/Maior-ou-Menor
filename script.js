function numero() {
let n1 = document.getElementById('numero1')
let n2 = document.getElementById('numero2')
let n3 = Number(n1.value)
let n4 = Number(n2.value)
let resultado = document.getElementById('resultado')
let res = document.querySelector('#res')
let res1 = document.querySelector('#res1')

    if (n3 > n4) {        
        resultado.innerHTML = `\u{2705}${n3} é maior que ${n4}\u{2705}`
    } if (n4 > n3) {
        resultado.innerHTML = `\u{2705}${n4} é maior que ${n3}\u{2705}`
    } if (n3 == n4) {
        resultado.innerHTML = `\u{2705}${n3} é igual a ${n4}\u{2705}`
    } if (n3 % 2 === 0) {
        res.innerHTML = `${n3} é Par`
    } else if (n3 % 2 !== 0){
        res.innerHTML = `${n3} é Impar`
    } if (n4 % 2 === 0) {
        res1.innerHTML = `${n4} é Par`
    } else if (n4 % 2 !== 0) {
        res1.innerHTML = `${n4} é Impar`
    }
}

