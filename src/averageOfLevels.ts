/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
         val: number
         left: TreeNode | null
         right: TreeNode | null
         constructor(val?: number, left: TreeNode | null = null, right: TreeNode | null = null) {
             this.val = (val===undefined ? 0 : val)
             this.left = (left===undefined ? null : left)
             this.right = (right===undefined ? null : right)
         }
     }

export function averageOfLevels(root: TreeNode | null): number[] {
    if (!root){
        return []
    }

    const levelMap: any = {}
    const queue: Array<{node: TreeNode, level: number}> = [{node: root, level: 0}]

    while (queue.length) {
        const {node, level} = queue.shift()!;
        if (levelMap[level]) {
            levelMap[level] = (levelMap[level] + node.val) / 2
        } else {
            levelMap[level] = node.val
        }

        if (node.left) {
            queue.push({node: node.left, level: level+1})
        }
         if (node.right) {
            queue.push({node: node.right, level: level+1})
        }
    }

    return Object.values(levelMap)
};

console.log(averageOfLevels(new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))))) // [3, 14.5, 11]