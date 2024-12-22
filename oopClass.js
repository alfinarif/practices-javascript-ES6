
class myClass {


    myFunction() {
        console.log("I am from function inside Class");
    }

    sumFunc(a, b){
        console.log(a + b);
    }


}


const myObject = new myClass(); // created object of "myClass" class;
// myObject.myFunction(); // calling myFunction() method of "myClass" class;
// myObject.sumFunc(3, 5); // calling sumFunc() method of "myClass" class;



// CLASS CONSTRUCTOR METHOD
class myConsClass {

    constructor(a , b){
        this.firstNum = a;
        this.secondNum = b;
    }

    addFunc(){
        let result =  this.firstNum + this.secondNum;
        console.log(result);
    }

}

const object = new myConsClass(10, 20); // created object of "myConsClass" class;
// object.addFunc(); // calling addFunc() method of "myConsClass" class;




// STATIC KEYWORD
class myStaticClass{

    static hello(){
        console.log("this is static method");
    }

}
// const staticObject = new myStaticClass();
// staticObject.hello(); // now this will give error
// myStaticClass.hello() // this will work fine;





// CLASS INHERITANCE use to access parant class methods from child class;
class ParantClass{
    
    helloOne(){
        console.log("Hello One Function");
    }

    helloTwo(){
        console.log("Hello Two Function");
    }
}


class ChildClass extends ParantClass{

    // Overriding helloOne() method of ParantClass;
    helloOne(){
        console.log("Child modified Hello One Function");
    }

}

const obj = new ChildClass();
// obj.helloOne();
// obj.helloTwo();




// SUPER KEYWORD use to access parant class methods directly;
class ParantClassTwo{

    helloOne(){
        console.log("Hello One Function for Super Keyword");
    }

    helloTwo(){
        console.log('Hello Two Function for Super Keyword');
    }

}

class ChildClassTwo extends ParantClassTwo{

    helloThree(){
        super.helloOne();
        super.helloTwo();
    }

}

const objTwo = new ChildClassTwo();
objTwo.helloThree();


















































