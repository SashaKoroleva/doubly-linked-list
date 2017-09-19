const Node = require('./node');

class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }

    append(data) {
      var node = new Node(data);

      if(this.length == 0){
        this._head = node;
        this._tail = node;
      }
      else{
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
      }
      this.length++;
      return this;
    }

    head() {
     if(!this._head){
       return null;
     }
     return this._head.data;
    }

    tail() {
      if(!this._tail){
        return null;
      }
      return this._tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
      if(this.length == 0){
        return true;
      }
      return false;
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;
       return this;
    }

    deleteAt(index) {

    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
