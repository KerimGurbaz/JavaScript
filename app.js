// let size = 3;


// multiplicationTable = function(size) {
//     let arr = []
  
//     for(let i = 1; i<=size; i++){
//         let newArr = []
//         for(let ii = 1; ii<=size; ii++){
//             newArr.push(i*ii)
//         }
//         arr.push(newArr)
//     }
//     return arr
//   }
  
//  console.log( multiplicationTable(size))

// num  =-5099

// function isPrime(num) {
//     let sonuc = true
//    if(num <= 1){
//     sonuc =  false
//     console.log(sonuc)
//    } else {
//    for(let i = 2;  i<num; i++){
//     if(num%i == 0){
//       sonuc = false
//     }
//    }

//    }
// return sonuc
// }
//   console.log(isPrime(num))

// let num = 

// function isPrime(num) {
//     if(num<2){
//         return false
//     }else if(num ==2){
//         return true
//     }else{
//        for(let i = 2; i < num ; i++){
//         if(num % i == 0){
//            return false
//         }else{
//          return true
//         }
//        }
//     }
//   }
  
//   console.log(isPrime(num))


function isPrime(num) { 
    if (num < 2) return false;  
    for (var i=2; i<num; i++) {  
    if (num % i == 0) {  
    return false;}}  
    return true;  
    }

    console.log(isPrime(17))