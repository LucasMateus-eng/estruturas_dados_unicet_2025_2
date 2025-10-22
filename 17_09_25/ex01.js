class PilhaVetor {
  constructor() {
    this.items = []; // Inicializa a pilha com um array vazio.
  }

  push(elemento) {
    this.items.push(elemento);
  }

  pop() {
    if (this.isEmpty()) {
      return "A pilha está vazia";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "A pilha está vazia";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const minhaPilha = new PilhaVetor();
minhaPilha.push(10);
minhaPilha.push(20);
minhaPilha.push(30);

console.log("Topa da pilha: ", minhaPilha.peek());
console.log("Tamanho da pilha: ", minhaPilha.size());

console.log("Elemento removido: ", minhaPilha.pop());
console.log("Novo topo da pilha: ", minhaPilha.peek());
console.log("Pilha está vazia?", minhaPilha.isEmpty());

class No {
  constructor(elemento) {
    this.elemento = elemento;
    this.proximo = null;
  }
}

class PilhaListaLigada {
  constructor() {
    this.topo = null;
    this.contador = 0;
  }

  push(elemento) {
    const novoNo = new No(elemento);
    if (this.isEmpty()) {
      this.topo = novoNo;
    } else {
      novoNo.proximo = this.topo;
      this.topo = novoNo;
    }
    this.contador++;
  }

  pop() {
    if (this.isEmpty()) {
      return "A pilha está vazia";
    }
    const noRemovido = this.topo;
    this.topo = this.topo.proximo;
    this.contador--;
    return noRemovido.elemento;
  }


  peek() {
    if (this.isEmpty()) {
      return "A pilha está vazia";
    }
    return this.topo.elemento;
  }

  isEmpty() {
    return this.contador === 0;
  }

  size() {
    return this.contador;
  }
}

const minhaPilhaLista = new PilhaListaLigada();
minhaPilhaLista.push('A');
minhaPilhaLista.push('B');
minhaPilhaLista.push('C');

console.log("Topo da pilha:", minhaPilhaLista.peek());
console.log("Tamanho da pilha: ", minhaPilhaLista.size());

console.log('Elemento removido:', minhaPilhaLista.pop());
console.log("Novo topo da pilha: ", minhaPilhaLista.peek());
console.log("Pilha está vazia?", minhaPilhaLista.isEmpty());