let sayHelloWorld = "Hello World"

function sayHello (){
    alert(sayHelloWorld)
}

sayHello()

//--------------------

let a = 1
let b = 2

let soma = a + b

alert(" o resultado é "+ soma)

//--------------------

let numberIs = "23"

function verify() {
    if(typeof numberIs == 'number'){
        alert("É um número")
    }else {
        alert("Não é um número")
    }
}

verify()

//--------------------

let nameIs = 23

function verifyString() {
    if(typeof nameIs == 'string'){
        alert("É uma String")
    }else {
        alert("Não é uma String")
    }
}

verifyString()

//--------------------

let numberIsBoo = true

function verifyIsBoo() {
    if(typeof numberIsBoo == 'boolean'){
        alert("É um booleano")
    }else {
        alert("Não é um booleano")
    }
}

verifyIsBoo()

//--------------------

let subNumber1 = 10
let subNumber2 = 5

let sub = subNumber1 - subNumber2

alert(" o resultado é "+ sub)

//--------------------


let multNumber1 = 10
let multNumber2 = 5

let mult = multNumber1 * multNumber2

alert(" o resultado é "+ mult)

//--------------------

let divNumber1 = 10
let divNumber2 = 5

let div = divNumber1 / divNumber2

alert(" o resultado é "+ div)

//--------------------

let verifyNumberIsEven = 1

function verifyIsNumberEven() {
    if(verifyNumberIsEven % 2 == 0){
        alert("É um número par")
    }else {
        alert("Não é um número par")
    }
}

verifyIsNumberEven()

//--------------------

let verifyNumberIsOdd = 1

function verifyIsNumberOdd() {
    if(verifyNumberIsOdd % 2 != 0){
        alert("É um número ímpar")
    }else {
        alert("Não é um número ímpar")
    }
}

verifyIsNumberOdd()

