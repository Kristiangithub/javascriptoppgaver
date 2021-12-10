let nr1 = 3
let nr2 = 6
function pluss() {
    console.log(`resultatet av nr1 pluss nr2: ${nr1+nr2}`)
}

function minus() {
    console.log(`resultatet av nr1 minus nr2: ${nr1-nr2}`)
}

function gange() {
    console.log(`resultatet av nr1 gange nr2: ${nr1*nr2}`)
}

function deling() {
    console.log(`resultatet av nr1 delt på nr2: ${nr1/nr2}`)
}

pluss.call()
minus.call()
gange.call()
deling.call()



