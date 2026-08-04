function findUniqueChar(str) {
  const mapChar = new Map();

  for (i in str) {
    if (mapChar.has(str[i])) {
      mapChar.set(str[i], [mapChar.get(str[i]) + 1, i]);
    } else {
      mapChar.set(str[i], [1, i]);
    }
  }

  let minINdex = str.length;
  for (const [key, value] of mapChar.entries()) {
    if (value[0] === 1) {
      return mapChar.get(key)[1];
    } else {
      return -1;
    }
  }
}

console.log(findUniqueChar("aabb"));
