(function() {
    'use strict';
  
    // ---------------------
    // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
    // ---------------------

    // The function name is max. Taking in 2 parameters num1 and num 2. And then in the if statement I am checking if num1 is greater than num 2, if so we return num1 and stop the function. Otherwise it runs the else and returns num2 as the max number.
  function max(num1, num2){
    if (num1 > num2){
        return num1;
    }else{
        return num2
    }}
    
  
    // ---------------------
    // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    // ---------------------

    // Made a function called maxOfThree. It takes 3 parameters and then we run the if statement. First line is checking if num1 is the largest, if so we return it and the function ends. Same thing for the else if line but checking if num 2 is the largest if so the function stops. The else statement only runs if num3 is the largest and the function ends.
  function maxOfThree(num1, num2, num3){
      if (num1 > num2 && num1 > num3){
        return num1
      }else if (num2 > num1 && num2 > num3){
          return num2
      }else{
          return num3
      }
  }
  

  
  
    // ---------------------
    // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    // ---------------------

    // The functions takes one parameter which is char. The if statement checks if char is any of the vowels listed, if so it returns true and the function ends. If not the else statement returns as true and the function ends.
    
    //isVowel takes a char parameter, the if statement checks for any vowels to return true. If it does not then returns false 

  function isVowel(char){
      if(char == 'a'|| char =='e'|| char =='i'||char =='o'||char =='u'){
      return true;
      }else{
      return false;
  }}

//   function isVowel(char) {
//       if('aeiou'.includes(char)){
//           return true;
//       }
//       return false;
//   }
  
  
    // ---------------------
    // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------
  
  function rovarspraket(text){
      textArr= text.toLowerCase().split('');
      for(let i=0; i< textArr.length; i++) {
      if('bcdfghjklmnpqrstvwxyz').includes(text[i])){
          textArr[i] = textArr[i] + 'o' + textArr[i];
      }
    }
      return textArr.join('');
  }

  
  
    // ---------------------
    // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    // ---------------------
    
    // sum takes in one parameter arr. Next we get the length of the input to know how many times to loop, then we loop through each input from the array one at a time adding to the previous number which is total. Same for the multiply function except the loop is multiplying each number with the previous
    function sum(arr) {
        let length = arr.length;
        let total = 0;
        for (let i = 0; i < length; i++) {
          total += arr[i];
        }
        return total;
      };
      
      function multiply(arr) {
        let length = arr.length;
        let total = 1;
        for (let i = 0; i < length;  i++) {
          total *= arr[i];
        }
        return total;
      };

    //   const sum = arr => arr.reduce((acc, i) => acc + i);
    
  
    // ---------------------
    // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
    // ---------------------
    // The function takes one parameter str, the for loop begins at the end of the string adding each character as it loops towards the beginning
  function reverse(str){
    let newString = '';
    for(let i= str.length -1; i >=0; i--){
        newString += str[i]
    }
    return newString;
  }
  
  const reverse = string => string.split('').reverse().join('');
  
    // ---------------------
    // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
    // ---------------------
    function findLongestWord(arr){
        let length = arr.length
        let count = 0
        for(let i= 0; i < length; i++){
            if(length[i] > count){
                count = length[i];
            }
        }
        return count;

    }

  
  
  
    // ---------------------
    // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
    // ---------------------
    // the function takes in two parameters array and int. The first variable gets the length of the array that had been input, the second variable establishes the array for the return. The loop runs through each input and checks if each word is longer than the input of second parameter int
    function filterLongWords(arr, int){
        let length = arr.length;
        let longestWords = [];
        for (i = 0; i < length; i++) {
          if (arr[i].length > int) {
            longestWords[longestWords.length] = arr[i];
          }
        }
        return longestWords;
      }

    //   const filterLongWords = (arr,i) => arr.filter(word.length > i)
  
  
    // ---------------------
    // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
    // ---------------------
  function charFreq(str){
      const freqList = {};
      for(let i =0; i<str.length; i++){
          if(freqList[str[i]]){
            freqList[str[i]] = freqList[str[i]] + 1;
          }else{
              freqList[str[i]] = 1
          }
      }
  }
  return freqList;

  
    ////////////////////////////////////////////////////////////////////////
    /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
    ////////////////////////////////////////////////////////////////////////
  
    console.assert(max(2, 4) === 4, 'function max error');
  
    console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');
  
    console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');
  
    console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');
  
    console.assert(isVowel('a') === true, 'ERROR function isVowel');
  
    console.assert(isVowel('b') == false, 'ERROR function isVowel');
  
    console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');
  
    console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');
  
    console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');
  
    console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');
  
    console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');
  
    console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
  })();