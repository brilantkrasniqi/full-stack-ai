import { readFile } from 'node:fs/promises'
const unit = process.env.UNIT
if (process.argv[2] === undefined) {
  console.error('Usage: node stats.js <file.json>')
  process.exit(1)
}
const text = await readFile(process.argv[2], 'utf-8').catch(err => {
  console.error(`Could not find file: ${process.argv[2]}`)
  process.exit(1)
});
const data = JSON.parse(text);
const totalVolume = data.reduce((sum,n) => {
  const sessionVolume = n.volume;
  return sum + sessionVolume
},0)
console.log(`${totalVolume} ${unit !== undefined ? unit : 'kg'}`)

const [...bodyParts] = new Set (data.map(session => session.bodyPart))
function dayCounter(part) {
  const days = data.filter(session => session.bodyPart === part ).length
  return console.log(`You've worked out ${part} ${days} times out of your sessions`)
}
bodyParts.forEach(part => dayCounter(part))
function findSessionOverSixy() {
  const sessionSixtyPlus = data.find(session => session.sessionTime > 60)
  if (sessionSixtyPlus === undefined) {
    return `No session over 60 minutes found`
  }
  return (sessionSixtyPlus.date !== undefined && sessionSixtyPlus.date !== null) ? `You've had your fist hour long session on ${sessionSixtyPlus.date}` : `You've had a hour longs session but no date is valid`
}
console.log(findSessionOverSixy())

const sessionsWithoutDate = data.some(session => session.date === undefined || session.date === null)
console.log(`${sessionsWithoutDate ? 'Some session are missing dates': 'No session is missing date'}`)

const allExercises = data.flatMap(session => session.exercises)
console.log(allExercises)