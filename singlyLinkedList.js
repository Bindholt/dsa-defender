export default class SinglyLinkedList {
    head = null;

    constructor(){

    }

    add(data) {
        const node = new Node(data, this.head);
        this.head = node;
    }

    getFirstNode() {
        return this.head;
    }

    getNextNode(node) {
        return node.next;
    }

    setFirstNode(node) {
        this.head = node;
    }

    removeFirstNode() {
        if(!!this.head) {
            this.head = this.head.next;
        }
    }

    removeLastNode() {
        let current = this.head;
        if(!current.next) {
            this.head = null;
            return;
        } 
        let previous = null;

        while (!!current) {
            if (current.next) {
                previous = current;
            }
            current = current.next;
        }
        previous.next = null;
    }

    removeNode(node) {
        let current = this.head;

        if(node == this.head) {
            this.head = node.next;
        }

        while(!!current) {
            if (current.next == node) {
                current.next = node.next;
            }
            current = current.next;
        }
    }

    getLastNode() {
        let current = this.head;

        while (!!current) {
            if (!!current.next){
                return current;
            }

            current = current.next;
        }
    }

    getNodeWith(data) {
        let current = this.head;

        while(!!current) {
            if(current.data == data) {
                return current;
            }

            current = current.next;
        }
    }

    remove(data) {
        let nodeToRemove = this.getNodeWith(data);
        this.removeNode(nodeToRemove);
    }

    size() {
        let current = this.head;
        let count = 0;
        
        while(!!current) {
            count++;
            current = current.next;
        }
        return count;
    }


    dumpList(){
        if(this.head) {
            let current = this.head;
            while(current) {
                console.log(current.data);
                current = current.next;
            }
        }
    }
}

class Node {
    next = null;
    data = null;

    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}