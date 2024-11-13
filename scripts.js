
// Seleciona os elementos do formulário
const amount = document.getElementById("amount")


// Captura o evento de input para formatar o valor.
amount.addEventListener("input", (event) => {
    
    // Obtém o valor atual do input e remove os caracteres não númericos.
    value = amount.value.replace(/\D+/g, "")
    // Aqui o value está em string, é necessário passa-lo para numero.
    

    /* Transforma o valor pra númerico e em seguida para centavos 
    (exemplo 150/100 = 1.5)*/
    value = Number(value) / 100
  
    

    // Atualiza o valor do input.
    amount.value = formatCurrencyBRL(value)
    
    
    
})




function formatCurrencyBRL (value) {
    // Formata o valor no padrão BRL (Real Brasileiro).
    value = value.toLocaleSting("pt-BR", {
        style: "currency",
        currency: "BRL,"
    
    })
    
    // Aqui eu envio o valor já formatado para dentro do amount.value
    return value


}






    

    


    





