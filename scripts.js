
// Seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")


// Seleciona os elemento da lista.
const expenseList = document.querySelector("ul")


// Captura o evento de input para formatar o valor.
amount.addEventListener("input", (event) => {

    // Retiro as letras do input.
    value = amount.value.replace(/\D+/g, "")
    
    // Transformo o value em Number.
    value = Number(value) / 100
    
    // Relaciono o input com a função de formatação.
    amount.value = formatCurrencyBRL(value)



})

// Função que formata para BRL (moeda brasileira).
function formatCurrencyBRL (value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency:"BRL",
    })
    
    // Retorna o value formatado para dentro do input.
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


    


    console.log(newExpense)
    // Chama a função que irá adicionar o item na lista.
    expenseAdd(newExpense)  // Adiciona a nova despesa chamando a função

   
    

})



function expenseAdd(newExpense) {


try {
        
    // Criando elemento para adicionar na lista.
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")
    
    // Criando o icone da categoria.
    const iconExpense = document.createElement("img")
    iconExpense.setAttribute("src", `img/${newExpense.category_id}.svg`)
    iconExpense.setAttribute("alt", newExpense.category_name)

    // Adiciona as informações no item.
    expenseItem.append(iconExpense)
    

    // Adiciona o item na lista.
    expenseList.append(expenseItem)

    
    // Criando a info da despesa
    const expenseInfo = document.createElement("div")
    expenseInfo.classList.add("expense-info")
   


    // Criando a categoria da despesa e adicionando
    const categoryInfo = document.createElement("strong")
    categoryInfo.classList.add("expense-info")
    categoryInfo.textContent = newExpense.expense_name
    expenseInfo.append(categoryInfo)
    
    

    // Criando o conteúdo da despesa
    const expenseContent = document.createElement("span")
    expenseContent.classList.add("expense-info")
    expenseContent.textContent = newExpense.category_name
    expenseInfo.append(expenseContent)
    expenseItem.append(expenseInfo)

    


} catch (error) {
        alert("Não foi possivel atualizar a lista")
        console.log(error)
        
    }

    

    



}













    
    
   









    

    


    





