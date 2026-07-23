function ReverseWords(str) {
  let quebrado = str.split(" ").filter((item) => item !== "");
  var left = 0;
  var right = quebrado.length - 1;
  while (left < right) {
    [quebrado[left], quebrado[right]] = [quebrado[right], quebrado[left]];
    left++;
    right--;
  }
  return quebrado.join(" ");
}
