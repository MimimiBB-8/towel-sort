module.exports = function towelSort (matrix) {
  if(matrix == undefined){
    return []
  }
  var result = []
  for (let i=0; i< matrix.length; i++){
    if (i%2 == 0){
      result.push(...matrix[i])
    } else {  
      result.push(...matrix[i].reverse())
    }
  }
  console.log(result)
  return result;
}