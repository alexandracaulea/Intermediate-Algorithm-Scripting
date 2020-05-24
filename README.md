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

1.  [Sum All Numbers in a Range](#sum-all-numbers-in-a-range)

### Sum All Numbers in a Range

Given an array of two numbers, return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

Example:

`sumAll([4, 1])` should return `10` because sum of all the numbers between `1` and `4` (both inclusive) is `10`.

```js
sumAll([1, 3]); // should return 6.
sumAll([3, 1]); // should return 6.
sumAll([4, 7]); // should return 22.
sumAll([7, 4]); // should return 22.
```

### **Solution**

[See the JavaScript solution that I wrote.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/01.%20Sum%20All%20Numbers%20in%20a%20Range/index.js)

[See the test cases that I wrote in Jest.](https://github.com/alexandracaulea/Intermediate-Algorithm-Scripting/blob/master/01.%20Sum%20All%20Numbers%20in%20a%20Range/test.js)
