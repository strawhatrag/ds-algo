/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // base case
  if (!nums.length) {
    return null;
  }

  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid + 1);

  let tree = new TreeNode(nums[mid]);

  // recursion
  tree.left = sortedArrayToBST(left);
  tree.right = sortedArrayToBST(right);

  return tree;
};
