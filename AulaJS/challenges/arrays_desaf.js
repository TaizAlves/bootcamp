const empresa = {
    nome: 'Rockseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        rua: 'Rua Guilherme Gembala',
        nr: 23
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua} e seu objetivo é  ${empresa.foco} \n`)

const tecnologias= [
    {
        nome: 'C++',
        especialidade: 'desktop'
    },
    {
        nome: 'Python',
        especialidade: 'dataScience'
    },
    {
        nome: 'JavaScript',
        especialidade: 'Web/mobile'
    }

]

const cadastro = [
    {
        nome: 'Taiz',
        idade: 32,
        tecnologia: [
            tecnologias[1].nome, 
            tecnologias[2].nome
        ],
        especialidade: tecnologias[1].especialidade,      
       
    },

    {
        nome: 'Mozi',
        idade: 38,
        especialidade: tecnologias[2].especialidade,
        tecnologia :[
            tecnologias[2].nome, tecnologias[0].nome
        ], 

    }

]

console.log(`O usuário ${cadastro[0].nome} tem ${cadastro[0].idade} e usa a tecnologia ${cadastro[0].tecnologia.join(' , ')}  com especialidade em ${cadastro[0].especialidade} \n`)
