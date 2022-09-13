// �	se o n�mero for par, escreva 'par' e o n�mero correspondente.
// �	se o n�mero for �mpar, escreva '�mpar' e o n�mero correspondente.
// �	se o n�mero for zero, escreva 'zero' e o n�mero correspondente.

console.log("Inicio do processamento.")

console.log("------------------------------")

let listaAlunos = ["Vania", "Jonatas", "Cynthia", "Danilo", "Sarah"];
//console.log(listaAlunos.length)

for (let index = 0; index < listaAlunos.length; index++) {
    //const element = array[index];
    console.log(index)
    if (index == 0) {console.log("zero localizado: " + listaAlunos[index])
         } 

        else if (index % 2 != 0) {
            console.log("numero impar localizado: " + listaAlunos[index]) 
         }
        else {
       console.log("numero par localizado: " + listaAlunos[index]) 
    }
    
}


console.log("Fim do processamento.")

console.log("------------------------------")