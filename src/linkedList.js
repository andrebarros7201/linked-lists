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

  prepend(value) {
    const newNode = new Node(value);
    if (this._size === 0) this.head = newNode;
    else {
      const temp = this.head;
      this.head = newNode;
      newNode.nextNode = temp;
    }
    this._size++;
  }

  at(index) {
    let count = 0;
    if (index > this._size || index < 0) return `Out of Range`;
    let cursor = this.head;
    while (index != count) {
      cursor = cursor.nextNode;
      count++;
    }
    return cursor;
  }

  get size() {
    return this._size;
  }
}

export { linkedList };
