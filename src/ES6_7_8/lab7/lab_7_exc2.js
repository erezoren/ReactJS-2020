class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

}

class Race {
  constructor(...cars) {
    this.carList = [...cars];
  }

  add(car) {
    this.carList.push(car);
  }

  getWinner() {
    return this.carList.sort((c1, c2) => c2.speed - c1.speed)[0]
  }
}

const c1 = new Car('blue', 20);
const c2 = new Car('green', 30);
const c3 = new Car('red', 24);

const race = new Race(c1, c2);
race.add(c3);

console.log('And the winner is...' + race.getWinner().color);