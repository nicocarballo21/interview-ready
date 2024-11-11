// *Sum Lists*: You have two numbers represented by a linked list, where each node contains a single digit.
// The digits are stored in reverse order, such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.
// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined
): Node<number> | undefined {
  if (!list1 && !list2) return undefined;

  const linkedList1 = new LinkedList<number>(list1);
  const linkedList2 = new LinkedList<number>(list2);

  let num1 = "";
  let num2 = "";

  linkedList1.visit((node) => {
    num1 += node.value;
  });
  linkedList2.visit((node) => {
    num2 += node.value;
  });

  const sum = Number(num1) + Number(num2);
  const ret = new LinkedList<number>();

  sum
    .toString()
    .split("")
    .forEach((char) => {
      ret.push(Number(char));
    });

  return ret.head;
}
