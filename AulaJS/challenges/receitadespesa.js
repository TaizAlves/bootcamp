const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

/*for (user of usuarios){
    console.log(`${user.nome} , receita ${user.receitas} e despesas ${user.despesas}`)
}*/

function addnum(num){
    let soma = 0

    for ( let nr of num){
        soma += nr
    }

    return soma
    }


function calcsaldo(receitas,despesas){
    const somareceita = addnum(receitas)
    const somadespesa = addnum(despesas)

    return somareceita - somadespesa
}

  
for (let user of usuarios){
    const saldo = calcsaldo(user.receitas, user.despesas)
    //console.log(`${saldo} por ${user.nome}`)
    if (saldo >0) {
        console.log(`${user.nome} tem saldo POSITIVO de ${saldo}`)
    }
    else{
        console.log(`${user.nome} tem saldo NEGATIVO de ${saldo}`)
    }
}
