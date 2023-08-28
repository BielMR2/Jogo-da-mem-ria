const gallery = document.querySelector(".gallery")

const item = document.querySelector(".item")
const start = document.querySelector("#start")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const mona1 = document.querySelector("#mona1")
const mona2 = document.querySelector("#mona2")

const gira1 = document.querySelector("#gira1")
const gira2 = document.querySelector("#gira2")

let cardSelect = []

let player1 = true
let player2 = false


const textPoints1 = document.querySelector("#points1")
const textPoints2 = document.querySelector("#points2")

let points1 = 0
let points2 = 0

let xAttempts = 0

const firstCard = null;

let cards = []




start.addEventListener("click", startGame)

function startGame() {
    embaralharLista()
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
}



function virarCarta1() {
    let classList = this.classList
    this.classList.add("show")
    this.classList.remove("turned")
    cardSelect.push(1)


    cards.push(classList)
    

    verificar(classList, this, firstCard)
}

function virarCarta2() {
    let classList = this.classList
    this.classList.add("show")
    this.classList.remove("turned")
    cardSelect.push(2)


    cards.push(classList)
    

    verificar(classList, this, firstCard)
}

function virarCarta3() {
    let classList = this.classList
    this.classList.add("show")
    this.classList.remove("turned")
    cardSelect.push(3)


    cards.push(classList)
    

    verificar(classList, this, firstCard)
}

function virarCarta4() {
    let classList = this.classList
    this.classList.add("show")
    this.classList.remove("turned")
    cardSelect.push(4)


    cards.push(classList)
    

    verificar(classList, this, firstCard)
}

function virarCarta5() {
    let classList = this.classList
    this.classList.add("show")
    this.classList.remove("turned")
    cardSelect.push(5)


    cards.push(classList)
    

    verificar(classList, this, firstCard)
}

function virarCarta6() {
    let classList = this.classList
    this.classList.add("show")
    this.classList.remove("turned")
    cardSelect.push(6)


    cards.push(classList)
    

    verificar(classList, this, firstCard)
}

mona1.addEventListener("click", virarCarta1)

mona2.addEventListener("click", virarCarta1)

gira1.addEventListener("click", virarCarta2)

gira2.addEventListener("click", virarCarta2)

grito1.addEventListener("click", virarCarta3)

grito2.addEventListener("click", virarCarta3)

night1.addEventListener("click", virarCarta4)

night2.addEventListener("click", virarCarta4)

aba1.addEventListener("click", virarCarta5)

aba2.addEventListener("click", virarCarta5)

setik1.addEventListener("click", virarCarta6)

setik2.addEventListener("click", virarCarta6)


function verificar(classList, card, firstCard) {
    xAttempts++

    if (cardSelect.length == 2) {
        if (cardSelect[0] == cardSelect[1]) {
            console.log("marcou ponto")

            classList.add("hit")
            classList.remove("turned")
            classList.remove("show")

            cards[0].add("hit")
            cards[0].remove("turned")
            cards[0].remove("show")

            console.log(cards)

            if (player1 == true) {
                points1++
                textPoints1.innerText = points1
                classList.add("blue")
                cards[0].add("blue")
            } else if (player2 == true) {
                points2++
                textPoints2.innerText = points2
                classList.add("red")
                cards[0].add("red")
            } else {
            }

            cardSelect = []
            firstCard = []
            cards = []
        }
        else {
            if (player1 == true) {
                textPoints1.innerText = points1

                player1 = false
                player2 = true
            } else if (player2 == true) {
                textPoints2.innerText = points2

                player2 = false
                player1 = true
            }

            setTimeout(() => {
            console.log("errou")

            classList.add("turned")
            classList.remove("show")

            cards[0].add("turned")
            cards[0].remove("show")


            cardSelect = []
            firstCard = []
            cards = []

            }, 3000);

            console.log(cards)
        }
    }

}




function embaralharLista() {
    for (var i = gallery.children.length; i >= 0; i--) {
        gallery.appendChild(gallery.children[Math.random() * i | 0]);
    }
}
