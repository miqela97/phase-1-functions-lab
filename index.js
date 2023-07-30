// index.js

function distanceFromHqInBlocks(streetNumber) {
  return Math.abs(streetNumber - 42);
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// Helper function for distanceTravelledInFeet
function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(start - destination) * feetPerBlock;
}

module.exports = {
  distanceFromHqInBlocks,
  calculatesFarePrice,
};
function distanceFromHqInFeet(streetNumber) {
  const feetPerBlock = 264; // Assuming each block is 264 feet.
  return Math.abs(streetNumber - 42) * feetPerBlock;
}

module.exports = distanceFromHqInFeet;