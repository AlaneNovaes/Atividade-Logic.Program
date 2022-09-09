//•	Se a peça possuir um peso superior a 100gramas, pode cadastrar.
// • Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
// •Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.


const listaDePecas = ['Farol', 'Re', 'Volante']
console.log("------------------------------")
console.log("Inicio do processamento.")

console.log("------------------------------")

let pesoPeca = 115
if (pesoPeca > 100) {console.log("Peso ok! Pode cadastrar a peca.")}
else {console.log("Peca recusada.")}

console.log("------------------------------")

let qtdePeca = 11
if (qtdePeca > 10) {console.log("Ultrapassou o limite da caixa.")}
else {console.log("caixa ok!")}

console.log("------------------------------")

for (let index = 0; index < listaDePecas.length; index++) {
        const nomePeca = listaDePecas[index];
            if (nomePeca.length < 3) {console.log("Erro no nome da peca.")}
            else {console.log("Nome da peca ok.")}

}


console.log("------------------------------")

console.log("Fim do processamento.")
