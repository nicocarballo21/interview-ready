// 3. *Delete Middle Node*:

// Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.

// ```
// EXAMPLE
// Input: the node c from the linked list a -> b -> c -> d -> e -> f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function deleteMiddleNode<T>(
  head: Node<T>,
  position: number
): Node<T> | undefined {
  const list = new LinkedList<T>(head);

  const len = list.length();

  if (position >= len - 1 || position === 0) return head;

  const ret = list.filter((_node, i) => i !== position);

  return ret.head;
}
