function changeVocals (str) {
    //code di sini
    var vowel = "aiueoAIUEO"
    var changeVowel = "bjvfpBJVFP"
    var result = ""
    for (var i = 0 ; i < str.length ; i ++ ){
        temp = str[i]
        for (var j = 0 ; j < vowel.length ; j ++){
            if (temp === vowel[j]){
                temp = changeVowel[j];
            }
        }
        result += temp

    }
    return result
  }
  //TEST
//   console.log(changeVocals("test"))


  function reverseWord (str) {
    //code di sini 
    var result = "";
    
    for (var i = str.length-1 ; i >=0 ; i --){
        result += str[i];
    }
    return result;

  }

  //TEST
//   console.log(reverseWord ("Test"))
  
  function setLowerUpperCase (str) {
    // code di sini
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = 0 ; i < str.length ;i++){
        for (var j = 0 ; j < lower.length ; j++){
            if (str[i] === lower [j]){
                result += upper[j];
            }
            else if (str[i] === upper [j]){
                result += lower[j];
            }
        }
    }
    return result
  }

  //TEST
//   console.log(setLowerUpperCase ("TeSt"))
  
  function removeSpaces (str) {
    //code di sini
    var result = "";

    for (var i = 0 ; i < str.length ; i ++){
        if ( str[i] !== " "){
            result += str[i];
        }
    }
    return result;
  }
  //TEST
//   console.log(removeSpaces("testing aja ya"))

  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5){
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }
    else {
    var result = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
    }    


    return result
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'