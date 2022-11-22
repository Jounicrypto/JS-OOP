/*
Prototype
    --Introduction
    --Prototypes are the mechanism by which JavaScript Objects
    --Inherit features from one another
    --Add  To Prototype Chain
    --Extends Built In Constructors Features
*/

class User {
    constructor(id, username){
        this.i = id;
        this.u = username;
    }
    sayHello(){
        return `Hello ${this.u}`
    }
}

let userOne = new User(23, "chris",);

console.log(User.prototype)

User.prototype.sayWelcome = function (){
    return `Welcome ${this.u}`
}

Object.prototype.love = "Adnan";

String.prototype.addDotBeforeAndAfter = function(val){
    return `.${this}.`
}

let myString = "School"