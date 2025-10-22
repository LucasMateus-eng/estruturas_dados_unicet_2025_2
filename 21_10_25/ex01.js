// Nó da árvore
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Montando uma árvore simples
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);

console.log(root);