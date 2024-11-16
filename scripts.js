
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


    


    // console.log(newExpense)
    // Chama a função que irá adicionar o item na lista.
    /*
    No código, o parâmetro newExpense da função expenseAdd serve para receber o objeto da nova despesa que foi criado no evento de submit do formulário. 
    Esse objeto contém todas as informações da despesa que o usuário inseriu no formulário,
    O papel do newExpense na função expenseAdd é:
    Transportar os dados da despesa para dentro da função.
    Permitir que a função use esses dados para criar e adicionar um novo item na lista de despesas no DOM.*/
    expenseAdd(newExpense)  // Adiciona a nova despesa chamando a função

   
    

})



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

    
    



    // Cria o amout.
    const expenseAmount = document.createElement("span")
    expenseAmount.classList.add("expense-amount")
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount_value.
    toUpperCase().replace("R$","")}`


    // Cria o icone de remover.
    const removeIcon= document.createElement("img")
    removeIcon.classList.add("remove-icon")
    removeIcon.setAttribute("src", "img/remove.svg")
    removeIcon.setAttribute("alt","remover")
    
    
    expenseItem.append(expenseIcon,expenseDiv,expenseAmount,removeIcon)
    

    

    // Adicionando os itens na lista
    expenseList.append(expenseItem)
    console.log(expenseList)
    
    

    

    

    

    
    

    
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













    
    
   









    

    


    





