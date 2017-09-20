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
      if(index>=0 && index<=this.length){
        var node = new Node(data);
        var count = 0;
        var current = this._head;

        if(index == 0){
          this._head = node;
          node.next = current;
          current.prev = node;
        }
        else if(index == this.length){
          current = this._tail;
          this._tail = node;
          node.prev = current;
          current.next = node;
        }
        else{
          while(count++ < index){
            current = current.next;
          }
          node.next = current;
          node.prev = current.prev;
          current.prev.next = node;
          current.prev = node;
          /*node.next = current.next;
          node.prev = current;
          current.next.prev = node;
          current.next = node;*/
        }
        this.length++;
      }
      else {return "error";}
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
      else { return "error";}
    }

    reverse() {

      var save;
      var count = this.length;

      var current = this._head;
      this._head = this._tail;
      this._tail = current;

       while(current){
         save = current.next;
         current.next = current.prev;
         current.prev = save;
         current = current.prev;
       }
    }

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
