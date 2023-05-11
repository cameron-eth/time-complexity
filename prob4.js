function unshiftTest(n) {
    const arr = [];

  for (let i = 0; i < n; i++) {
      console.time('unshift')
      arr.unshift(i);
      console.timeEnd('unshift')
    }

    return arr;
}

console.time("finalAnswer");
unshiftTest(1234567)
// popTest(arrayPopulator(125222));
console.timeEnd("finalAnswer");
//total time: 4:03.306
