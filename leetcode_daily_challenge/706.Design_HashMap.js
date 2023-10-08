/*
We need to design a hash-map
for this, we are going to use a LinkedList for collision

n = length of linked list in specific index of the arr
time complexity: 
put: O(n)
get: O(n)
remove: O(n)

*/

class LinkedList {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashMapDesign {
  constructor() {
    this.size = 1000000;
    this.arr = new Array(this.size).fill(null);
  }

  hash(key) {
    return key % this.size;
  }

  put(key, value) {
    const index = this.hash(key);
    let head = this.arr[index];

    if (!head) {
      this.arr[index] = new LinkedList(key, value);
      return;
    }

    while (head) {
      if (head.key === key) {
        head.value = value;
        return;
      }

      if (!head.next) {
        head.next = new LinkedList(key, value);
        return;
      }

      head = head.next;
    }
  }

  get(key) {
    const index = this.hash(key);
    let head = this.arr[index];

    while (head) {
      if (head.key === key) return head.value;
      head = head.next;
    }
    return -1;
  }

  remove(key) {
    const index = this.hash(key);
    let head = this.arr[index];
    if (!head) return;

    if (head.key === key) {
      this.arr[index] = head.next;
      return;
    }

    while (head.next) {
      if (head.next.key === key) {
        head.next = head.next.next;
        return;
      }
      head = head.next;
    }
  }
}
