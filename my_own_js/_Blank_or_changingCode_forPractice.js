function findUniq(arr) {
  var arrays = [];
  for(let i = 0; i < arr.length; i++) {
    var filtered = arr.filter((val) => {
      return val === arr[i];  
    });
    arrays.push(filtered);
  }
  for(let i = 0; i < arrays.length; i++) {
    if(arrays[i].length === 1) {
      var result = arrays[i][0];
      return result;
    }
  }
}