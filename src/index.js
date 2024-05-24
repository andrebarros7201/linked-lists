import { linkedList } from "./linkedList";

const list = new linkedList();

console.log(list.size);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
console.log(list.head);
console.log(list.size);
console.log(list.tail);

list.prepend(3);
console.log(list.size);
console.log(list.head);

console.log(list.at(0));

list.pop();
console.log(list);

console.log(list.contains(7));
console.log(list.contains(4));

console.log(list.find(5));

console.log(list.toString());

list.append(10);
console.log(list.toString());
list.prepend(0);
console.log(list.toString());
