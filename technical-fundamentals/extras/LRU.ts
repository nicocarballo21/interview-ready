class LRU_Node {
  key: number;
  value: number;
  next: LRU_Node | null;
  prev: LRU_Node | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  capacity: number;
  length: number;
  head: LRU_Node | null;
  tail: LRU_Node | null;
  cache: Record<number, LRU_Node>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.length = 0;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  // node at left = LRU
  // node at right = most recent

  get(key: number): number {
    // mediante el cache obtener el node
    // mover el node al pricipio
    const node = this.cache[key];

    if (!node) {
      return -1;
    }

    this.remove(node);
    this.cache[key] = this.push(key, node.value);

    return node.value;
  }

  put(key: number, value: number): void {
    const node = this.cache[key];

    // buscar
    // sacar de la lista
    // poner al final de la lista y agregar al cache

    if (node) {
      this.remove(node);
    }

    this.cache[key] = this.push(key, value);

    if (this.length > this.capacity) {
      if (!this.head) return;

      delete this.cache[this.head?.key];
      this.remove(this.head);
    }
  }

  remove(node: LRU_Node): void {
    const { prev, next } = node;

    if (!prev && !next) {
      this.head = this.tail = null;
    } else if (!prev) {
      this.head = next;
      if (next) {
        next.prev = null;
      }
    } else if (!next) {
      this.tail = prev;
      if (prev) {
        prev.next = null;
      }
    } else {
      prev.next = next;
      next.prev = prev;
    }
    this.length--;
  }

  push(key: number, value: number): LRU_Node {
    const newNode = new LRU_Node(key, value);

    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return newNode;
  }
}
