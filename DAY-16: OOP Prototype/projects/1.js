// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

  var Vehicle = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Car = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Truck = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.cargo = [];
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };

    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };

    this.unloadCargo = function() {
      return this.cargo.pop();
    };
  };
// =========================================================//

var Vehicle = function(driver, type, speed) {
  //Shared Property
  let sharedProp = {
    driver: driver,
    speed: speed,
    drive: function(mph) {
      speed = mph;
      return `${driver} driving at ${mph} miles per hour`;
    }
  }
  if (type == 'Car') {
    // new Car Object
    var Car = Object.create(null);
    Car.share = sharedProp;
    Car.name = 'Car';
    console.log(sharedProp.drive(speed));
    return Car;
  } else if (type === 'Truck') {

    // new Truck Object
    var Truck = Object.create(null);
    Truck.share = sharedProp;
    Truck.name = 'Truck';
    console.log(sharedProp.drive(speed));
    Truck.cargo = [];

    // Loading Cargo
    Truck.loadCargo = function(cargo) {
      Truck.cargo.push(cargo);
      return Truck;
    }

    // Unloading Cargo
    Truck.unloadCargo = function() {
      return Truck.cargo.pop();
    }
    console.log(Truck.loadCargo('Books'));
    console.log(`Debuggggggggggggggggggggggggggggggggg`);
    console.log(Truck.unloadCargo());
    return Truck;
  }
};

var Car = new Vehicle('Shubh', 'Car', 110);
console.log(Car);

var Truck = new Vehicle('Ankit', 'Truck', 90);
console.log(Truck);



// Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out.

function Person(name) {
  this.name = name;
}
Person.prototype.teach = function(subject) {
  return `${this.name} teaches ${subject}`;
}

let Teacher = new Person('Shubh');
console.log(Teacher.teach('JavaScript'));
console.log(Teacher);