Getter; // Only change code below this line
class Thermostat {
  constructor(gradosF) {
    this._gradosF = gradosF;
  }
  get temperature() {
    return (5 / 9) * (this._gradosF - 32);
  }
  set temperature(gradosC) {
    this._gradosF = (gradosC * 9) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
