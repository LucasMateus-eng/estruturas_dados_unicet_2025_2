const musicas = ["Música 1", "Música 2", "Música 3"];
console.log("Minnhas músicas favoritas:");

for (const musica of musicas) {
	console.log(musica);
}

// Usar o método forEach
const numeros = [1, 2, 3, 4, 5];
console.log("Dobro de cada número:");

numeros.forEach((numero, indice) => {
	console.log(`O dobro do elemento no índice ${indice} é ${numero * 2}`);
});
