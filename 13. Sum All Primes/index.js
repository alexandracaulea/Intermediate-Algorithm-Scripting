function isPrime(x) {
  if (arguments.length !== 1 || typeof x !== "number") return;

  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return x !== 1 && x !== 0;
}

function sumPrimes(num) {
  if (arguments.length !== 1 || typeof num !== "number") return;

  let i = 1;
  let sum = 0;
  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}

module.exports = {
  isPrime,
  sumPrimes,
};
