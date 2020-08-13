class StackItem {
  constructor(value, index, nextItem) {
    this.value = value;
    this.index = index;
    this.nextItem = nextItem;
  }
}

class Stack {
  size = 0;
  lastItem = null;

  push(value) {
    this.lastItem = new StackItem(value, this.size, this.lastItem);
    this.size++;
  }

  pop() {
    const targetItem = this.lastItem;
    this.lastItem = targetItem && targetItem.nextItem;

    this.size = this.size && this.size - 1;

    return targetItem && targetItem.value;
  }

  get lastValue() {
    return this.lastItem && this.lastItem.value;
  }
  get stackItem() {
    return this.lastItem;
  }
  get index() {
    return this.lastItem && this.lastItem.index;
  }
}