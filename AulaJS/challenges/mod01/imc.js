const name = 'Mozi'
const altura = 1.74
const peso = 80

const imc = peso / (altura*altura)

if (imc >= 30)
    {
        console.log(`${name}, seu imc é ${imc} e vc está acima do peso\n`)
    }
else
    {
        console.log(`${name}, seu imc é ${imc}. Vc não está acima do peso \n`)
    }

    