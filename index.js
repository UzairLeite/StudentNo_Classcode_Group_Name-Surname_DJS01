/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Utility function to convert velocity from km/h to m/s
const convertKmHtoMS = (kmh) => kmh * 1000 / 3600;

// Utility function to convert velocity from m/s to km/h
const convertMStoKmH = (ms) => ms * 3600 / 1000;

// Calculate new distance
const distanceTraveledInKm = velocity * (timeInSeconds / 3600); // velocity in km/h to km traveled in time
const newDistance = initialDistance + distanceTraveledInKm;

// Calculate remaining fuel
const fuelUsed = fuelBurnRate * timeInSeconds;
const newRemainingFuel = remainingFuel - fuelUsed;

// Corrected `calcNewVel` function with input validation
const calcNewVelocity = (initialVelocity, acceleration, time) => {
  if (typeof initialVelocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error("All parameters must be numbers.");
  }
  if (time < 0) {
    throw new Error("Time cannot be negative.");
  }
  if (acceleration < 0) {
    throw new Error("Acceleration cannot be negative.");
  }

  const initialVelocityInMS = convertKmHtoMS(initialVelocity);
  const newVelocityInMS = initialVelocityInMS + (acceleration * time);
  return convertMStoKmH(newVelocityInMS); // return result in km/h
};

// Calculate new velocity with the validated function
const newVelocity = calcNewVelocity(velocity, acceleration, timeInSeconds);

// Output Results
console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${newRemainingFuel.toFixed(2)} kg`);
