function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var a = angka.toString()
    if (a.length === 1){
        return angka
    }
    else {
        result = 1
        for (i = 0 ; i < a.length ; i++){
            result *= a[i]
        }
        return kaliTerusRekursif(result)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6