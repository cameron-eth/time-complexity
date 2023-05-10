function unshiftTest(n) {
    const arr = [];
  
    for (let i = 0; i < n; i++) {
      arr.unshift(i);
    }
    
    return arr;
}