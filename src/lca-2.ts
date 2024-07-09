class LCANode {
    parent: LCANode;
    value: string;

    constructor(value: string, parent: LCANode) {
        this.value = value
        this.parent = parent
    }

    getParent(): LCANode {
        return this.parent
    }
}

// A tree
const a = new LCANode("a", null)
const b = new LCANode("b", a)
const c = new LCANode("c", a)
const z = new LCANode("z", b)
const w = new LCANode("w", b)
const e = new LCANode("e", c)
const d = new LCANode("d", c)
const k = new LCANode("k", d)
const j = new LCANode("j", d)

function LCA(nodeA: LCANode, nodeB: LCANode) {
    // Find the node which is farther from the root

    const depthA = getDepth(nodeA)
    const depthB = getDepth(nodeB)

    if (depthA > depthB) {
        // move A up
        for (let i = 0; i < depthA - depthB; i++) {
            nodeA = nodeA.getParent()
        }
    } else if (depthA < depthB) {
        // move B up
        for (let i = 0; i < depthB - depthA; i++) {
            nodeB = nodeB.getParent()
        }
    }

    while (nodeA !== nodeB) {
        nodeA = nodeA.getParent()
        nodeB = nodeB.getParent()
    }

    return nodeA.value
}

function getDepth(node: LCANode) {
    let depth = 0
    while (node) {
        node = node.getParent()
        depth++
    }

    return depth
}

console.log(LCA(k, e))
