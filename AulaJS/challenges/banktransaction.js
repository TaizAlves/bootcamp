const user = {
    name: 'Taiz',
    transactions : [],
    balance: 0,

}

function createTransaction(transaction){
    user.transactions.push(transaction)
     
    if (transaction.type === 'credit'){
        user.balance = user.balance + transaction.value
    }
    else{
        user.balance -= transaction.value
    }  
}

function getHigherTransactionByType(type){
    let higherValue = 0
    let higherTransaction

    for (let transaction of user.transactions){
        if(transaction.type == type  && transaction.value > higherValue){
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction
}


function getAverageTransactionValue(){
        let sum = 0
        for (let transaction of user.transactions){
            sum += transaction.value
        }
        return sum / user.transactions.length
}


function getTransactionsCount(){
    let i = {
        credit: 0,
        debit: 0,
    }

    for (let transaction of user.transactions){
        if (transaction.type == 'credit'){
            i.credit++
        }
        else{
            i.debit++
        }
    }
    return i
}


createTransaction ({ type: 'credit' , value:50})
createTransaction({ type: 'credit', value: 120 })
createTransaction({type: 'debit', value: 80})
createTransaction({type: 'debit', value: 30})

console.log(`The accurate balance account for '${user.name}' is $ ${user.balance}\n`)

console.log (getHigherTransactionByType('debit'))
console.log (getHigherTransactionByType('credit'))

console.log(`Average: ${getAverageTransactionValue()}`)

console.log(getTransactionsCount())



