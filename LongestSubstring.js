/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l, r;
  let max = 0;
  let counter = new Map();

  counter.set(s[0], 1);
  l = 0;
  r = 0;

  while (r < s.length - 1) {
    r++;
    if (counter.has(s[r])) {
      counter.set(s[r], counter.get(s[r]) + 1);
    } else {
      counter.set(s[r], 1);
    }
    while (counter.get(s[r]) > 1) {
      counter.set(s[l], counter.get(s[l]) - 1);
      l++;
    }
    max = Math.max(max, r - l + 1);
  }
};
