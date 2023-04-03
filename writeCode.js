function sumZero (arr) {
    let firstNum = arr[0]
    let lastNum = arr[arr.length -1]
    let addNum = firstNum + lastNum 

    if(addNum === 0) {
        return true
    }else{
        return false
    }
}

// console.log(sumZero([2,3,-2]))

// Q: What is the time complexity of this function?
// ANSWER: const 

function uniqueChars (str) {
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if (str[i] == str[j]){
                return false;
            }else{
                return true
            }
        }
    }
}

// console.log(uniqueChars("Moonday"))

// Q: What is the time complexity of this function?
// ANSWER: quadratic 


function pangram (s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
   
   return true;
}

// console.log(pangram('river was here'))

// Q: What is the time complexity of this function?
// ANSWER: linear


function longestWord (str){
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
}

// console.log(longestWord('Hello i am from mississippi'))

// Q: What is the time complexity of this function?
// ANSWER: linear 