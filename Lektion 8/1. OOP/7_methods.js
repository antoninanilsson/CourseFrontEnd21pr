class Car{
    constructor(model, color){
        this.model=model;
        this.color=color;
        this.gearbox=0;
    }
    gearUp(){
        this.gearbox ++;
        console.log(`Shifted gear to ${this.gearbox}`);
        return this;
    }
    gearDown(){
        this.gearbox --;
        console.log(`Shifted gear to ${this.gearbox}`);
        return this;
    }
}

const fiat=new Car('puto','pink');
fiat.gearUp().gearUp();

