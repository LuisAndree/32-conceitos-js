class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack está vazia';
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return 'Stack está vazia';
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    printStack() {
        console.log(this.items.toString());
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Stack após pushes:', stack.items); 
console.log('Elemento no topo da Stack:', stack.peek()); 
console.log('Removendo topo da Stack:', stack.pop()); 
console.log('Stack após pop:', stack.items); 
stack.printStack(); 

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue está vazia';
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return 'Queue está vazia';
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    printQueue() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('Queue após enqueues:', queue.items); 
console.log('Elemento na frente da Queue:', queue.front()); 
console.log('Removendo frente da Queue:', queue.dequeue()); 
console.log('Queue após dequeue:', queue.items); 
queue.printQueue(); 
