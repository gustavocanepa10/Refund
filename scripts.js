
// Seleciona os elementos do formulário
const amount = document.getElementById("amount")


// Captura o evento de input para formatar o valor.
amount.addEventListener("input", (event) => {
    
    // Obtém o valor atual do input e remove os caracteres não númericos.
    let value = amount.value.replace(/\D+/g,"" )

    // Transformar o valor em centavos (exemplo 150/100 = 1.5)
    value = Number(value) / 100

    // Atualiza o valor do input.
    amount.value = formatCurrencyBRL(value)
    
})




function formatCurrencyBRL (value) {
    // Formata o valor para a moeda brasileira (BRL).
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return value


}






    

    


    





