console.log('veikia')

//Uzduotis is skaidriu
const x = 50
const y = 10
const suma = x + y
console.log(suma)

const skirtumas = x - y
console.log(skirtumas)

const daugyba = x * y
console.log(daugyba)

const dalyba = x / y
console.log(dalyba)

//Uzduotis EASY
// let answer = prompt("Iveskite pirma skaiciu:")
// let answer2 = prompt("Iveskite antra skaiciu")

// console.log(answer.toString())
// console.log(answer2.toString())

// const pliusas = function add(answer, answer2) {
//     return answer + answer2
// }

// document.getElementsByName("").innerHTML=

// console.log(pliusas)
// alert("Suma: $[pliusas]")

let answer = prompt("Iveskite pirma skaiciu:")
let answer2 = prompt("Iveskite antra skaiciu")

// console.log(answer.toString())
// console.log(answer2.toString())

const x1 = answer.toString()
const y1 = answer2.toString()
const suma1 = Number(x1) + Number(y1)
console.log(suma1)

//Uzduotis MEDIUM/HARD
const name1 = prompt("Enter your name:")
console.log(name1)
const first = prompt("First value:")
const second = prompt("Enter second value:")
console.log(first + " and " + second)
const operator = prompt("Choose operator: +, -, * or /:")
if (operator==="+") {
    alert(z = Number(first) + Number(second))
} if (operator==="-") {
    alert(z = Number(first) - Number(second))
} if (operator==="*") {
    alert(z = Number(first) * Number(second))
} if (operator==="/") {
    alert(z = Number(first) / Number(second))
}

document.body.innerHTML = name1 + " (" + first + operator + second + "=" + z + ")"