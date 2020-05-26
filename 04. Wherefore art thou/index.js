function whatIsInAName(collection, source) {
  if (!Array.isArray(collection)) return;

  if (typeof source !== "object" || source === null || !(source instanceof Object)) return;

  const sourceKeys = Object.keys(source);

  return collection.filter((obj) => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

module.exports = whatIsInAName;
