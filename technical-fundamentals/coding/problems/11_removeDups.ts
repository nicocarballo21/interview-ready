// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2 -> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  const list = new LinkedList<T>(head);

  const set: Set<T> = new Set();

  const ret = list.filter((node) => {
    if (set.has(node.value)) return false;

    set.add(node.value);
    return true;
  });

  return ret.head;
}

export function removeDupss<T>(head?: Node<T>): Node<T> | undefined {
  if (!head) return undefined;

  let p = head;
  const set: Set<T | undefined> = new Set();

  set.add(head.value);

  while (p) {
    const next = p.next;

    if (!next) {
      break;
    }

    if (set.has(next.value)) {
      p.next = next.next;
      continue;
    }
    set.add(next.value);
    p = next;
  }

  return head;
}
