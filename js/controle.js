const transactionUl = document.querySelector('#transactions')

const DummyTransaction = [
    { id: 1, name:'Produto1', amount: -20},
    { id: 2, name:'salário2', amount: 300},
    { id: 3, name:'Produto3', amount: -10},
    { id: 4, name:'produto4', amount: 150},
]

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = '
    ${transaction.name} <span>${operator} R$ ${amountWithoutOperator} </span><button class "delete-btn"
    '
    transactionUl.append(li)

    const updateBalanceValeus = () =>{
        const transactionAmounts = DummyTransaction.map(transaction.amount)
        const tatol = transactionAmounts.reduce((accumulador, transaction) => accumulador + transaction, 0)
        console.log(transactionAmounts)
    }
} 
 const init = () =>{
     DummyTransaction.forEach(addTransactionIntoDOM)
 }
    init()