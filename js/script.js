let carrossel = document.querySelectorAll('.imagem')
let pro = document.getElementById('botao-pro')
let ant = document.getElementById('botao-ant')

let count = carrossel.length
let ativo = 0

pro.onclick = () => {
    let ativoOld = document.querySelector('.ativo')
    ativoOld.classList.remove('ativo')

    ativo = ativo >= count -1 ? 0 : ativo + 1
    carrossel[ativo].classList.add('ativo')
}

ant.onclick = () => {
    let ativoOld = document.querySelector('.ativo')
    ativoOld.classList.remove('ativo')

    ativo = ativo <= 0 ? count -1 : ativo - 1
    carrossel[ativo].classList.add('ativo')
}