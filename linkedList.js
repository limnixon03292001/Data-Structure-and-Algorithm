class Node {
    constructor(data) {
        this.data = data;
        this.next_node = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insertStart X
    //insertEnd X
    //insertAtIndex X
    //removeAtIndex X

    //printList X
    //search X

    insertStart(data) {
        
        let node = new Node(data);

        node.next_node = this.head;

        this.head = node;

        this.size++;
    }

    insertEnd(data) {
         
        let node = new Node(data);

        if(this.head === null) {
            this.head = node;
        } else {
            let current = this.head;

            while(current.next_node) {
                current = current.next_node;
            }

            current.next_node = node;

            
        }
        this.size++;

    }

    insertAt(data, index) {

        if(index < 0 || index > this.size){
            return console.log("Index out of range.");
        } else {
           
            if(index === 0) {
                this.insertStart(data);
            } else {
                let node = new Node(data);
                let prev, curr;
                let it = 0;

                curr = this.head;
 

                while(it < index) {
                    it++;
                    prev = curr;
                    curr = prev.next_node;
                }

                node.next_node = curr;
                prev.next_node = node;
                
            }
            this.size++;
        }
    }

    removeAt(index) {

        let curr; 

        if(index < 0 || index >= this.size) {
            return console.log("Index out of range.");
        }

        if(index === 0) {
            curr = this.head;
            this.head = curr.next_node;
        } else {
            let prev, curr;
            let it = 0;

            curr = this.head;

            while(it < index) {
                it++;
                prev = curr;
                curr = curr.next_node;
            }

            prev.next_node = curr.next_node;
        }
        this.size--;
    }

    removeData(data){
        let prev = null;
        let current = this.head;

        while(current){
           
            if(current.data === data){
                if(prev === null) {
                    this.size--;
                    return this.head = current.next_node;
                } else {
                    this.size--;
                    return prev.next_node = current.next_node;
                }

            }

            prev = current;
            current = current.next_node;
          
        }
       
    }

    //return the index number of an element
    indexOf(data){
        let count = 0;
        let current =  this.head;

        while(current != null){
            if(current.data === data){
                return count;
            }
            count++;
            current = current.next_node;
        }

        return -1;
    }

    search(data) {

        let current = this.head;

        while(current){
            if(current.data === data){
                return console.log(`Data found: ${current.data}`);
            }
            current = current.next_node;
        }

        return console.log("Data not found!");
    }

    printList() {
        let current = this.head;
        let list = [];

        while(current){
            if(current === this.head) {
                list.push(`[Head: ${current.data}]`);
            } else if (current.next_node === null) {
                list.push(`[Tail: ${current.data}]`);
            } else {
                list.push(`[${current.data}]`);
            }

            current = current.next_node;
        }

        return list.join(" -> ");
    }
}

let linkedList = new LinkedList();

 
linkedList.insertEnd(1);
linkedList.insertEnd(2);
linkedList.insertEnd(3);
// linkedList.insertAt(4, 2);
// linkedList.removeAt(3);
// linkedList.search(2);
// linkedList.removeAt(3);
// linkedList.removeData(1);
console.log(linkedList.indexOf(1));

console.log(linkedList.printList());
console.log("Size:", linkedList.size);


