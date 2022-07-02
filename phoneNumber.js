createPhoneNumber = arr => {
  let strNumbers = '';
  console.log(
    "A program that allows you to enter 10 numbers and return it's phone number like version."
  );
  for (let i = 0; i < arr.length; i++) {
    strNumbers += arr[i];
  }
  const a = strNumbers.slice(0, 3);
  const b = strNumbers.slice(3, 6);
  const c = strNumbers.slice(6);
  return `(${a}) ${b}-${c})`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// assert.strictEqual(
//   createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
//   '(123) 456-7890'
// );
