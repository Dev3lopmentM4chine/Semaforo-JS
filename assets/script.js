const img = document.getElementById("img")
const btn = document.getElementById('buttons')

const trafegoLuz = (event) => {
    // console.log(event.target.id)
    cores[event.target.id]();
}

btn.addEventListener('click', trafegoLuz)

const cores = {
    'Amarelo': () => img.src = './img/amarelo.png',
    'Verde': () => img.src = './img/verde.png',
    'Vermelho': () => img.src = './img/vermelho.png'
}