function sumAll(arr: number[]) {
  if (!Array.isArray(arr)) return;
  const minVal = Math.min(...arr);
  const maxVal = Math.max(...arr);
  let sum = 0;

  for (let i = minVal; i <= maxVal; i++) {
    sum += i;
  }
  return sum;
}

export default sumAll;