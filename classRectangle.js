class Rectangle {
  static counter = 0;

  constructor(height, width) {
    this.height = height;
    this.width = width;
    Rectangle.counter++
  }

  getArea() {
    return this.height * this.width;
  }

  getPerimeter() {
    return this.height * 2 + this.width * 2; 
  }

  getDioganal() {
    return Math.sqrt(this.height ** 2 + this.width ** 2);
  }
}

let RectangleCopy = new Rectangle(10,10);
console.log(RectangleCopy.getArea());

let RectangleCopy1 = new Rectangle(15,15);
console.log(RectangleCopy1.getPerimeter());

let Rec = new Rectangle(3,4);
console.log(Rec.getDioganal());