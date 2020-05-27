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
destroyer([35, 12, 2, 7, 15], 12, 2, 15, 7) should return [35].
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
