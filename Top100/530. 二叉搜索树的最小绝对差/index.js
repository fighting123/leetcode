
/**
 * 题目名称：minimum-absolute-difference-in-bst
 * 题目地址：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
 * 题目难度：简单
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 看到二叉搜索树，就能想到中序遍历。
// 遍历一个二叉树，会访问每一个节点，拿节点做一些事情。
// 而中序遍历，它对于每一个节点，都先访问处理它的左子树中的节点，再访问处理它本身，再访问处理它的右子树中的节点。
// 由于二叉搜索树的性质，中序遍历访问处理的节点值的大小是递增的。
// 题目要求任意两个节点的最小的差值，它肯定发生在递增排列后，相邻的节点值之间。
// 我们用一个变量，保存上一个访问处理的节点值，求出当前访问的节点值与它之差，挑战最小的纪录，更小就更新

var getMinimumDifference = function(root) {
    let diff = Number.MAX_SAFE_INTEGER;
    let preVal;

    const inOrder = (root) => {
        if (root === null) {
            return;
        }
        inOrder(root.left);
        if (preVal !== undefined && root.val - preVal < diff) {
            diff = root.val - preVal;
        }
        preVal = root.val;
        inOrder(root.right);
    }
    inOrder(root);
    return diff;
};