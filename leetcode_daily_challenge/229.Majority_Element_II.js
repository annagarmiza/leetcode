/*
BRUTE FORCE
count elements check if they appear more than size/3 times
n = length of nums array
time complexity O(n)
space complexity O(n) => using a map to count frequency

Can we do better?

Boyer-Moore Majority Voting Algorithm 
This algorithm works on the fact that if an element occurs more than N/2 times, it means that the remaining elements other than this would definitely be less than N/2.

What aboout n/3 ?
if an element occures more than n/3 there could be at most 2 elements like this. remaining elements would def be less or equal to n/3

choose 2 candidates from the given set of elements if it is the same as the candidate element, increase the votes. Otherwise, decrease the votes if votes become 0, select another new element as the new candidate.
Afterwards we will have to check if the remainiang candidates frequency is more than n/3

n = length of nums array
time complexity: O(n) + O(n) = O(n)
space complexity: O(1) (constant map length of 2)

*/

const MajorityElement = (nums) => {
  const map = new Map();
  const res = [];

  for (let num of nums) {
    //number inside map
    if (map.get(num)) {
      map.set(num, map.get(num) + 1);
    }

    //number no inside map

    //if map size is smaller than 0, add
    else if (map.size < 2) {
      map.set(num, 1);
    }
    // if number is not in map, reduce count
    else {
      for (let [key, value] of map) {
        value === 1 ? map.delete(key) : map.set(key, value - 1);
      }
    }
  }

  for (let [key, value] of map) {
    const counter = nums.filter((n) => n === key).length;
    if (counter > Math.floor(nums.length / 3)) {
      res.push(key);
    }
  }

  return res;
};
