let pilhaDePratos = ["Prato 1", "Prato 2", "Prato 3"];
console.log("Pilha inicial:", pilhaDePratos);

let pratoRemovido = pilhaDePratos.pop();
console.log("Prato removido:", pratoRemovido);
console.log("Pilha atualizada:", pilhaDePratos);

// Remover do início
let listaBrasileirao = ["Vasco", "Flamengo", "São Paulo"];
let rebaixado = listaBrasileirao.shift();
console.log("Time rebaixado 2025:", rebaixado);
console.log("Classificação 2025:", listaBrasileirao);

// Remover de qualquer posição
let comentarios = [
	"Ótimo post",
	"Não gostei, asmei",
	"É melhor tirar essa porcaria do ar",
];
console.log("Comentários originais:", comentarios);

comentarios.splice(2, 1);
console.log("Após reomover o último comentário:", comentarios);
