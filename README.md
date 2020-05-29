# Writing tests in Jest for the freeCodeCamp's Intermediate Algorithm Scripting Challenges

I've decided to start learning how to test the JavaScript code, that I write, and the framework I chose is [Jest](https://jestjs.io/en/).

Instead of coming up with some examples on my own, I've decided to use the functions that I wrote for the freeCodeCamp's [Intermediate Algorithm Scripting Challenges](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/) and write the tests in Jest.

## How To Use It

```
git clone https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting.git
cd Intermediate-Algorithm-Scripting
npm install
npm test
```

## Below you will find each challenge with a bit of description

[1. Sum All Numbers in a Range](#1-sum-all-numbers-in-a-range)

[2. Diff Two Arrays](#2-diff-two-arrays)

[3. Seek and Destroy](#3-seek-and-destroy)

[4. Wherefore art thou](#4-wherefore-art-thou)

[5. Spinal Tap Case](#5-spinal-tap-case)

[6. Pig Latin](#6-pig-latin)

[7. Search and Replace](#7-search-and-replace)

[8. DNA Pairing](#8-dNA-pairing)

[9. Missing letters](#9-missing-letters)

[10. Sorted Union](#10-sorted-union)

[11. Convert HTML Entities](#11-convert-HTML-entities)

[12. Sum All Odd Fibonacci Numbers](#12-sum-all-odd-fibonacci-numbers)

[13. Sum All Primes](#13-sum-all-primes)

[14. Smallest Common Multiple](#14-smallest-common-multiple)

[15. Drop it](#15-drop-it)

[16. Steamroller](#16-steamroller)

### 1. Sum All Numbers in a Range

#### Requirements

Given an array of two numbers, return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

Examples:

`sumAll([4, 1])` should return `10` because sum of all the numbers between `1` and `4` (both inclusive) is `10`.

```js
sumAll([1, 3]); // should return 6.
sumAll([3, 1]); // should return 6.
sumAll([4, 7]); // should return 22.
sumAll([7, 4]); // should return 22.
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/01.%20Sum%20All%20Numbers%20in%20a%20Range/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/01.%20Sum%20All%20Numbers%20in%20a%20Range/test.js)

### 2. Diff Two Arrays

#### Requirements

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

_Note_: You can return the array with its elements in any order.

Examples:

```js
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return [4].
diffArray([1, "breakfast", 3, "cat"], [7, "dog"]); // should return [1, "breakfast", 3, "cat", 7, "dog"].
diffArray([1, 2, 3], [1, 2, 3]); // should return an empty array.
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/02.%20Diff%20Two%20Arrays/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/02.%20Diff%20Two%20Arrays/test.js)

### 3. Seek and Destroy

#### Requirements

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

_Note_: You have to use the arguments object.

Examples:

```js
destroyer([1, 2, 1, 2], 1, 2); //  should return [].
destroyer(["flower", "sun", 10], "sun", 10); // should return ["flower"].
destroyer([35, 12, 2, 7, 15], 12, 2, 15, 7); // should return [35].
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/03.%20Seek%20and%20Destroy/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/03.%20Seek%20and%20Destroy/test.js)

### 4. Wherefore art thou

#### Requirements

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

Examples:

```js
whatIsInAName(
  [
    { first: "Ashlynn", last: "Little" },
    { first: "Ona", last: null },
    { first: "Noemie", last: "Rowe" },
  ],
  { last: "Rowe" }
); // should return [{ first: "Noemie", last: "Rowe" }].
whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 5, c: 3 }); // should return [].
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/04.%20Wherefore%20art%20thou/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/04.%20Wherefore%20art%20thou/test.js)

### 5. Spinal Tap Case

#### Requirements

Convert a string to spinal case. Spinal case is `all-lowercase-words-joined-by-dashes`.

Examples:

```js
spinalCase("Spinal Tap Case"); // should return "spinal-tap-case".
spinalCase("spinalTapCase"); // should return "spinal-tap-case".
spinalCase("Spinal_Tap_Case"); // should return "spinal-tap-case".
spinalCase("This is Spinal Tap-Case"); // should return "this-is-spinal-tap-case".
spinalCase("ThisIs-Spinal tap-Case"); // should return "this-is-spinal-tap-case".
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/05.%20Spinal%20Tap%20Case/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/05.%20Spinal%20Tap%20Case/test.js)

### 6. Pig Latin

#### Requirements

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

Examples:

```js
translatePigLatin("food"); // should return "oodfay".
translatePigLatin("fun"); // should return "unfay".
translatePigLatin("A"); // should return "away".
translatePigLatin("rhythm"); // should retutn "rhythmay".
translatePigLatin("schwartz"); // should return "artzschway".
translatePigLatin("The"); // should return "ethay".
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/06.%20Pig%20Latin/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/06.%20Pig%20Latin/test.js)

### 7. Search and Replace

#### Requirements

Perform a search and replace on the sentence using the arguments provided, and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

_Note_:
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog".

Examples:

```js
myReplace("Let's listen a song", "listen", "sing"); // should return "Let's sing a song".
myReplace("She is Running in the park", "Running", "walking"); // should return "She is Walking in the park".
myReplace("My favourite color is purple", "color", "colour"); // should return "My favourite colour is purple".
myReplace("His name is Bob", "Bob", "bruce"); // should return "His name is Bruce".
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/07.%20Search%20and%20Replace/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/07.%20Search%20and%20Replace/test.js)

### 8. DNA Pairing

#### Requirements

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]].

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Examples:

```js
pairElement("ATCGA"); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/08.%20DNA%20Pairing/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/08.%20DNA%20Pairing/test.js)

### 9. Missing letters

#### Requirements

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Examples:

```js
fearNotLetter("abce"); //  should return "d".
fearNotLetter("pqrstvw"); // should return "u".
fearNotLetter("abcdefghijklmnopqrstuvwxyz"); // should return undefined.
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/09.%20Missing%20letters/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/09.%20Missing%20letters/test.js)

### 10. Sorted Union

#### Requirements

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Examples:

```js
uniteUnique([1, 2, 3], [3, 5, 2]); // should return [1, 2, 3, 5].
uniteUnique([1, 5, 7], [3, 2, 4]); // should return [1, 5, 7, 3, 2, 4].
uniteUnique([1, 2, 3], [2, 3, 1], [1, 7], [4, 2, 1]); // should return [1, 2, 3, 7, 4].
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/10.%20Sorted%20Union/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/10.%20Sorted%20Union/test.js)

### 11. Convert HTML Entities

#### Requirements

Convert the characters `&`, `<`, `>`, `"` (double quote), and `'` (apostrophe), in a string to their corresponding HTML entities.

Examples:

```js
convertHTML("abcd"); // should return "abcd".
convertHTML("Terms & Conditions"); // should return "Terms &amp; Conditions".
convertHTML("1 < 2 ?"); // should return "1 &lt; 2".
convertHTML("7 > 0"); // should return "7 &gt; 0".
convertHTML("<>"); // should return "&lt;&gt;".
convertHTML("one more day 'till the meetup. returns"); // should return "one more day & apos; till the meetup".
convertHTML(" QUOTES "); // should  return '&quot; QUOTES &quot;'.
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/11.%20Convert%20HTML%20Entities/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/11.%20Convert%20HTML%20Entities/test.js)

### 12. Sum All Odd Fibonacci Numbers

#### Requirements

Given a positive integer `num`, return the sum of all odd Fibonacci numbers that are less than or equal to `num`.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` should return `10` because all odd Fibonacci numbers less than or equal to `10` are 1, 1, 3, and 5.

Examples:

```js
sumFibs(0); // should return 0.
sumFibs(-5); // should return 0.
sumFibs(10); // should return 10.
sumFibs(20); // should return 23.
sumFibs(100); //should return 188.
sumFibs(75024); // should return 60696.
sumFibs(4000000); // should return 4613732.
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/12.%20Sum%20All%20Odd%20Fibonacci%20Numbers/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/12.%20Sum%20All%20Odd%20Fibonacci%20Numbers/test.js)

### 13. Sum All Primes

#### Requirements

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite `sumPrimes` so it returns the sum of all prime numbers that are less than or equal to num.

Examples:

```js
sumPrimes(5); // should return a number.
sumPrimes(10); // should return 17.
sumPrimes(100); // should return 1060.
sumPrimes(977); // should return 73156.
sumPrimes(1000); // should return 76127.
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/13.%20Sum%20All%20Primes/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/13.%20Sum%20All%20Primes/test.js)

### 14. Smallest Common Multiple

#### Requirements

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Examples:

```js
smallestCommons([1, 5]); // should return a number.
smallestCommons([1, 5]); // should return 60.
smallestCommons([5, 1]); // should return 60.
smallestCommons([2, 10]); // should return 2520.
smallestCommons([10, 2]); // should return 2520.
smallestCommons([1, 13]); // should return 360360.
smallestCommons([13, 1]); // should return 360360.
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/14.%20Smallest%20Common%20Multiple/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/14.%20Smallest%20Common%20Multiple/test.js)

### 15. Drop it

#### Requirements

Given the array `arr`, iterate through and remove each element starting from the first element (the 0 index) until the function `func` returns `true` when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, `arr` should be returned as an empty array.

Examples:

```js
dropElements([1, 2, 3, 4, 5], function (n) {
  return n > 1;
}); // should return [2, 3, 4, 5].
dropElements([5, 7, 5, 7, 5], (n) => n === 7); // should return [7, 5, 7, 5].
dropElements([3, 4, 5], (n) => n > 5); // should return [].
dropElements([3, 9, 7], (n) => n > 3); // should return [9, 7].
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/15.%20Drop%20it/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/15.%20Drop%20it/test.js)

### 16. Steamroller

#### Requirements

Flatten a nested array. You must account for varying levels of nesting. Your solution should not use the `Array.prototype.flat()` or `Array.prototype.flatMap()` methods.

Examples:

```js
steamrollArray(["a", 2]); // should return ["a", 2].
steamrollArray([[["a"]], [["b"]], [1]]); // should return ['a', 'b', 1].
steamrollArray([1, [], [2, [[1]]]]); // should  return [1, 2, 1].
steamrollArray([1, {}, [2, [[{ a: 1 }]]]]); // should return [1, {}, 2, { a: 1 }].
```

#### Solution

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/16.%20Steamroller/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/16.%20Steamroller/test.js)
