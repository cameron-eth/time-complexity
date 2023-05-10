function popTest(arr) {
  const n = arr.length;
      
  for (let i = 0 ; i < n ; i++) {
  console.time('pop')
  arr.pop();
  console.timeEnd('pop')
  }
        
  return arr;
  }
  
  let arrayPopulator = (num) => {
      let res = []
      for(let i = 0; i < num; i++){
          res.push(i)
      }
      return res
}
console.time('finalAnswer');
popTest(arrayPopulator(125222))
console.timeEnd('finalAnswer');
  