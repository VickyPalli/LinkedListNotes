console.log("Linkedlist");

class Node {
    constructor(element) {
        this.data = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAtTail(element) {
        let node = new Node(element);
        if(this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next != null) {
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }

    insertAtHead(element) {
        let node = new Node(element);
        if(this.head == null ) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertAtPos(element, pos) {
        let node = new Node(element);
        if(pos == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let prev, curr = this.head;
            for(let i =0; i<pos; i++) {
                prev = curr;
                curr = curr.next;
            }
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }

    removeAtHead() {
        let curr = this.head;
        this.head = this.head.next;
        curr.next = null;
        this.size--;
        console.log("Remove Element is : ", curr.data);
    }

    removeAtTail() {
        let prev = null, curr = this.head;
        while(curr.next != null) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        this.size--;
        console.log("Remove Element is : ", curr.data);
    }

    removeAtPos(pos) {
        if(pos == 0) {
            let curr = this.head;
            this.head = this.head.next;
            curr.next = null;
            console.log("Remove Element is : ", curr.data);
        } else {
            let prev, curr=this.head;
            for(let i =0; i< pos;i++) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
            console.log("Remove Element is : ", curr.data);
        }
        this.size--;
    }

    print() {
        let curr = this.head;
        while(curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

let L = new LinkedList();
console.log(L.size); // 0
L.insertAtTail(10);
L.insertAtTail(20);
L.insertAtTail(30);
L.print(); // 10 20 30
console.log("--------------------------");
let M = new LinkedList();

M.insertAtHead(10);
M.insertAtHead(20);
M.insertAtHead(30);
M.print(); // 30 20 10
console.log("--------------------------");

M.insertAtPos(50, 2);
M.print(); // 30 20 50 10

// M.removeAtHead(); // 30
// M.print(); // 20 50 10

// M.removeAtTail(); // 10
// M.print(); // 20 50 

// M.removeAtPos(1); // 20
// M.print(); // 30 50 10

