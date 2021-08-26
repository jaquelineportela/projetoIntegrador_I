const transactionsUl = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus ')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#form')
const inputTransactionName = document.querySelector('#text')
const inputTransactionAmount = document.querySelector('amount')

const dummyTransactions = [
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
    li.innerHTML = `
    ${transaction.name} <span>${operator} R$ ${amountWithoutOperator} </span><button class "delete-btn"
    `
    transactionsUl.append(li)
}
const updateBalanceValues = () => {
    const transactionsAmounts = dummyTransactions
        .map(transaction => transaction.amount)
    const total = transactionsAmounts
        .reduce((accumulator, transaction) => accumulator + transaction, 0).toFixed(2)
    const income = transactionsAmounts
        .filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2)
    const expense = Math.abs(transactionsAmounts)
        .filter(value => value < 0)
        .reduce((accumalator, value) => accumalator + value, 0)
        .toFixed(2)
    
    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`  
    expenseDisplay.textContent = `R$ ${expense}`
}

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}
init()

const generateID = () => Math.round(Math.random() * 1000)

form.addEventListener('submit', event => {
    event.preventDefault()

    const transactionName = inputTransactionName.value.trim()
    const transactionAmount = inputTransactionAmount.value.trim()

    if(transactionName === '' || transactionAmount === '') {
        alert('Por favor, preencha os campos de nome e valor da transação')
        return
    }
    const transaction = { 
        id: generateID(),
        name: transactionName,
        amount: transactionAmount
    }
    dummyTransactions.push(transaction)
    
    init()



})