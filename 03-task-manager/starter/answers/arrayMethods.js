'use strict';

const names = [
  'Dimitry SantiAgo',
  'Carlos d. Perez',
  'tam  person',
  'Mariana Gomez',
  'Amy You'
];

// Create a new array with only each person's last name
let lastNames = names.map((name) => {
  let nameArray = name.split(' ');
  let lastName = nameArray[nameArray.length - 1];
  return lastName;
});
console.log(lastNames);

// Filter names that don't match the format "<first> <last>
let formatNames = names.filter((name) => {
  let nameArray = name.split(' ');
  return !(nameArray.length > 2);
});
console.log(formatNames);

// Create a new array where everyone's name is converted to "Title Case"
let titledNames = names.map((name) => {
  let newArray = [];
  let nameArray = name.split(' ');
  for (let element of nameArray) { 
    // capitalize first char of each element in the nameArray array and concat to the other char(s)
    // push the capitalized element to a new array
    newArray.push((element.slice(0, 1).toUpperCase().concat(element.slice(1))));  
  }
  // Join the name elements in the nameArray to form a string/name
  return newArray.join(' ');  
});
console.log(titledNames);


// chaining methods
let toSignUpNames = names.filter((name) => {
  let nameArray = name.split(' ');
  // Remove names with the wrong format
  return !(nameArray.length > 2);
})
  .map((name) => {
  let newArray = [];
  let nameArray = name.split(' ');
  
  for (let element of nameArray) {
    newArray.push(element.slice(0, 1).toUpperCase().concat(element.slice(1)));
  }
  // AND change it to "Title Case"
  return newArray.join(' ');
})
  .filter((name) => {
  let nameArray = name.split(' ');
  let lastName = nameArray[nameArray.length -1];
  // AND remove people whose last name ends with z
  return !(lastName.endsWith('z'));
});
// AND write a message asking them to sign up
for (let name of toSignUpNames) {
  console.log(`Dear ${name}, kindly sign up to our website.`);
}
console.log(toSignUpNames);
