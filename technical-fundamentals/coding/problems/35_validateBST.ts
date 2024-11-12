// 5. *Validate BST*:

// Implement a function to check if a binary tree is a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function validateBST<T extends number | string>(
  node: TreeNode<T> | undefined
): boolean {
  return isValidBSTHelper(node, undefined, undefined);
}

/*
            Invalid BST:
                 3
                / \
               2   5
              / \
             1   4
        */

function isValidBSTHelper<T>(
  node: TreeNode<T> | undefined,
  min: T | undefined,
  max: T | undefined
): boolean {
  if (!node) return true;

  if ((min && node.value <= min) || (max && node.value >= max)) return false;

  return (
    isValidBSTHelper(node.left, min, node.value) &&
    isValidBSTHelper(node.right, node.value, max)
  );
}
