const EventEmitter=require('events');

class Emitter extends EventEmitter{
    greet(name) {
        this.emit('greet',name)
    }
}

const myEmitter=new Emitter()

// myEmitter.on('hej',()=>console.log('Eventet kördes'));

// myEmitter.emit('hej');
//prenumerera på event greet, när event inträffar göra console.log
myEmitter.on('greet', (data) => console.log('Hej '+data));

// när vi kör metod greet , vi skickar data till metoden,
// som sedan emiterar event greet med data i variable name
myEmitter.greet('Joakim');
myEmitter.greet('Hans');
