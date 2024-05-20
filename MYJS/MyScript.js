class Student {
    constructor(name,age){

        this.name = name ;
        this.age = age ;
        //console.log("Hello I am Constructors");
    }
}
const std = new Student("Adil", 22);
console.log(std.name);
console.log(std.age);

const std1 = new Student("Khan", 30);
console.log(std1.name);
console.log(std1.age);