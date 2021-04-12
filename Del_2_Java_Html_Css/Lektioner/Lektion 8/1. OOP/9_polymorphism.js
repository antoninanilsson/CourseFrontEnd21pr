class Monster{
    constructor(name){
        this.name=name
    }

    attack() {
        console.log(`The monster ${this.name} is hitting you!`)
    }
}
 
class FireMonster extends Monster{
    constructor(name){
        super(name);
    }
    attack(){
        super.attack(); // att använda method från super klass, annars den blir skriven över
        console.log(`${this.name} is fire ball`);
    }
}

class WaterMonster extends Monster{
    constructor(name){
        super(name);
    }
    attack(){
        console.log(`${this.name} sending water`);
        super.attack();
    }
}

class StoneMonster extends Monster{}

const fm=new FireMonster('Blazor');
const wm=new WaterMonster('Wateruz');
const sm=new StoneMonster('Stone');
fm.attack();
wm.attack();
sm.attack();
