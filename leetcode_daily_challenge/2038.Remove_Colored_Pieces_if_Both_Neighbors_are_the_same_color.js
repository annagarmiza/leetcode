/*
check the count of all "AAA"
check the count of all "BBB"
n = length of colors
time complexity: O(n)
space complexity: O(1)
*/

const winnerOfGame = (colors) => {
  if (colors.length < 3) return false;

  let countAlice = 0;
  let countBob = 0;

  for (let i = 1; i < colors.length - 1; i++) {
    if (colors[i - 1] === colors[i] && colors[i] === colors[i + 1]) {
      colors[i] === "A" ? countAlice++ : countBob++;
    }
  }

  return countAlice <= countBob ? false : true;
};
