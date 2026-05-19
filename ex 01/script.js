let numeros = [];
let somaPares = 0;

for (let i = 0; i < 10; i++){
    numeros[i] = Number(prompt(`Insira o ${i}° número:`));

}


for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0){
        somaPares = somaPares + numeros[i];
    }
}

alert("A soma dos números pares é: " + somaPares);