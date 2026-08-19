class WeatherStation{
    private _celcius: number;
    constructor(c: number){
        this._celcius= c;
    }
    get farenheit():number{
        return (this._celcius * 9 / 5)+ 32;
    }
}

const station1 = new WeatherStation(30);
console.log(station1.farenheit);