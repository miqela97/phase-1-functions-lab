
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}
function distanceFromHqInFeet(street) {
  const feetPerBlock = 264;
  return Math.abs(street - 42) * feetPerBlock;
}
function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(start - destination) * feetPerBlock;
}
function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) return  0;
  if (distance > 400 && distance < 2000) return (distance - 400) * .02;
  if (distance > 2000 && distance < 2500 ) return 25;  
  if (distance > 2500) return "cannot travel that far";
}
// function calculatesFarePrice(start, destination){
//   const distance = distanceTravelledInFeet(start, destination);
// let fare;
// if (distance <= 400)
// { 
// return 0;
// }
// if (distance > 400){
//   fare = (distance - 400) * 0.02;
//   return fare;
// }
// if (distance > 2000 && distance < 2500) {
//   fare = 25;
//   return 25;
// }
// if (distance >= 2500) {
//   return "cannot travel that far";
// }
// }
