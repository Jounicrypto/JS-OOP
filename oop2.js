/* 
    Encapsulation
    --Class Fields Are Public By Default
    --Guards The Data Against Illegal Access
    --Helps To Achieve The Target Without Revealing its Complex Details
    --Will Reduce Human Errors
    --Make The App More Flexible And Manageable
    --Simplifies The App
*/


class User {
    //Private Property
    #e;
    constructor(id, username, eSalary){
        this.i  = id;
        this.u  = username;
        this.#e = eSalary;
    }
    getSalary(){
        return parseInt(this.#e)
    }
}

let userOne = new User(23422, "John", "5000 Euro")


console.log("Hello " + userOne.u,"your salary is " + userOne.getSalary())
