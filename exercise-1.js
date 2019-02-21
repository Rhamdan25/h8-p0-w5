function sorting(arrNumber) {
    // code di sini
    var result = arrNumber;
    for (var i = 0 ; i < result.length ; i++){
        for (var j = i ; j < result.length ; j++){
            var temp = result[i];
            if ( result [j] > result [i]){
                result [i] = result [j];
                result [j] = temp;
            }
        }
    }
    return result
}
  
  function getTotal(arrNumber) {
    // code di sini
    if (arrNumber.length === 0){
        return " "
    }
    var counter = 0;
    for (var i = 0 ; i < arrNumber.length ; i++){
        if ( arrNumber[i] = arrNumber[0]){
            counter += 1;
        }
    }

    return "angka paling besar adalah " + arrNumber [0] + " dan jumlah kemunculan sebayak " + counter + " kali "
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''