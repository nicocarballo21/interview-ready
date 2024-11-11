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

  filter(fn: (node: Node<T>, index: number) => Boolean): LinkedList<T> {
    let p = this.head;

    const list = new LinkedList<T>();

    let i = 0;
    while (p) {
      if (fn(p, i)) {
        list.push(p.value);
      }

      i++;
      p = p.next;
    }

    return list;
  }

  visit(fn: (node: Node<T>, index: number) => Boolean | void) {
    let p = this.head;

    let index = 0;
    while (p) {
      if (fn(p, index)) {
        break;
      }
      index++;
      p = p.next;
    }
    return this;
  }
  remove() {}
  merge(list: LinkedList<T>): LinkedList<T> {
    if (this.tail === undefined) return list;

    this.tail.next = list.head;
    this.tail = list.tail;
    return this;
  }
  print() {}

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}

  length() {
    let length = 0;
    this.visit(() => {
      length++;
    });
    return length;
  }
}

const list = new LinkedList();
