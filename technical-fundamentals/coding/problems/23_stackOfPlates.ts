// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

// capacity = 2

// [[],[],[]]
// {0:[1,2], 1:[3,4], 2:[5,6]}

export default class StackOfPlates<T> {
  stack: Array<Array<T>>;
  capacity: number;

  constructor(capacity: number) {
    this.stack = [];
    this.capacity = capacity;
  }

  push(value: T): void {
    const withSpace = this.stack.find(
      (plates) => plates.length < this.capacity
    );

    if (withSpace) {
      withSpace.push(value);
    } else {
      this.stack.push([value]);
    }
  }

  pop(): T | undefined {
    const last = this.stack[this.stack.length - 1];

    if (!last) return undefined;

    const pop = last.pop();

    if (!last.length) {
      this.stack.pop();
    }

    return pop;
  }
}
