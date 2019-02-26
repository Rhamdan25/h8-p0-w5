function sorting(arrNumber) {
    return arrNumber.sort()
}
  
function getTotal(arrNumber) {
    //console.log('ini sudah di getTotal '+arrNumber)
    //console.log(arrNumber.length)
    //cari huruf2 yang ada, buat variabel baru 
    var angkaTerbesar=0
    var jumlahTerbesar=0
    for (i=0; i<arrNumber.length;i++){
        if (arrNumber[i] > angkaTerbesar){
            angkaTerbesar = arrNumber[i]
        }
    } //console.log(terbesar)-> sudah dapat nomor terbesar, sekarang cari indexnya
    
    //Filter dulu, kalo arraynya kosong, maka tampilkan empty stirng, selain itu lanjutkan
    if (angkaTerbesar ===0 ){
        return ''
    }
    //looping jumlah huruf terbesar yang ada di dalam array
    for (i=0; i<arrNumber.length; i++){
        if (angkaTerbesar===arrNumber[i]){
            jumlahTerbesar = jumlahTerbesar + 1
        }//tampilkan banyaknya jumlah huruf dalam 'numItung' dari huruf terbesar dalam 'numUtama'

    } //console.log(jumlahTerbesar) -> sudah dapat jumlah terbesar, 

    
    return 'angka paling besar adalah '+angkaTerbesar+' dan jumlah kemunculan sebanyak '+jumlahTerbesar+' kali'
}
  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}
  
   console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//   //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
   console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
   console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
   console.log(mostFrequentLargestNumbers([]));
//   //''

  console.log(mostFrequentLargestNumbers( [10, 2, 8, 4, 6, 8, 5, 8, 4]));