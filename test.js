

//Class based approach

class Node {
    constructor(data){
        this.data = data;
        this.next_node = null;
    }
}


class LinkedList {

    constructor(){
        this.head = null;
        this.size = 0;
    }

    //this method adds new element or node in the end of the list
    insertAtEnd(newData) {

        //creating new node
        let newNode = new Node(newData);

        let current;

        //if we don't have an item in the list, then add the first node as the head
        if(this.head === null) {
            this.head = newNode;
        } else {
            //get the first node and so on
            current = this.head;
            
            //checking if the first nodes next_node property is not null
            while(current.next_node){
                // if the nodes is not null then re assign the current to the next_node until we find the last which is null
                current = current.next_node;
            }
            
            //add the new node
            current.next_node = newNode
        }
        //+1 in size
        this.size++;

    }

    //this method add the element or new node/data at the start of the list
    insertAtStart(newData) {
        //create new node
        let newNode = new Node(newData);

        //here we are assigning the newNode's .next_node property to the current head
        newNode.next_node = this.head;

        //after pointing the reference of the newNode .next_node property
        //set the newNode as a new head
        this.head = newNode;

         //+1 in size
        this.size++;
    }

    insertAt(data, index) {
        
        
        if(index < 0 || index > this.size) {
            return console.log("Provide a valid index.");
        } else {

            let node = new Node(data);
            let prev, curr;
            let it;

            curr = this.head;
            
            if(index === 0) {
                this.insertAtStart(data);
            } else {
                curr = this.head;
                it = 0;
                
                while(it < index){
                    it++;
                    prev = curr;
                    curr = curr.next_node;
                }

                node.next_node = curr;
                prev.next_node = node;
            }
        this.size++;
    }
    }   

    removeAt(index) {
        if(index < 0 || index > this.size) {
            return console.log("Provide valid index.");
        } else {
            let prev, curr;
            let it = 0;

            curr = this.head;
            prev = curr;

            if(index === 0) {
                this.head = curr.next_node;
            } else {
               
                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next_node;
                }

                prev.next_node = curr.next_node;
            }
            this.size--;

        }
    }


    //this method search for a node
    search(key){
        let current = this.head;

        while(current){
            if(current.data === key){
                return current;
            } else {
                current = current.next_node
            }
        }
        //if we cant find the data inside the list return null
        return null;
    }

    //this method prints the linked list
    printLinkedList(){
        let current = this.head;
        let nodes = [];

        while(current){
            if(current === this.head){
                nodes.push(`[Head: ${current.data}]`);
            } else if (current.next_node === null) {
                nodes.push(`[Tail: ${current.data}]`);
            } else {
                nodes.push(`[${current.data}]`);
            }
            current = current.next_node;
        }

        return nodes.join(' -> ');;
    }

}


let linkedList = new LinkedList();

// linkedList.insertAtEnd(1);
// linkedList.insertAtEnd(2);
// linkedList.insertAtEnd(3);
// linkedList.insertAtEnd(100);
linkedList.insertAtStart(1);
linkedList.insertAtStart(2);
linkedList.insertAtStart(3);
linkedList.insertAtStart(4);
linkedList.insertAtStart(5);

linkedList.insertAt(50, 1);
// linkedList.removeAt(0)

 

console.log(linkedList.printLinkedList());
// console.log("Search = ", linkedList.search(50));

// console.log("Size = ", linkedList.size);
// console.log("Result = ", linkedList.head, "Size = ", linkedList.size);


//functional approach singly linked list

// function LinkedList(){
//     var head = null;
//     var size = 0;

//     var Node = function(newData){
//         this.node = newData;
//         this.next_node = null;
//     }

//     this.size = function(){
//         return size;
//       };
    
//       this.head = function(){
//         return head;
//       };

//     this.insertAtEnd = function (newData) {

//         let newNode = new Node(newData);
       
//         let current;

//         if(head === null) {
//             head = newNode;
//         } else {
//             current = head;

//             while(current.next_node) {
//                 current = current.next_node;
//             }

//             current.next_node = newNode;

//         }
//         size++;
//     };
    
// }

// let linkedListFunction = new LinkedList();

// linkedListFunction.insertAtEnd(1);
// linkedListFunction.insertAtEnd(2);

// console.log("size = ", linkedListFunction.size(), "lists = ", linkedListFunction.head())