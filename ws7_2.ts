class Shape {
constructor(public color:string) {}
}

class Circle extends Shape {
constructor(color:string , public radius:number) {
    super(color);
}

        Area():number() {
    return Math.PI * this.radius * this.radius;
}
}

class Square extends Shape {
constructor(color:string, public side:number) {
    super(color);
}

Area():number {
    return this.side * this.side ;
}
}
const Circle = new Circle("Red", 7);
console.log(`วงกลมนี้สี ${Circle.color}, รัศมี ${Circle.redius}พื้นที่ $ {circle.area()}`);
const blueSquare = new Square("Blue", 5);
console.log(`สี่เหลี่ยมสี: ${Square.color}, ด้าน ${Square.redius} พื้นที่ ${Squars.arae())}`;