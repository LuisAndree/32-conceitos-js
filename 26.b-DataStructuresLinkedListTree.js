class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }


    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    insertLast(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
    }

    insertAt(data, index) {
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const previous = this.getAt(index - 1);
        const node = new Node(data);
        node.next = previous.next;
        previous.next = node;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);

        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }

    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.next;
        }

        return null;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(1);
ll.insertLast(2);
ll.insertLast(3);
ll.insertAt(4, 1);
ll.printList(); 
ll.removeAt(1);
ll.printList(); 

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inorderTraversal(node = this.root) {
        if (node) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }

    preorderTraversal(node = this.root) {
        if (node) {
            console.log(node.value);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }

    postorderTraversal(node = this.root) {
        if (node) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.value);
        }
    }
}

const bt = new BinaryTree();
bt.insert(5);
bt.insert(3);
bt.insert(7);
bt.insert(2);
bt.insert(4);
bt.insert(6);
bt.insert(8);

console.log('In-order Traversal:');
bt.inorderTraversal(); 

console.log('Pre-order Traversal:');
bt.preorderTraversal(); 

console.log('Post-order Traversal:');
bt.postorderTraversal(); 
