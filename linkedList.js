class Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  add_to_back(value) {
    let new_node = new Node(value);

    if (!this.tail) {
      this.tail = new_node;
      this.head = new_node;
    } else {
      let oldTail = this.tail;
      oldTail.next = new_node;

      new_node.previous = oldTail;

      this.tail = new_node;
    }
  }

  add_to_front(value) {
    let new_node = new Node(value);

    if (!this.head) {
      this.tail = new_node;
      this.head = new_node;
    } else {
      let oldhead = this.head;
      oldhead.previous = new_node;

      new_node.next = oldhead;

      this.head = new_node;
    }
  }

  remove_from_head() {
    if (this.head == null) {
      return null;
    } else if (this.tail == this.head) {
      let valueToRemove = this.tail.value;
      this.tail = null;
      this.head = null;
      return valueToRemove;
    } else {
      let valueOfHeadRemove = this.head.value;
      let next_value = this.head.next;
      this.head = next_value;
      this.head.previous = null;
      return valueOfHeadRemove;
    }
  }

  remove_from_tail() {
    if (this.tail == null) {
      return null;
    } else if (this.tail == this.head) {
      let valueToRemove = this.tail.value;
      this.tail = null;
      this.head = null;
      return valueToRemove;
    } else {
      let valueOfTailRemove = this.tail.value;
      let next_value = this.tail.previous;
      this.tail = next_value;
      this.tail.next = null;
      return valueOfTailRemove;
    }
  }
}

const list = new DoublyLinkedList();

console.log("Lista vazia:");
console.log("Head:", list.head);
console.log("Tail:", list.tail);

console.log("\n=== add_to_back ===");
list.add_to_back(10);
list.add_to_back(20);
list.add_to_back(30);

console.log("Head:", list.head.value);
console.log("Tail:", list.tail.value);

console.log("\n=== add_to_front ===");
list.add_to_front(5);

console.log("Head:", list.head.value);
console.log("Tail:", list.tail.value);

console.log("\n=== Percorrendo do início ao fim ===");
let current = list.head;
while (current) {
  console.log(current.value);
  current = current.next;
}

console.log("\n=== Percorrendo do fim ao início ===");
current = list.tail;
while (current) {
  console.log(current.value);
  current = current.previous;
}

console.log("\n=== remove_from_head ===");
console.log("Removido:", list.remove_from_head());

current = list.head;
while (current) {
  console.log(current.value);
  current = current.next;
}

console.log("\n=== remove_from_tail ===");
console.log("Removido:", list.remove_from_tail());

current = list.head;
while (current) {
  console.log(current.value);
  current = current.next;
}

console.log("\n=== Removendo tudo ===");
while (list.head) {
  console.log("Removido:", list.remove_from_head());
}

console.log("\nEstado final:");
console.log("Head:", list.head);
console.log("Tail:", list.tail);
