const number = 23;
// string, number, boolean
if(typeof number === 'number'){
    console.log('value is a number')
}
else{
    console.log('value is not a number');
}

const numbers = [3, 12, 78, 90];
console.log(Array.isArray(numbers));

const student = {name: 'munim', job: 'developer'}
console.log(typeof student);
console.log(Array.isArray(student));
