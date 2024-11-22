
// Seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")


// Seleciona os elemento da lista.
const expenseList = document.querySelector("ul")
const expensesQuantity = document.querySelector("aside header p span")


// Captura o evento de input para formatar o valor.
amount.addEventListener("input", (event) => {
    event.preventDefault()

    // Retiro as letras do input.
    value = amount.value.replace(/\D+/g, "") 
    
    // Transformo o value em Number.
    value = Number(value) / 100
    
    // Atualizo o valor do input
    // Aqui o valor é retornado e com isso o amount.value já é atualizado formatado.
    amount.value = formatCurrencyBRL(value)



})




// Função que formata para BRL (moeda brasileira).
function formatCurrencyBRL (value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency:"BRL",
    })
    
    // Retorna o value formatado para dentro do input.
    // Retorna para uso fora da função.
    return value

}

// Captura o evento de submit no formulário para obter os valores
form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    // Cria um objeto da nova despesa.
    const newExpense = {
        id: new Date().getTime(),  // Cria um ID único
        expense_name: expense.value,  // Valor do nome da despesa
        category_id: category.value,  // ID da categoria (value selecionado)
        category_name: category.options[category.selectedIndex].text,  // Nome visível da categoria
        amount_value: amount.value,  // Valor da despesa
        created_at : new Date(),  // Data e hora atuais
    
    }


    


   
    
    expenseAdd(newExpense);
    // Aqui eu passo o "newExpense", que é um ARGUMENTO, para o PARÂMETRO definido na função "expenseAdd".
    
    
   
    

})


// Adiciona um novo item na lista.
function expenseAdd(newExpense) {

try {
        
    // Criando elemento para adicionar na lista.
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")

    

    
    
    // Criando o icone da categoria.
    const expenseIcon = document.createElement("img")
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
    // Icone adicionado
    
    
    

    // Criando a div da despesa.
    const expenseDiv = document.createElement("div")
    expenseDiv.classList.add("expense-info")
    

    
    
    

    // Criando o strong que contém a categoria da despesa.
    const expenseContent = document.createElement("strong")
    expenseContent.textContent = newExpense.expense_name
    expenseContent.classList.add("expense-info")
    expenseDiv.append(expenseContent)
    



    // Criando o span que contém as informações da despesa.
    const expenseCategory = document.createElement("span")
    expenseCategory.textContent = newExpense.category_name
    expenseCategory.classList.add("expense-info")
    expenseDiv.append(expenseCategory)

    
    



    // Cria o valor da despesa.
    const expenseAmount = document.createElement("span")
    expenseAmount.classList.add("expense-amount")
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount_value.
    toUpperCase().replace("R$","")}`


    // Cria o icone de remover.
    const removeIcon = document.createElement("img")
    removeIcon.classList.add("remove-icon")
    removeIcon.setAttribute("src", "img/remove.svg")
    removeIcon.setAttribute("alt", "remover")
    
    
    expenseItem.append(expenseIcon,expenseDiv,expenseAmount,removeIcon)
    

    

    // Adicionando os itens na lista
    expenseList.append(expenseItem)
    console.log(expenseList)

    // Atualiza os totais
    updateTotals()
    
    

    

    

    

    
    

    
    // Criando a info da despesa
   
   


    // Criando a categoria da despesa e adicionando
    
    // Adiciono o nome da categoria dentro da div
    
    
    

    // Criando o conteúdo da despesa
    
    // Adiciono o conteúdo (span) da despesa dentro da div (expenseInfo)
    
    // Adiciono a div dentro da nova despesa(li)
    

    


} catch (error) {
        alert("Não foi possivel atualizar a lista")
        console.log(error)
        
    }

    

    



}


// Atualiza os totais
function updateTotals() {
    try {
        // Recupera todos os itens (li) da lista (ul)
        const items = expenseList.children // children pega os filhos da lista
        console.log(items) // aqui aparece os filhos
        
    
    
    
    
    // Atualiza a quantidade de itens da lista.
    expensesQuantity.textContent = `${items.length} ${items.length >  1
        ? "despesas" : "despesa"}`




    // Variavel para incrementar o total.
    let total = 0

    // Percorre cada item (li) da lista (ul).
    for (let item = 0 ; item < items.length ; item++) {
        const itemAmount = items[item].querySelector(".expense-amount")


        console.log(itemAmount)

    }


    
    
    } catch (error) {
        console.log(error)
        alert("Não foi possivel os totais")
        
    }
}

















    
    
   









    

    


    





