function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  if (arguments.length !== 1 || !Array.isArray(arr)) return;

  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM));
    return { name, orbitalPeriod };
  });
}

module.exports = orbitalPeriod;
