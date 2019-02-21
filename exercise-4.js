function totalDigitRekursif(angka) {
    // you can only write your code here!
    if (angka === 0 ){
        return 0
    }
    else{
        var a = angka.toString()
        firstNum = Number (a[0])
        var newAngka = Number (a.slice(1)) 
        return firstNum + totalDigitRekursif(newAngka)
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5

//   b = []
//   c = Number(b)

//   console.log(c)