/*
  1) Brute Force
  n = number of words
  k = MAX(wordCharacterLength)
  time complexity: O(n * k)
  space complexuty O(n * k)
*/
const reverseFunction1 = (s) => {
  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }

  return words.join(" ");
};

/*
  2) Stack
  n = length of string s
  time complexity: O(n)
  k = length of longest word in a string
  space complexity: O(k+n) => k can be max n => O(2n) = O(n)
*/

const reverseFunction2 = (s) => {
  const stack = [];
  let reveresedString = "";

  for (let i = 0; i < s.length; i++) {
    while (s[i] !== " " && i < s.length) {
      stack.push(s[i]);
      i++;
    }

    while (stack.length > 0) {
      str += stack.pop();
    }

    if (i < s.length) str += " ";
  }

  return reveresedString;
};

/*
  3) String manipulation, 2 pointers
  n = number of words
  k = number of max word chracters
  t = length of str
  time complexity = O(n*k + n*(k/2))  => O(n*k) => O(t)
  space complexity = O(t)
  ** in javascript string are immuntable primitive values, therefore we cannot manipulate in-place string -> therefore added space complexity
*/

const reverseFunction3 = (s) => {
  let start = 0;
  let end = 0;
  let sArr = s.split("");
  let lastIndex = 0;

  while (lastIndex < s.length) {
    //progress end
    while (end + 1 <= s.length && s[end + 1] !== " ") {
      end++;
    }
    lastIndex = end;

    //swap
    while (start < end) {
      [sArr[start], sArr[end]] = [sArr[end], sArr[start]];
      start++;
      end--;
    }

    start = lastIndex + 2;
    end = lastIndex + 2;
  }

  return sArr.join("");
};
