module.exports = function towelSort (matrix) {
  if(matrix == undefined){
    return []
  }
  var result = []
  for (let i=0; i< matrix.length; i++){
    if (i%2 == 0){
        result = result.concat(matrix[i])
    } else {  
        result = result.concat(matrix[i].reverse())
    }
  }
  return result;
}