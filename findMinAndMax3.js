// Answer 3
function getMinMax(arr){
    let [min, max] = [arr[0], arr[0]]
    
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] > max) 
        max = arr[i]
      else if(arr[i] < min)
        min = arr[i]
    }
   
    return [min, max]
}
