// class GeometricModel {
//   area = 0;
//   static instances = [];

//   constructor() {
//     GeometricModel.instances.push(this);
//   }

//   getArea() {}
// }

// class FourSide extends GeometricModel {
//   constructor(a,b,c,d) {
//     super();
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.d = d;
//   }
//   getPerimeter() {
//     return this.a + this.b + this.c + this.d;
//   }
// }

// class Rectangle extends FourSide   {
//   constructor(width, heigth) {
//     /**
//      * abizalovka arajin toxumenq kanchum supery papai constructorna
//      * kanchum ete paki mej grac lini inchvor ban petqa etel grel
//      */
//     super(width, heigth, width, heigth);
//     this.width = width;
//     this.heigth = heigth;
//   }

//   getArea() {
//     return this.width * this.heigth;
//   }
//   static add(a, b) {
//     return new Rectangle(a.heigth + b.heigth, a.width + b.width);
//   }
//   add(source) {
//     return Rectangle.add(this, source);
//   }
// }

// class Square extends Rectangle {
//   constructor(side){
//     super(side, side);
//     this.side = side;
//   }

//   getPerimeter() {
//     return super.getPerimeter() + 1;
//   }

//   static getDiaganal(s) {
//     return Math.sqrt((s.side ** 2) * 2);
//   }
// }

// class Rhombus extends FourSide {
//   constructor(side, angle) {
//     super(side, side, side, side);
//     this.angle = angle;
//   }

//   getHeight() {
//     return Math.sin(this.angle) * this.a;
//   }
// }