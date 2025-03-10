// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, names){
  return drivers.filter(driver => driver.toLowerCase() === names.toLowerCase());

}
console.log(findMatching("Bobby"));
console.log(findMatching("Sally"));
console.log(findMatching("Annette"));
console.log(findMatching("Sarah"));
console.log(findMatching ("Bobby"));


function fuzzyMatch(persons, letters){
  return persons.filter(person => person.toLowerCase().startsWith(letters.toLowerCase()));

}
const persons= ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
console.log(fuzzyMatch("Sa"));
console.log(fuzzyMatch("Bo"));
console.log(fuzzyMatch("An"));


const matches = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];
function matchName(matches, name){
return matches.filter(match => match.name.toLowerCase() === name.toLowerCase());
}
console.log(matchName(matches, "Bobby"));
console.log(matchName(matches, "Bobby"));