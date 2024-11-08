// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export default class SortStack<T> {
  stack: Array<T> = [];

  constructor() {}

  // [1]
  // [1] push(2)
  // [2,1] push(3)
  // [3,2,1] push(4)
  // [3,2,1]
  push(value: T): void {
    if (this.isEmpty()) {
      this.stack.push(value);
      return;
    }

    const temp: Array<T | undefined> = [];

    let peek = this.peek();

    while (peek && value > peek) {
      temp.push(this.stack.pop());
      peek = this.peek();
    }
    this.stack.push(value);

    let pop: T | undefined;

    while ((pop = temp.pop())) {
      this.stack.push(pop);
    }
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}
