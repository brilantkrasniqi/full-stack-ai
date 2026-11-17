import gymDays from "./data.js";

const totalVolume = gymDays.reduce((sum, n) => {
  return sum + n.volume;
}, 0);
// console.log(totalVolume);

const legDays = gymDays.filter(days => days.bodyPart === 'legs');
// console.log(legDays)
const exercises = gymDays.flatMap(day => day.exercises);
// console.log(exercises)
const firstLongSession = gymDays.find(day => day.sessionTime > 60)
console.log(firstLongSession)
const missingDate = gymDays.some(day => (day.date === undefined) || (day.date === null))
console.log(missingDate)