// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;
  list: Array<Node<T> | undefined>;

  constructor(head?: Node<T>) {
    this.head = head;
    this.tail = head;
    this.list = [];
  }

  push(value: T) {
    if (!this.tail) {
      this.head = { value };
      this.tail = this.head;
      return;
    }

    this.tail.next = { value };
    this.tail = this.tail.next;
  }

  filter(fn: (node: Node<T>) => Boolean): LinkedList<T> {
    let p = this.head;

    const list = new LinkedList<T>();

    while (p) {
      if (fn(p)) {
        list.push(p.value);
      }

      p = p.next;
    }

    return list;
  }

  visit() {}
  remove() {}
  merge() {}
  print() {}

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}

  length() {
    let p = this.head;
    let length = 0;

    while (p) {
      length++;
      p = p.next;
    }
    return length;
  }
}

const list = new LinkedList();
