const name = 'Silvana'
const idade = 48
const sexo = 'F'
const contribuicao = 23
const regra = idade + contribuicao

if  (sexo == 'F' )
    {
        if (contribuicao >=30 && regra >= 85)
        {
            console.log(`${name} você pode se aposentar \n`)
        }
        else
        {
            console.log(`${name} você ainda não pode se aposentar`)
        }
    }
else
    {
        if (contribuicao>= 35 && regra >= 95)
        {
            console.log(`${name} você pode se aposentar \n`) 
        }
        else
        {
            console.log(`${name} você ainda não pode se aposentar \n`)
        }
    }