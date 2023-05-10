function pushTest(n) {
    const arr = [];

  for (let i = 0; i < n; i++) {
    const startTime = Date.now()
      arr.push(i);
    const endTime = Date.now()
    const elapsedTime = endTime - startTime;
    console.log(`Time Elapsed: ${elapsedTime}`)

    }

    return arr;
  }

let n = 100000;
console.time(`pushTest(${n}): `);
pushTest(n);
console.timeEnd(`pushTest(${n}): `);
