/**
 * BOILERPLATE - ESTRUTURAS DE DADOS
 * Squad: __________________________
 * Instruções: Preencham a lógica dentro dos métodos marcados com TODO
 */

// ==================================================================
// 1. CLASSE NODE (O "Nó" que guarda o dado e o ponteiro)
// ==================================================================
class Node {
  constructor(data) {
    this.data = data; // A informação (ex: Transação, ID do Caminhão, etc)
    this.next = null; // Ponteiro para o próximo nó
    // this.prev = null; // Descomentar se for usar Lista Duplamente Encadeada
  }
}

// ==================================================================
// 2. LISTA LIGADA (LinkedList)
// ==================================================================
class LinkedList {
  constructor() {
    this.head = null; // O "cabeça" da lista
    this.size = 0;    // Contador de elementos
  }

  // Adiciona no final da lista
  add(data) {
    const newNode = new Node(data);

    // TODO: Se a lista estiver vazia, o head é o novo nó.
    // TODO: Se não, percorra até o último nó e aponte o .next para o novo nó.

    this.size++;
    console.log(`Adicionado: ${data}`);
  }

  // Remove um elemento específico pelo valor ou ID
  remove(data) {
    // TODO: Implementar lógica de remoção.
    // Cuidado com o caso de remover o próprio head!
  }

  // Exibe todos os elementos
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `${current.data} -> `;
      current = current.next;
    }
    console.log(result + "null");
  }
}

// ==================================================================
// 3. PILHA (Stack) - LIFO (Last In, First Out)
// ==================================================================
class Stack {
  constructor() {
    this.items = []; // Pode usar array como base, mas controle o acesso!
    // OU pode implementar usando a lógica de nós (Node) para desafio extra
  }

  push(element) {
    // TODO: Adicionar elemento no topo
  }

  pop() {
    // TODO: Remover e retornar o elemento do topo
    // Dica: Verifique se a pilha não está vazia antes (Underflow)
  }

  peek() {
    // TODO: Apenas "espiar" quem está no topo sem remover
  }

  isEmpty() {
    // Retorna true se vazia
  }
}

// ==================================================================
// 4. FILA (Queue) - FIFO (First In, First Out)
// ==================================================================
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    // TODO: Adicionar elemento no final da fila
  }

  dequeue() {
    // TODO: Remover e retornar o primeiro elemento da fila
  }

  front() {
    // TODO: Mostrar quem é o primeiro da fila
  }
}

// ==================================================================
// ÁREA DE TESTES (Simulação das Situações-Problema)
// ==================================================================

// Exemplo de uso para a Squad (Adapte para o seu tema!)
console.log("--- TESTANDO LISTA ---");
const minhaLista = new LinkedList();
minhaLista.add("Dado 1");
minhaLista.add("Dado 2");
minhaLista.print();

console.log("\n--- TESTANDO PILHA ---");
const minhaPilha = new Stack();
// minhaPilha.push("Ação 1");

console.log("\n--- TESTANDO FILA ---");
const minhaFila = new Queue();
// minhaFila.enqueue("Cliente 1");
