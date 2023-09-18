//https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

var maxDepth = function (root) {
  if (!root) {
    return 0; // An empty tree has a depth of 0.
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};
