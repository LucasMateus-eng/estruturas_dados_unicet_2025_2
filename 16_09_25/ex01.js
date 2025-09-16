class Node {
  constructor(data) {
    this.data = data; // O dado que o nó armazena
    this.next = null // Ponteiro. Iniciado como nulo.
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // A cabeça da lista, inicialmente nula.
    this.size = 0; // Tamanho da lista
  }

  // Adicionar um elemento no final da lista
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      // Se a lista estiver vazia, o novo nó é a cabeça
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) { // current.next != null
        current = current.next;
      }
      // Chegando ao último nó, aponta para o novo nó
      current.next = newNode;
    }
    this.size++;
  }

  printList() {
    let current = this.head;
    let result = "Head -> ";
    while (current) {
      result += `[${current.data}] -> `;
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

const slist = new SinglyLinkedList();
slist.append(10);
slist.append(20);
slist.append(30);
slist.append(40);
slist.printList();