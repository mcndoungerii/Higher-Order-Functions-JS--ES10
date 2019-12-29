const startAt = performance.now();

for (let i = 0; i < 234567323; i++) {
  console.log(i);
}

const endAt = performance.now();

console.log(`It took ${endAt - startAt} milliseconds to execute`);
