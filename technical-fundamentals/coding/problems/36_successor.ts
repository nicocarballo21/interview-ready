// 6. *Successor*:

// Write an algorithm to find the "next" node
// (i.e., in-order successor) of a given node in a binary search tree.
// You may assume that each node has a link to its parent.

// 3 conditions to find a successor:
// 1. The node has a right subtree, then the successor is the leftmost node of the right subtree.
// 2. The node does not have a right subtree, then the successor is the right child of the first parent.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
  parent?: TreeNode<T>; // Link to parent node
};

export default function successor<T>(
  node: TreeNode<T>
): TreeNode<T> | undefined {
  if (node.right) {
    //  If right subtree exists, then we find the leftmost node of the right subtree.
    let current = node.right;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  let current = node;
  let parent = node.parent;

  while (parent && parent.right === current) {
    current = parent;
    parent = parent.parent;
  }

  return parent;
}
