///"use strict"

let arrayFixo = [10, 20, 30];
Object.seal(arrayFixo);

console.log("Array está selado: ", Object.isSealed(arrayFixo));
console.log("Tamanho inicial: ", arrayFixo.length);

try {
  arrayFixo.push(40);
} catch (e) {
  console.error("Erro ao usar push: ", e.message);
}