// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  const list = new LinkedList<T>(head);

  let a = "";

  list.visit((node) => {
    a += node.value;
  });

  return a === a.split("").reverse().join("");
}
