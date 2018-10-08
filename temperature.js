// The forecast today
let kelvin = 293;

// Celsius is 273 less than Kelvin
let celsius = kelvin - 273;

// Convert to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Round number stored to fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert celsius to the Newton scale
let newton = celsius * (33 / 100);

// Round Newton temperature number down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);