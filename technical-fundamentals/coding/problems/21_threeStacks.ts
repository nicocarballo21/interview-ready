// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
  private array: Array<T | undefined>;
  stackLenght: number;

  constructor(arrayLength: number) {
    this.array = Array(arrayLength);
    this.stackLenght = arrayLength / 3;
  }

  push(stackNum: number, value: T): void {
    for (let i = 0; i < this.stackLenght; i++) {
      const index = i + this.stackLenght * stackNum;

      if (!this.array[index]) {
        this.array[index] = value;
        return;
      }
    }
  }

  pop(stackNum: number): T | undefined {
    for (let i = this.stackLenght - 1; i >= 0; i--) {
      const index = i + this.stackLenght * stackNum;

      if (this.array[index]) {
        const temp = this.array[index];
        this.array[index] = undefined;
        return temp;
      }
    }
    return undefined;
  }

  peek(stackNum: number): T | undefined {
    for (let i = this.stackLenght - 1; i >= 0; i--) {
      const index = i + this.stackLenght * stackNum;

      if (this.array[index]) {
        return this.array[index];
      }
    }
    return undefined;
  }
}
