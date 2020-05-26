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

1.  [Sum All Numbers in a Range](#1.-sum-all-numbers-in-a-range)
2.  [Diff Two Arrays](#2.-diff-two-arrays)
3.  [Seek and Destroy](#3.-seek-and-destroy)
4.  [Wherefore art thou](#4·-wherefore-art-thou)

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

#### **Solution**

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

#### **Solution**

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
whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 5, c: 3 }); // should return []
```

#### **Solution**

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/04.%20Wherefore%20art%20thou/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/04.%20Wherefore%20art%20thou/test.js)
