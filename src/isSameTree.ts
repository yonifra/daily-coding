// Is Same Binary Tree - Easy
// https://leetcode.com/problems/same-tree/

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!q && !p) {
        return true;
    }

    if ((!q && p) || (q && !p) || q.val !== p.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};