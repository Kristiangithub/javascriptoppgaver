{
    var a = 2
    let b = 3

    console.log(`var variabel fungerer på innsiden av scopet: ${a}`)
    console.log(`let variabel fungerer på innsiden av scopet: ${b}`)
}

console.log(`var variabel fungerer på utsiden av scopet: ${a}`)
//console.log(`let variabel fungerer  ikke på utsiden av scopet: ${b}`)

function myFunction() {
    let g = 6
    var gg= 7
    const ggg = 8
    var string = `var variabelen fungerer på innsiden av funksjonen: ${gg}`+
    `let variabelen fungerer på innsiden av funksjonen: ${g}`+
    `const variabelen fungerer på innsiden av funksjonen: ${ggg}`
    return string
}

let functionstring = myFunction()
console.log(functionstring)

let = carName = "Volvo"
console.log(`global variabel kan ble brukt her: ${carName}`)

function mycar() {
    console.log(`global variabler kan bli brukt på innsiden av function scopes: ${[carName]}`)
}

mycar.call()