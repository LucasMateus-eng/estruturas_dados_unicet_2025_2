let carrinho = ["Maça", "Pão"];
console.log("Carrinho inicial: ", carrinho);

carrinho.push("Leite");
console.log("Após adicionar 'Leite':", carrinho);

carrinho.push("Queijo", "Suco");
console.log("Após adicionar mais itens:", carrinho);

// Adicionar no início do array
let tarefas = ["Estudar JavaScript", "Lavar a louça"];
console.log("Tarefas iniciais:", tarefas);

tarefas.unshift("Comprar café");
console.log("Após adicionar a tarefa prioritária:", tarefas);

// Adicionar em qualquer posição
let melhoresTimesDoMundo = ["Flamengo", "Real Madrid", "Vasco"];
console.log(
	"Lista verdadeira dos maiores clubes do mundo:",
	melhoresTimesDoMundo
);

melhoresTimesDoMundo.splice(1, 0, " Altos");

console.log("Lista segundo votação popular:", melhoresTimesDoMundo);
