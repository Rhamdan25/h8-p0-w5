function makanTerusRekursif(waktu) {
    // you can only write your code here!
    var counter = 0
    if (waktu <= 0){
        return counter
    }
    else {
        counter ++
        return counter + makanTerusRekursif(waktu-15)
    }
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0