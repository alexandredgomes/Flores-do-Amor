let carrossel = document.querySelectorAll('.imagem')
let pro = document.getElementById('botao-pro')
let ant = document.getElementById('botao-ant')

let indicador = document.querySelector('.indicadores')
let dots = indicador.querySelectorAll('ul li')

let count = carrossel.length
let ativo = 0

pro.onclick = () => {
    let ativoOld = document.querySelector('.ativo')
    ativoOld.classList.remove('ativo')

    ativo = ativo >= count -1 ? 0 : ativo + 1
    carrossel[ativo].classList.add('ativo')

    let dotsVelho = indicador.querySelector('ul li.ativo')
    dotsVelho.classList.remove('ativo')
    let dots = indicador.querySelectorAll('ul li')
    dots[ativo].classList.add('ativo')

    indicador.querySelector('.numero').innerHTML = + (ativo + 1)
}

ant.onclick = () => {
    let ativoOld = document.querySelector('.ativo')
    ativoOld.classList.remove('ativo')

    ativo = ativo <= 0 ? count -1 : ativo - 1
    carrossel[ativo].classList.add('ativo')

    let dotsVelho = indicador.querySelector('ul li.ativo')
    dotsVelho.classList.remove('ativo')
    let dots = indicador.querySelectorAll('ul li')
    dots[ativo].classList.add('ativo')

    indicador.querySelector('.numero').innerHTML = + (ativo + 1)
}