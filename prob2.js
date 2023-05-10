function pushTest(n) {
    const arr = [];
  
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
  
    return arr;
  }

/* let n = 100000;
console.time(`pushTest(${n}): `);
pushTest(n);
console.timeEnd(`pushTest(${n}): `);
*/