class Person{
    constructor(name){
        this.name=name;
    }

    hello(){
        console.log('Hello ' +this.name)
    }
}

const  p = new Person("ErezOren");
p.hello();



function demo(){
    if (2<5){
        var foo=10;
        bar=20;
    }
    console.log(foo);

}

demo();


