class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    } 

    let current = this.root;
    while (current) {
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(val);
          return this;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(val);
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val > node.val) {
      if (node.right) {
        return this.insertRecursively(val, node.right);
      } else {
        node.right = new Node(val);
        return this;
      }
    } else {
      if (node.left) {
        return this.insertRecursively(val, node.left);
      } else {
        node.left = new Node(val);
        return this;
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;


    while(currentNode){
      if (val === currentNode.val) return currentNode;
      else if(val > currentNode.val){
        currentNode = currentNode.right;
      }
      else {
        currentNode = currentNode.left;
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if(this.root === null) return undefined;
    
    if(val > node.val){
      if(node.right === null) return undefined;
      return this.findRecursively(val, node.right);
    }
    if(val < node.val){
      if(node.left === null) return undefined;
      return this.findRecursively(val, node.left);
    }

    return node;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, travel = []) {
  
    if(node){
      travel.push(node.val);
      if(node.left) this.dfsPreOrder(node.left, travel);
      if(node.right) this.dfsPreOrder(node.right, travel);
    }
    return travel;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, travel = []) {
    if(node){
      
      if(node.left) this.dfsInOrder(node.left, travel);
      travel.push(node.val);
      if(node.right) this.dfsInOrder(node.right, travel);
    }
    return travel;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, travel = []) {
    if(node){
      
      if(node.left) this.dfsPostOrder(node.left, travel);
      if(node.right) this.dfsPostOrder(node.right, travel);
      travel.push(node.val);
    }
    return travel;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let nodeQueue = [this.root];
    let visitedNodes = [];

    while (nodeQueue.length) {
      let current = nodeQueue.shift();
      visitedNodes.push(current.val);
      
      if (current.left) nodeQueue.push(current.left);
      if (current.right) nodeQueue.push(current.right);
    }

    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let current = this.root;

    while (current) {
      if (current.right.val === val) {
        if (current.right.right){
          current.right = current.right.right;
        } else if (current.right.left) {
          current.right = current.right.left;
        } else {
          current.right = null;
        }}
      else if (current.left.val === val) {
        if (current.left.right){
          current.left = current.left.right;
        } else if (current.left.left) {
          current.left = current.left.left;
        } else {
          current.left = null;
        }
      }
      else {
        if (current.right) current = current.right;
        if (current.left) current = current.left;
      }
      
    }
  }
}

module.exports = BinarySearchTree;
