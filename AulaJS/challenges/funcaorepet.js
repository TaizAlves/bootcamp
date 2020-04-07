const usuarios = [
    {
        nome: 'Carlos',
        tecnologias: [
            'CSS', 'HTML'
        ]
    },
    {
        nome: 'Jasmine',
        tecnologias: [
            'CNode.js', 'JavaScript'
        ]
    },
    {
        nome: 'Taiz',
        tecnologias: [
            'JavaScript', 'CSS'
        ]
    }
]

for (let user of usuarios) {
    console.log(`Usuário ${user.nome} trabalha com ${user.tecnologias.join(', ')}. `)
}

function checktec(user){
    for (let tec of user.tecnologias){
        if (tec == 'CSS'){
            return true
        } 
        else{
            return false
        }
    }
}

for (let i = 0; i < usuarios.length; i++){
    const skillCSS = checktec(usuarios[i])
    if (skillCSS){
        console.log(`MATH!  ${usuarios[i].nome} trabalha com CSS`)
    }
}
