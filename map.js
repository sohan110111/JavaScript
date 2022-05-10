const zawad = new Map();
zawad.set('fullName', 'Zawad Ahmed');
const getValue = zawad.get('fullName');
console.log(zawad);
console.log(getValue);
console.log(zawad.has('fullName')); // value check
console.log(zawad.has('something'));
zawad.set('toberemoved', 'willberemoved');
console.log(zawad.has('toberemoved'));
zawad.delete('toberemoved'); //for delete
console.log(zawad.has('toberemoved'));
zawad.clear(); // for clear zawad map
console.log(zawad); // Map(0) {size: 0}

const favorite = new Map();
favorite.set('name', 'Zonayed Ahmed');
favorite.set('job', 'student');
favorite.set('color', 'blue');
favorite.set('os', 'ubuntu');
favorite.set('mobileos', 'android');
console.log(favorite);
console.log(favorite.size);
favorite.forEach((value, key) => console.log(`Key is: ${key} and the value is: ${value}`));

for(let [key, value] of favorite.entries()) {
   console.log(`Key is: ${key} and the value is: ${value}`);
}