function shiftTest(arr) {
const n = arr.length;
for (let i = 0 ; i < n ; i++) {
    console.time('shift')
      arr.shift();
    console.timeEnd('shift')
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
console.time("finalAnswer");
shiftTest(arrayPopulator(123423))
console.timeEnd("finalAnswer");