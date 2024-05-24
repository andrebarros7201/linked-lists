import { Node } from "./node";

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else if (this.size === 1) {
      this.tail = newNode;
      this.head.nextNode = this.tail;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  get size() {
    return this._size;
  }
}

export { linkedList };
