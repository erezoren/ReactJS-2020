class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

}


class Race{

    constructor(car1,car2){
        this.carList=[car1,car2]
    }

    add(car){
        this.carList.push(car);
    }

    getWinner(){
      return this.carList.sort((c1,c2)=>{
            return c1.speed-c2.speed
        }).reverse()[0];
    }
}


const c1 = new Car('blue', 20);
const c2 = new Car('green', 30);
const c3 = new Car('red', 24);

const race = new Race(c1, c2);
race.add(c3);

// prints: And the winner is... green
console.log(race.getWinner());