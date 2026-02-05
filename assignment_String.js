// Assignment Details:  
// Given a string s consisting of words and spaces, return the length of the last word in the string. 
// Example 1: 
// Input: s = "Hello World" 
// Output: 5 
// Explanation: The last word is "World" with length 5. 
// Example 2:  
// Input: s = "   fly me   to   the moon  " 
// Output: 4 
// Explanation: The last word is "moon" with length 4. 
// Example 3:  
// Write a function to check if two strings are anagrams. 
//  Input: isAnagram('listen', 'silent') 
//  Output: true 
//  Input: isAnagram('hello', 'world')  
//  Output: false 
//  Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. 

//Example 1:
let s = "hello world";
 let trimmed = s.trim();                // Remove extra spaces
 let words = trimmed.split(" ");        // Split into words
let lastWord = words[words.length - 1]; // Get last word
console.log(lastWord)
console.log(lastWord.length);

//Example 2:
let  input = "   fly me   to   the moon  " 
let trim1=input.trim()
console.log(trim1)
let words1=trim1.split(" ")
console.log(words1.length)
let lastWord1=words1[words1.length - 1] // To get last word index then its starts from -1
console.log(lastWord1)
console.log(lastWord1.length)



//Example 3:
let str1="ra ce"
let str2="care"
function isAnagram( str1, str2){
// Remove spaces and convert to lowercase
str1 = str1.replace(/\s+/g, '').toLowerCase();
console.log(str1)
str2 = str2.replace(/\s+/g, '').toLowerCase();//Check if lengths are equal
if (str1.length !== str2.length) return false;

// Sort and compare
return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example usage
console.log(isAnagram(str1, str2)); // true
//console.log(isAnagram("hello", "world")); // false
