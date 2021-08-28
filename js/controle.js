const transactionsUl = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus ')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#form')
const inputTransactionName = document.querySelector('#text')
const inputTransactionAmount = document.querySelector('amount')

<<<<<<< HEAD

const localStorageTransactions =  JSON.parce(localStorage
.getItem(`transactions`))
let transactions = localStorage
.getItem (`transactions`) !== null ? localStorageTransactions : []


const removeTransaction = ID => {
  transactions  = transactions .filter(transaction =>
    transaction.id !== ID)
   updateLocalStorage()
   init()
}


const addTransactionIntoDOM = ({ amount, name , id })=> {
    const operator = amount < 0 ? '-' : '+'
    const CSSClass = amount < 0 ? 'minus' : 'plus'
=======
const dummyTransactions = [
    { id: 1, name:'Produto1', amount: -20},
    { id: 2, name:'salário2', amount: 300},
    { id: 3, name:'Produto3', amount: -10},
    { id: 4, name:'produto4', amount: 150},
]

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
>>>>>>> b1dfc7526afb0be250f7280471c8cef730ad89f1
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = `
    ${transaction.name} 
    <span>${operator} R$ ${amountWithoutOperator} </span>
    <button class "delete-btn" onClick="removeTransaction(${transaction.id})">x</button>
    `
    transactionsUl.append(li)
}

const getExpenses = transactionsAmounts => Math.abs(transactionsAmounts)
.filter(value => value < 0)
.reduce((accumalator, value) => accumalator + value, 0)
.toFixed(2)

const getIncome = transactionsAmounts =>transactionsAmounts
    .filter(value => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2)

const getTotal = transactionsAmounts => transactionsAmounts
.reduce((accumulator, transaction) => accumulator + transaction, 0).toFixed(2)
. toFixed(2)

const updateBalanceValues = () => {
    const transactionsAmounts = transactions.map(({ amount}) => amount)

    const total = getTotal(transactionsAmounts)
    const income = getIncome(transactionsAmounts)
    const expense = getExpenses(transactionsAmounts)
    
    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`  
    expenseDisplay.textContent = `R$ ${expense}`
}

const init = () => {
    transactions .forEach(addTransactionIntoDOM)
    updateBalanceValues()
}
init()

const updateLocalStorage = () => {
    localStorage.setItem(`transactions`,JSON.stringify(transactions))
}

const generateID = () => Math.round(Math.random() * 1000)

const addToTransactionsArray = (transactionName, transactionAmount) => {
    transactions.push({ 
        id: generateID(),
        name: transactionName,
        amount: +transactionAmount
    })
}

const cleanInputs = () => {
    inputTransactionName.value = `` 
    inputTransactionAmount.value = `` 
}

const hanleFormSubmit =

form.addEventListener('submit', event => {
    event.preventDefault()

    const transactionName = inputTransactionName.value.trim()
    const transactionAmount = inputTransactionAmount.value.trim()

    const isSomeInputEmpty = transactionName === `` || transactionAmount === `` 

    if(isSomeInputEmpty) {
        alert('Por favor, preencha os campos de nome e valor da transação')
        return
    }
    
    addToTransactionsArray(transactionName,transactionAmount)
    init()
    updateLocalStorage()
    cleanInputs()  
}
 
 form.addEventListener(`submit`, handleFormSubmit)