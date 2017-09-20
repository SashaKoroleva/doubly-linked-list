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
      //return this;
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

    at(index) {
      var count = 0;
      var current = this._head;
      while(count++ < index){
      current = current.next;
      }
      return current.data;
  }

    insertAt(index, data) {

    }

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
       //return this;
    }

    deleteAt(index) {
      if(index>=0 && index<this.length && this.length != 0){

        var current = this._head;
        var count = 0;

        if(index == 0){
          this._head = current.next;
          if(this.length == 1){
            this._head = null;
            this._tail = null;
            this.length = 0;
          }
        }
        else if(index == this.length -1){
          current = this._tail;
          this._tail = current.prev;
          this._tail.next = null;
        }
        else{
            while(count++ < index){
              current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.length--;
      }
      else { return false;}
    }

    reverse() {}

    indexOf(data) {
      var count = 0;
      var current = this._head;
      while(count<this.length && current.data != data){
        count++;
        current = current.next;
      }
      if(count==this.length){
        return -1;
      }
      else {return count;}
    }
}

module.exports = LinkedList;
