"use strict";
// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
class TreeStore {
    constructor(items) {
        this.tree = items;
    }
    getItem(id) {
        return this.tree.find((treeElement) => treeElement.id === id);
    }
    treeElementHasParent(treeElement) {
        return treeElement && (treeElement === null || treeElement === void 0 ? void 0 : treeElement.parent) && treeElement.parent !== 'root';
    }
    getAllParents(id) {
        const result = [];
        let currentNode = this.getItem(id);
        while (currentNode) {
            if (this.treeElementHasParent(currentNode)) {
                const newId = currentNode.parent;
                currentNode = this.getItem(newId);
                if (currentNode) {
                    result.push(currentNode);
                }
            }
            else {
                currentNode = undefined;
            }
        }
        return result;
    }
}
const items = [
    {
        id: 1,
        parent: 'root',
    },
    {
        id: 2,
        parent: 1,
        type: 'test',
    },
    {
        id: 3,
        parent: 1,
        type: 'test',
    },
    {
        id: 4,
        parent: 2,
        type: 'test',
    },
    {
        id: 5,
        parent: 2,
        type: 'test',
    },
    {
        id: 6,
        parent: 2,
        type: 'test',
    },
    {
        id: 7,
        parent: 4,
        type: null,
    },
    {
        id: 8,
        parent: 4,
        type: null,
    },
];
const ts = new TreeStore(items);
console.log(ts.getAllParents(7));
