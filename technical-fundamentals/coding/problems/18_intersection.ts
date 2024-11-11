// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node.
// Note that the intersection is defined based on reference, not value.

import { LinkedList } from "./10_LinkedList";

// Common part: 7 -> 8 -> 9
// List 1: 1 -> 2 -> 3 -> 4 -> 7 -> 8 -> 9
// List 2: 5 -> 6 -> 7 -> 8 -> 9

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined
): Node<T> | undefined {
  const set: Set<Node<T>> = new Set();

  const li1 = new LinkedList<T>(list1);
  const li2 = new LinkedList<T>(list2);
  let ret: Node<T> | undefined;

  li1.visit((node) => {
    set.add(node);
  });

  li2.visit((node) => {
    if (set.has(node) && !ret) {
      ret = node;
    }
  });

  return ret;
}
