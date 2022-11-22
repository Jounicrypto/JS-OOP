/*
Object Meta Data And Descriptor
--Writable
--Enumerable
--Configurable  [Can't Be Deleted Or Reconfigure]
*/

const myObject = {
    
    a:1,
    b:2,
};

Object.defineProperties(myObject, "c", {
    writable: true,
    enumerable:true,
    configurable:true, //can't Redfine property
    value:3,
})

myObject.c = 100;

for (let prop in myObject){
    console.log(prop, myObject[prop])
}

console.log(myObject);


/*
Object Meta Data And Descriptor
--Define Multiple Properties
--Check Desciptors
*/

const myObject2 = {
    
    a:1,
    b:2,
};

Object.defineProperties(myObject2, {

    c:{
        configurable:true, //can't Redfine property
        value:6,
    },
    c:{
        configurable:true, //can't Redfine property
        value:12,
    },
    c:{
        configurable:true, //can't Redfine property
        value:14,
    },
})

console.log(myObject2);

console.log(Object.getOwnPropertyDescriptor(myObject2))
console.log(Object.getOwnPropertyDescriptors(myObject2))