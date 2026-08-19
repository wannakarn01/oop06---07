class Character {
    constructor(protected name: string,protected health:number,protected level:number) {}
    takeDamage(damage:number):void {
        this.health -= damage;
    }
    get status(): string{
        return `${this.name} - health: ${this.health},level: ${this.level}`;
    }
    attack():void{}
}
class Mage extends Character {
    constructor(name:string, health:number, level:number,private mana:number) {
    super(name, health, level);
    }

get status(): string{
    return (`${this.status},mana:${this.mana}`);
}
attack():void{
        console.log(`${this.name} กำลังร่ายเวทย์`);
}

class Warrior extends Character {
constructor(name:string, health:number, level:number, stamina:number) {
    super(name, health, level)
    }
    get status():string{
        return (`${this.status},mana:${this.stamina}`);
    }
    attack():void{
        console.log(`${this.name} กำลังแกว่งดาบ`);
}
}
}
const Mage = new Mage("Gandalf", 100, 3, 200);
mage.takeDamage(20);
console.log(mage.status);
mage.attack();

const warrior = new Warrior("Conan", 120, 4, 100);
warrior.takeDamage(35);
console.log(warrior.status);
warrior.attack();