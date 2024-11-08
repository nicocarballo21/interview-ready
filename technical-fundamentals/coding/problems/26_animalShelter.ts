// 6. *Animal Shelter*:

// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis. People must adopt either the "oldest"
// (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type).
// They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in LinkedList data structure.

export type AnimalType = "dog" | "cat";

export class Animal {
  type: AnimalType;
  constructor(type: AnimalType) {
    this.type = type;
  }
}

export default class AnimalShelter {
  catQueue: Array<Animal> = [];
  dogQueue: Array<Animal> = [];
  allQueue: Array<Animal> = [];

  constructor() {}

  enqueue(type: AnimalType): void {
    if (type === "cat") {
      this.catQueue.push(new Animal("cat"));
    } else {
      this.dogQueue.push(new Animal("dog"));
    }

    this.allQueue.push(new Animal(type));
  }

  dequeueAny(): Animal | undefined {
    const animal = this.allQueue.shift();

    if (animal?.type === "cat") {
      this.catQueue.shift();
    } else {
      this.dogQueue.shift();
    }

    return animal;
  }

  dequeueDog(): Animal | undefined {
    const animal = this.dogQueue.shift();

    const i = this.allQueue.findIndex((t) => t === animal);

    this.allQueue.splice(i, 1);

    return animal;
  }

  dequeueCat(): Animal | undefined {
    const animal = this.catQueue.shift();

    const i = this.allQueue.findIndex((t) => t === animal);

    this.allQueue.splice(i, 1);

    return animal;
  }
}
