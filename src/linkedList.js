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
    if (this._size === 0) this.append(value);
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

  pop() {
    const newLast = this.at(this._size - 2);
    newLast.nextNode = null;
    this.tail = newLast;
    this._size--;
  }

  contains(value) {
    let counter = 0;
    let cursor = this.head;
    while (counter != this._size) {
      if (cursor.value === value) return true;
      cursor = cursor.nextNode;
      counter++;
    }
    return false;
  }

  get size() {
    return this._size;
  }
}

export { linkedList };
