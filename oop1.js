/* 
    Constructor Fuction
    New Syntax
    Deal With Properties and Methods
*/

class User {
    constructor(id, username, salary){
        //Proerties
        this.i = id;
        this.un = username;
        this.s = salary;

        this.msg = function (){
            return `Hello ${this.u} Your Salary Is ${this.s}`
        }
    }
    //Methods
    writeMsg(){
        return `Hello ${this.u} Your Salary Is ${this.s}`
    }
}

let userOne = new User(100, "Mike", 5000);



console.log(userOne.i);
console.log(userOne.un);
console.log(userOne.s);

console.log(userOne instanceof User);
console.log(userOne.constructor === User);



/* 
    Constructor Fuction
    Update Properties 
    Built In Constructors
*/

class Player {
    constructor(id, username, salary){
        //Proerties
        this.id = id;
        this.username = username;
        this.salary = salary;
    }
    updateName(newName){

        this.u = newName;
    }
}

let userThree = new Player(102, "Mike", 9000);

userThree.updateName("Michel")

console.log(userThree.u)

/* 
    Class
    --Static Properties And Methods
*/

class Members{
    //static Property
    static count = 0;
    constructor(name){

        this.name = name;
        Members.count++
    }
    //Static Methods
    static sayHello(){
        return `Hello From Class`
    }
    static countMembers(){
        return `${Members.count} Members Created`;
    }
}

let memOne = new Members("Adnan");
let memTwo = new Members("Nick");
let memThree = new Members("Damien");
let memFour = new Members("Tim");

console.log(Members.count)
console.log(Members.sayHello())
console.log(Members.countMembers())


/* 
    Class
    --Inheritance
*/

//Parent Class
class Ownership {
    constructor(nickname, age){

        this.nickname = nickname;
        this.age = age;
    }
    sayHi(){
        return `Hello ${this.nickname}`
    }
}

//Derived Class
class Admin extends Ownership{
    constructor(nickname, age, permissions){
        super(nickname, age);
        this.p = permissions
    }
}

let ownerShip = new Ownership("Adnan", 25)

let adminOne = new Admin("Nelson" , 32, true)


console.log(ownerShip.sayHi(), ownerShip.age)
console.log(adminOne.nickname , adminOne.age, adminOne.p)


