class QueueItem {
  constructor(value, nextItem) {
    this.value = value;
    this.nextItem = nextItem;
  }
}
class Queue {
  size = 0; 
  firstItem = null;
  lastItem = null;
  push(value) {
    const newItem = new QueueItem(value);
    if(this.lastItem) {
      this.lastItem.nextItem = newItem;
    }
    if(this.size === 0) {
      this.firstItem = newItem;
    }
    this.lastItem = newItem;
    this.size++;
  }
  pop() {
    const targetItem = this.firstItem;
    this.firstItem = targetItem.nextItem;
    this.size = this.size && this.size - 1;
    return targetItem && targetItem.value; 
  }
}