/*
check the count of all "AAA"
check the count of all "BBB"
time complexity: O(N)
space complexity: O(1)
*/

const winnerOfGame = (colors) => {
  if (colors.length < 3) return false;
  let countAlice = 0;
  let countBob = 0;

  for (let i = 1; i < colors.length - 1; i++) {
    if (colors[i - 1] === "A" && colors[i] === "A" && colors[i + 1] === "A") {
      countAlice++;
    }
    if (colors[i - 1] === "B" && colors[i] === "B" && colors[i + 1] === "B") {
      countBob++;
    }
  }

  return countAlice <= countBob ? false : true;
};
