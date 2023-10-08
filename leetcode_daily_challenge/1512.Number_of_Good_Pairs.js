/*
Brute Force : 
n = length of nums array
time complexity : O(n^2)
for every element going till the end of the array seraching for a match
space complexity: O(1)
---------------------------------

Can we do better?
Let's look at the pattern:
[1,1,1,1,1]

(1,1) => 1 pair
(1,1),1 => 1+2 = 3 pairs
(1,1,1),1 => 3+3 = 6 pairs
(1,1,1,1),1 => 6+4 = 10 pairs

the number of pairs we can form is:
prev_number_of_good_pairs + prev_count_of_number

everytime we encounter a number we are going to add the prev times it appeared to our accumulating result


n = length of nums array
time complexity : O(n)
space complxity: O(n)



*/
const numIdenticalPairs = (nums) => {
  const map = new Map();
  let numberGoodPairs = 0;

  for (let num of nums) {
    numberGoodPairs += map.get(num) || 0;
    map.set(num, (map.get(num) || 0) + 1);
  }

  return numberGoodPairs;
};
