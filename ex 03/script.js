let listaNumeros = [];
let contador = 0;

for (let i = 0; i < 10; i++) {
    listaNumeros[i] = Number(prompt(`Insira o ${i + 1}° número:`));

}
let numeroBuscado = Number(prompt(`Digite o número que deseja verificar no vetor:`));

for (let i = 0; i < 10; i++) {
    contador = contador + 1;

}

alert("Vetor digitado: " + listaNumeros);
alert("O número " + numeroBuscado + " aparece " + contador + " vez(es) no vetor.");