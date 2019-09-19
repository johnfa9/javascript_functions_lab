// Question 1
function maxOfTwoNumbers(one,two) {
    if (one>two){
      return one;
    }
    else {
      return two;
    }
  }

// Question 2
function maxOfThree(one,two,three) {
    return Math.max(one,two,three);
  }

// Question 3
function isCharacterAVowel(vowel) {
    var arr=['a','e','i','o','u'];
    if (arr.indexOf(vowel) !==-1){
      return true;
    }
    else {
      return false;
    }
  }

// Question 4: Part 1
function sumArray(arr) {
    let total=0;
    for (let i=0;i<arr.length;i++){
      total+=arr[i];
    }
    return total;
  }

// Question 4: Part 2
function multiplyArray(arr) {
    let total=1;
    for (let i=0;i<arr.length;i++){
      total*=arr[i]
    }
    return total;
  }

// Question 5
const numberOfArguments = function(arr) {
    return arr.length;
  }

// Question 6
const reverseString = function(myStr) {
    return myStr.split('').reverse().join('')
  }

// Question 7
function findLongestWord(arr) {
    let longest=0;
    for (let i=0;i<arr.length;i++){
        if (arr[i].length>longest){
          longest=arr[i].length;
        } 
    }
    return longest;
  }

// Question 8
function filterLongWords(arr,len) {
    var total=arr.filter(function (element){
      return element.length>len;
    });
    return total;
}

// Bonus 1
function charactersOccurencesCount() {

}
