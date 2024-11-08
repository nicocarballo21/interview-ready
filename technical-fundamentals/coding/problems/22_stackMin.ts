// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

//          array   - mins
// push (1) [1]     - [1]
// push (2) [1,2]   - [1]
// push (4) [1,4]   - [1]
// push (0) [1,4,0] - [1,0]

export default class StackMin<T> {
  array: Array<T>;
  mins: Array<T>;

  constructor() {
    this.array = [];
    this.mins = [];
  }

  push(value: T): void {
    this.array.push(value);

    const min = this.min();

    if (!min || value < min) {
      this.mins.push(value);
    }
  }

  pop(): T | undefined {
    const pop = this.array.pop();

    if (pop === this.min()) {
      this.mins.pop();
    }

    return pop;
  }

  min(): T | undefined {
    return this.mins[this.mins.length - 1];
  }
}
