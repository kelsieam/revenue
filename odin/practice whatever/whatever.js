let head = {
    glasses: 1
};

let table = {
    pen: 3,
};

let bed = {
    sheet: 1,
    pillow: 2,
};

let pockets = {
    money: 2000,
};

console.log(pockets.pen)

Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);

console.log(pockets.pen)


function Person(name) {
    this.name = name
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}`)
}


function Player(name, marker) {
    this.name = name
    this.marker = marker
}

Player.prototype.getMarker = function() {
    console.log(`My marker is ${this.marker}`)
}

Object.setPrototypeOf(Player.prototype, Person.prototype);

  
const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();