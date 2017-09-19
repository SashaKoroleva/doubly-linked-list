const Node = require('./node');

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    append(data) {
      var node = new Node(data);

      if(this.length == 0){
        this.head = node;
        this.tail = node;
      }
      else{
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
      }
      this.length++;
      return this;
    }

    head() {
     if(!this.head){
       return null;
     }
     return this.head.data;
    }

    tail() {
      if(!this.tail){
        return null;
      }
      return this.tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
