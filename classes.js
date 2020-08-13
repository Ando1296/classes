class First{
  static counter = 0;

  constructor(a,b, c){
    First.counter++;
    this.counter = c;
    this.test = a;
    this.about = b;
  }

  jntik(){
    this.counter2 = this.counter + 1;
    return First.counter;
  }
}

const classes = new First(15,16,17);

let about = new First('test', 'about', 111);
about.counter = 'string';
console.log(First.counter);
