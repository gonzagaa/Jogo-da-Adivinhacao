//Variaveis
const randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let xAttempts = 1

//funções callback
function handleTryClick(event) {
    event.preventDefault() //Tradução = não faça o padrão! (não envie o formulario)

    const inputNumber = document.querySelector("#inputNumber")
    console.log(inputNumber.value)

    if(Number(inputNumber.value) == randomNumber)  {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document
        .querySelector(".screen2 h2")
        .innerHTML = `Você acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")

    xAttempts = 1
}

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)