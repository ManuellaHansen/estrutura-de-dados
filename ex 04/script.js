let vetorOriginal = [];
let vetorSemDuplicatas = [];
let tamanhoNovoVetor = 0;

for (let i = 0; i < 10; i++) {
    vetorOriginal[i] = Number(prompt(`Insira o ${i + 1}° número:`));
}

for (let i = 0; i < 10; i++) {
    let jaExiste = false;
    
    for (let j = 0; j < tamanhoNovoVetor; j++) {
        if (vetorOriginal[i] === vetorSemDuplicatas[j]) {
            jaExiste = true; 

        }
    }
    
    if (jaExiste === false) {
        vetorSemDuplicatas[tamanhoNovoVetor] = vetorOriginal[i];
        tamanhoNovoVetor = tamanhoNovoVetor + 1; 
    }
}

alert("Vetor Original: " + vetorOriginal);
alert("Vetor Sem Duplicatas: " + vetorSemDuplicatas);
