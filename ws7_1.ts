class Staff{
    constructor(private name:string , private salary: number){}
    getDetails(){
        return `ชื่อ: ${this.name} เงินเดือน $ {this.salary} บาท `;
    }
}
class Manager extends Staff{
    constructor(name:string,salary:number,private dept: string){
        super(name,salary);
    }
    getDetails(): string {
        return `ชื่อ: ${super.getDetails()} แผนก $ {this.dept} `;
    }
}
const Staff1 = new Staff("มารุด",200000);
console.log(Staff1.getDetails());
const manager1 = new Manager("วันเพ็ญ",30000,"IT");
console.log(manager1.getDetails());