// 4. *Check Balanced*:

// Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree
// such that the heights of the two subtrees of any node never differ by more than one.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function checkBalanced<T>(tree?: TreeNode<T> | null): boolean {
  if (!tree) return true;

  const isBalanced =
    Math.abs(getHeight(tree.left) - getHeight(tree.right)) <= 1;

  const areSubtreesBalanced =
    checkBalanced(tree.left) && checkBalanced(tree.right);

  return isBalanced && areSubtreesBalanced;
}

function getHeight<T>(tree: TreeNode<T> | undefined): number {
  if (!tree) return 0;

  return 1 + Math.max(getHeight(tree.left), getHeight(tree.right));
}
