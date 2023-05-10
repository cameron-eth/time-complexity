function randomNumberArr(max) {
  const res = new Array();

  for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(max));
    console.time("randomNumber")
    res.push(randomNumber);
    console.timeEnd("randomNumber")
  }

  return res;
}
randomNumberArr(1000000)

/* Directions
randomNumberArr generates an array of random numbers of size max. For example, 
you can use max inputs of 1, 10, 100, 1,000, 10,000, and 100,000. 
If you decide to use inputs of size larger, your terminal may hang while executing. 
If this happens, press Ctrl + C to stop the execution.
*/