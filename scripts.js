
// Seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")


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
        category_name: category.options[category.selectIndex].text,  // Nome visível da categoria
        amount_value: amount.value,  // Valor da despesa
        created_at : new Date(),  // Data e hora atuais
    }

   console.log(newExpense)
    

})








    
    
   









    

    


    





