const object1 = {
  a: 'somestring',
  b: 42,
  c: 3456789
};
console.log(object1) // Object { a: "somestring", b: 42, c: 3456789 }
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
