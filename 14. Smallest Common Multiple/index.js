function smallestCommons(arr) {
  if (arguments.length !== 1 || arr.length !== 2) return;

  if (!Array.isArray(arr) || typeof arr[0] !== "number" || typeof arr[1] !== "number") return;

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let multiply = max;

  for (let i = max; i >= min; i--) {
    if (multiply % i !== 0) {
      multiply += max;
      i = max;
    }
  }
  return multiply;
}

module.exports = smallestCommons;
